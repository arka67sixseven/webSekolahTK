/**
 * PENJAGA KONTEN SEMENTARA
 * ========================
 *
 * Data asli TK Taman Indria Jetis belum diterima dari sekolah.
 * SELURUH konten identitas, guru, kelas, kegiatan, dan berita di situs ini
 * masih memakai data sementara yang diambil dari:
 *   - website & Instagram SMP Taman Dewasa Jetis (web sibling)
 *   - pengetahuan umum tentang Taman Indria / sistem Taman Siswa
 *
 * Yang WAJIB dilakukan sekolah sebelum situs ini tayang:
 *   1. Ganti seluruh isi folder `data/` dengan data asli TK.
 *   2. Isi ulang `tahunAjaran` di `data/tahun-ajar.ts`.
 *   3. Jalankan `npm run sync:berita` untuk mengambil posting Instagram resmi.
 *   4. Ubah `usingPlaceholder` di bawah menjadi `false`.
 *
 * Sakelar tampilan (file .env.local):
 *   SHOW_PLACEHOLDER=1 -> konten sementara tampil (untuk pengembangan & review)
 *   SHOW_PLACEHOLDER=0 -> semua konten sementara disembunyikan total
 *
 * Perhatikan: ini bukan sekadar menyusun label. Saat SHOW_PLACEHOLDER=0,
 * komponen `KontenSementara` tidak merender apa pun, sehingga konten
 * placeholder hilang dari halaman, bukan hanya badge-nya.
 */

/** Sumber data yang sedang dipakai situs ini. */
export const sumberData = {
  nama: "SMP Taman Dewasa Jetis Yogyakarta",
  keterangan:
    "Data sementara dari web dan Instagram SMP Taman Dewasa Jetis, dipakai sampai data resmi TK Taman Indria Jetis diterima.",
};

/**
 * Sakelar utama. Ubah menjadi `false` setelah data TK asli tersedia.
 * Perilaku bawaan: `true` (konten sementara ditampilkan) supaya tidak ada
 * halaman kosong yang tidak disengaja saat sedang dikerjakan.
 */
export const usingPlaceholder = true;

/**
 * Apakah konten sementara perlu ditampilkan di UI.
 * `SHOW_PLACEHOLDER=0` di .env.local menyembunyikannya secara total.
 */
export function placeholderTampil(): boolean {
  return process.env.SHOW_PLACEHOLDER !== "0" && usingPlaceholder;
}
