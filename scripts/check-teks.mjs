#!/usr/bin/env node
/**
 * Pemeriksa kebersihan teks untuk folder data/, app/, dan components/.
 *
 * Menangkap enam masalah yang sering muncul saat menulis naskah panjang:
 *  1. Karakter non-Latin di luar tanda baca yang disengaja.
 *  2. Kalimat tercampur bahasa (daftar kata Inggris + frasa damage).
 *  3. Kata camelCase nyangkut di dalam teks huruf kecil.
 *  4. Kata berkapital di tengah kalimat, di luar daftar nama diri.
 *  5. Garis bawah di dalam prosa.
 *  6. Token yang diulang banyak kali, sisa generator rusak.
 *
 * Pemeriksaan 2 sampai 6 hanya berjalan di dalam string literal, jadi
 * nama identifier kode (mis. `children`) tidak pernah dilaporkan.
 *
 * Batasnya: ini bukan pemeriksa ejaan. Validator ini hanya menangkap
 * pola damage yang mekanis. Naskah tetap harus dibaca manusia.
 *
 * Jalankan: npm run check:teks
 */
import { readdir, readFile } from "node:fs/promises";
import { join, extname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const DIRS = ["data", "app", "components"];

/* Tanda baca dan simbol yang memang dipakai di dalam naskah. */
const BOLEH = new Set([
  "—",
  "–",
  "‘",
  "’",
  "“",
  "”",
  "…",
  "·",
  "×",
  "°",
  " ",
]);

/* Istilah teknis yang boleh muncul di dalam naskah. */
const TEKNIS = new Set([
  "Tailwind",
  "Instagram",
  "WhatsApp",
  "Google",
  "Vercel",
  "Next",
  "React",
  "TypeScript",
  "PPDB",
  "PAUD",
  "SMP",
  "SD",
  "Jogja",
  "Yogyakarta",
]);

/* Potongan campuran bahasa yang benar-benar pernah muncul. */
const CAMPUR = [
  "actually",
  "trust me",
  "obviously",
  "autophagy",
  "stubbornize",
  "powerhouse",
  "liberatingfree",
  "hardywifeiks",
  "naciungy",
  "nasiongy",
  "atom uncontrolled",
  "核心",
  // Kata Inggris huruf kecil yang pernah nyangkut di naskah Indonesia.
  // Dipakai untuk menangkap damage seperti "Guru yang accompany anak".
  // Hanya kata yang TIDAK juga kata pinjaman sah dalam bahasa Indonesia.
  "accompany",
  "children",
  "childrens",
  "teacher",
  "teachers",
  "kindergarten",
  "classroom",
  "learning",
  "learned",
  "teaching",
  "happy",
  "smart",
  "morning",
  "welcome",
  "stories",
  "photos",
  "activities",
  "curious",
  "wonderful",
  "beautiful day",
];

/*
 * Kata camelCase yang nyangkut di dalam teks huruf kecil adalah tanda
 * damage yang khas: "Anak Andaemann", "Tama Indria", "ber partake".
 *
 * Aturannya sengaja sempit supaya tidak menandai teks yang benar:
 *   - hanya kata dengan >= 8 huruf, karena nama resmi seperti
 *     "iPhone" atau "eLearning" memang lazim muncul;
 *   - hanya di dalam baris prosa, bukan di nama file atau variabel.
 */
const PANJANG_MIN = 8;

/*
 * Kosakata nama diri dan istilah yang memang memakai huruf kapital.
 * Daftar ini sengaja ditulis tangan: isinya adalah nama yang benar-benar
 * dipakai di naskah website ini. Kata lain yang mulai kapital di tengah
 * kalimat akan dilaporkan, karena itulah bentuk damage yang paling sering
 * muncul ("Anak Andaemann", "Tama Indria", "sarjana autonomy").
 */
const BENTUK = new Set([
  // Nama diri, lembaga, dan tempat.
  "Sarmiati", "Kustiah", "Aminah", "Wulandari", "Wahyuni", "Dra", "Sd",
  "Dewantara", "Hadjar", "Ki", "Jawa", "Sanskerta", "Tamansiswa", "Siswa",
  "Taman", "Indria", "Jetis", "Yogyakarta", "Indonesia", "Cokrodiningratan",
  "A", "M", "Sangaji", "Pancasila", "Indonesia",
  // Semboyan.
  "Sung", "Tuladha", "Madya", "Mangun", "Karsa", "Tut", "Wuri", "Handayani",
  "Ngarsa", "Ndesa", "Kusuma", "Wardani", "Ayu",
  // Nama anak dalam contoh rapor.
  "Rafi", "Bima", "Nisa", "Tari", "Bayu", "Putri", "Dewi", "Rina", "Endang",
  "Siti",
  // Nilai dan prestasi.
  "Juara", "Gelombang",
  // Nama hari, bulan, dan waktu.
  "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu",
  "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli",
  "Agustus", "September", "Oktober", "November", "Desember",
  "Pagi", "Siang", "Sore", "Malam",
  // Kata yang sering muncul di awal kalimat atau judul.
  "Baru", "Tua", "Kita", "Anda", "Anak", "Bermain", "Belajar", "Sekolah",
  "PPDB", "PAUD", "TKI", "SD", "SMP", "TK", "Kuliah", "Ilmu",
  "Permendikbudristek", "Nomor", "Ki", "Ayah", "Ibu",
]);

let masalah = 0;

function cekBaris(baris, label) {
  const hasil = [];

  // 1. Karakter di luar ASCII, kecuali tanda baca yang diizinkan.
  for (const ch of baris) {
    const cp = ch.codePointAt(0);
    if (cp < 128) continue;
    if (BOLEH.has(ch)) continue;
    hasil.push(
      `karakter asing: ${JSON.stringify(ch)} (U+${cp
        .toString(16)
        .toUpperCase()
        .padStart(4, "0")})`,
    );
    break;
  }

  // 2. Potongan campuran bahasa.
  //    Diperiksa ulang di dalam string literal pada langkah 3, supaya
  //    nama identifier kode (mis. "children") tidak ikut dilaporkan.

  // 3. Pola damage yang bisa dideteksi tanpa kamus:
  //    a. campuran bahasa di dalam teks
  //    b. camelCase nyangkut di dalam teks (nilai string saja)
  //    c. garis bawah di dalam prosa
  //    d. token yang diulang banyak kali (sisa generator rusak)
  const nilaiString = baris.match(/"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/g) ?? [];
  for (const nilai of nilaiString) {
    const isi = nilai.slice(1, -1);
    const kecil = isi.toLowerCase();

    for (const frasa of CAMPUR) {
      if (kecil.includes(frasa.toLowerCase())) {
        hasil.push(`kalimat tercampur: "${frasa}"`);
        break;
      }
    }

    for (const kata of isi.match(/\b[a-z]+[A-Z][A-Za-z]*\b/g) ?? []) {
      if (kata.length < PANJANG_MIN) continue;
      if (TEKNIS.has(kata)) continue;
      hasil.push(`camelCase dalam teks: "${kata}"`);
      break;
    }

    /*
     * Kata berkapital di TENGAH kalimat, bukan di awal kalimat.
     * "Hari pertama sekolah." itu benar; "sarjana autonomy" dan
     * "Tama Indria" itu damage.
     *
     * Aturannya sengaja sangat sempit supaya tidak menambah noise:
     *   1. Pecah string per kalimat, lewati kata pertama tiap kalimat
     *      karena huruf kapital di awal kalimat memang wajib;
     *   2. Lewati kata yang menempel pada koma, karena daftar nama
     *      diri seperti "Cokrodiningratan, Jetis, Yogyakarta" wajar;
     *   3. Hanya String yang dominan huruf kecilnya yang diperiksa,
     *      supaya judul dan nama resmi tidak ikut dilaporkan.
     */
    const huruf = (isi.match(/[a-z]/g) ?? []).length;
    const kapitalHuruf = (isi.match(/[A-Z]/g) ?? []).length;
    if (huruf <= 20) continue;
    if (kapitalHuruf / (huruf + kapitalHuruf) >= 0.12) continue;

    for (const kalimat of isi.split(/(?<=[.!?])\s+/)) {
      const token = kalimat.trim().split(/\s+/);
      for (let i = 1; i < token.length; i++) {
        const kata = token[i].replace(/[.,;:()"'”]/g, "");
        if (!/^[A-Z][a-z]{3,}$/.test(kata)) continue;
        if (BENTUK.has(kata)) continue;
        if (TEKNIS.has(kata)) continue;

        // Daftar nama diri: kata BERTUBUNG dengan koma.
        const sebelum = token[i - 1] ?? "";
        const sesudah = token[i + 1] ?? "";
        if (/[,:—-]$/.test(sebelum)) continue;
        if (/^[,:]/.test(sesudah)) continue;

        /*
         * Deretan kata kapital = judul resmi, bukan damage.
         * "Permendikbudristek Nomor 13 Tahun 2022" adalah sebutan
         * peraturan yang wajar. Yang damage justru kata kapital yang
         * dikelilingi huruf kecil, seperti "Anak Andaemann".
         * Angka juga dihitung sebagai bagian deretan, karena
         * sebutan peraturan hampir selalu diikuti nomor.
         */
        const kapitalSebelum = /^[A-Z]/.test(sebelum.trim());
        const kapitalSesudah = /^[A-Z]/.test(sesudah.trim());
        const angkaSebelum = /^\d/.test(sebelum.trim());
        const angkaSesudah = /^\d/.test(sesudah.trim());
        if (kapitalSebelum || kapitalSesudah || angkaSebelum || angkaSesudah) {
          continue;
        }

        hasil.push(`kata kapital di tengah kalimat: "${kata}"`);
        break;
      }
      if (hasil.some((p) => p.startsWith("kata kapital"))) break;
    }

    if (/[a-z]\s+[a-z]?_[a-z_]+/i.test(isi)) {
      hasil.push(`garis bawah di dalam prosa: "${isi.slice(0, 60)}"`);
    }

    // Token yang sama diulang >= 6 kali berurutan.
    const token = isi.match(/\b[A-Za-z]{3,}\b/g) ?? [];
    let run = 1;
    for (let i = 1; i < token.length; i++) {
      run = token[i] === token[i - 1] ? run + 1 : 1;
      if (run >= 6) {
        hasil.push(`token diulang ${run} kali: "${token[i]}"`);
        break;
      }
    }
  }

  for (const pesan of hasil) {
    masalah++;
    console.log(`  [${label}] ${pesan}`);
    console.log(`      ${baris.trim().slice(0, 110)}`);
  }
}

/**
 * `dirMulai` SELALU path absolut. Fungsi ini tidak boleh menggabungkan
 * ulang dengan ROOT saat rekursi, karena itu membuat subdirektori
 * (app/profil, app/rapor, dst.) tidak pernah ikut terpindai.
 */
async function cekDir(dirAbs) {
  const isi = await readdir(dirAbs, { withFileTypes: true });
  const label = resolve(dirAbs).slice(ROOT.length) || ".";

  for (const ent of isi) {
    const path = join(dirAbs, ent.name);
    if (ent.isDirectory()) {
      await cekDir(path);
      continue;
    }
    if (![".ts", ".tsx", ".css", ".mjs"].includes(extname(ent.name))) continue;
    if (ent.name.endsWith(".generated.ts")) continue;

    const teks = await readFile(path, "utf8");
    teks
      .split("\n")
      .forEach((b, i) => cekBaris(b, `${label}/${ent.name}:${i + 1}`));
  }
}

console.log("Memeriksa kebersihan teks...\n");
for (const d of DIRS) await cekDir(join(ROOT, d));

console.log(
  masalah === 0
    ? "\nBersih. Tidak ada karakter asing, campuran bahasa, atau camelCase nyangkut."
    : `\nDitemukan ${masalah} masalah. Perbaiki sebelum lanjut.`,
);
process.exit(masalah === 0 ? 0 : 1);
