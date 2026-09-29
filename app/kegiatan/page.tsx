import type { Metadata } from "next";
import { KepalaHalaman } from "@/components/kepala-halaman";
import { JudulSeksi } from "@/components/judul-seksi";
import { KontenSementara } from "@/components/konten-sementara";
import { SubNav } from "@/components/sub-nav";
import { jadwalSehari, kokurikuler } from "@/data/kegiatan";
import { nav, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Kegiatan Harian",
  description: `Jadwal sehari, kokurikuler, dan kegiatan khas ${site.nama}: manungsi, makan bersama, serta dokumentasi kegiatan anak.`,
  alternates: { canonical: `${site.url}/kegiatan` },
};

const SUB = nav.find((n) => n.href === "/kegiatan")?.children ?? [];

const WARNA = {
  hijau: { titik: "bg-hijau-500", teks: "text-hijau-800" },
  kunyit: { titik: "bg-kunyit-500", teks: "text-kunyit-800" },
  daun: { titik: "bg-hijau-400", teks: "text-hijau-900" },
} as const;

export default function HalamanKegiatan() {
  return (
    <>
      <KepalaHalaman
        label="Kegiatan"
        judul="Sehari di TK, tanpa duduk diam seharian"
        deskripsi="Anak bergantian antara bergerak, bermain, beristirahat, dan makan. Tidak ada jam belajar panjang tanpa jeda."
      />
      <SubNav items={SUB} />
      <KontenSementara>
        <BagianJadwal />
        <BagianKokurikuler />
        <BagianManungsi />
        <BagianMakanBersama />
      </KontenSementara>
    </>
  );
}

/* ------------------------------------------------------------------ */

function BagianJadwal() {
  return (
    <section id="jadwal" className="mx-auto max-w-6xl scroll-mt-32 px-4 py-20">
      <JudulSeksi
        label="Jadwal sehari"
        judul="Delapan rentang, empat jenis kegiatan"
        deskripsi="Waktu dipecah pendek supaya anak tidak kelelahan dan selalu punya pilihan."
      />
      <ol className="mt-10 space-y-3">
        {jadwalSehari.map((s) => (
          <li
            key={s.jam}
            className="grid gap-3 rounded-3xl border-4 border-hijau-900 bg-white p-5 sm:grid-cols-[10rem_1fr] sm:items-baseline sm:gap-6"
          >
            <div className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className={`h-3.5 w-3.5 shrink-0 rounded-sm ${WARNA[s.warna].titik}`}
              />
              <span className="font-display text-lg font-extrabold text-hijau-900">
                {s.jam}
              </span>
            </div>
            <div>
              <h3 className={`font-display text-xl font-bold ${WARNA[s.warna].teks}`}>
                {s.kegiatan}
              </h3>
              <p className="mt-1 leading-relaxed text-ink-soft">{s.keterangan}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-6 text-sm text-ink-soft">
        Jadwal dapat berubah menyesuaikan kebutuhan kelompok. Perubahan
        diumumkan lebih dulu kepada orang tua.
      </p>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function BagianKokurikuler() {
  return (
    <section
      id="kokurikuler"
      className="scroll-mt-32 border-y-4 border-hijau-900 bg-hijau-900 py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <JudulSeksi
          label="Kokurikuler"
          judul="Empat kegiatan yang bergiliran"
          deskripsi="Setiap anak melewati semua jenis kegiatan. Tidak ada anak yang hanya boleh satu jenis saja."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {kokurikuler.map((k) => (
            <article
              key={k.id}
              className="rounded-[1.75rem] border-4 border-kunyit-400 bg-hijau-950 p-6"
            >
              <p className="text-xs font-bold tracking-wider text-kunyit-300 uppercase">
                {k.jadwal}
              </p>
              <h3 className="mt-2 font-display text-xl font-bold text-white">
                {k.nama}
              </h3>
              <p className="mt-2 leading-relaxed text-hijau-100">{k.isi}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function BagianManungsi() {
  return (
    <section id="manungsi" className="mx-auto max-w-6xl scroll-mt-32 px-4 py-20">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-[1.75rem] border-4 border-hijau-900 bg-kertas-100 p-8">
          <p className="inline-block rounded-full bg-hijau-100 px-4 py-1 text-xs font-bold tracking-wider text-hijau-900 uppercase">
            Manungsi
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-hijau-900">
            Anak bermain bebas, pamong mencatat
          </h2>
          <p className="mt-4 leading-relaxed text-ink-soft">
            Manungsi adalah waktu anak bermain tanpa tema yang ditentukan
            kelas. Di sinilah anak memilih mainan sendiri dan pamong tidak
            mengarahkan. Alih-alih mengisi laporan, pamong mengamati dan
            mencatat apa yang benar-benar terjadi.
          </p>
        </div>
        <div className="rounded-[1.75rem] border-4 border-hijau-900 bg-kunyit-100 p-8">
          <h3 className="font-display text-xl font-bold text-hijau-900">
            Yang dicatat pamong
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              "Anak mana yang bermain bersama siapa",
              "Bahan apa yang dipilih anak dan berapa lama",
              "Kapan anak pertama kali mencoba mainan baru",
              "Konflik kecil apa yang muncul dan bagaimana anak menyelesaikannya",
              "Kalimat anak yang perlu dicatat untuk laporan",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2 text-ink-soft">
                <span
                  aria-hidden="true"
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-sm bg-kunyit-500"
                />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function BagianMakanBersama() {
  return (
    <section
      id="makan-bersama"
      className="scroll-mt-32 border-y-4 border-hijau-900 bg-hijau-50 py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="inline-block rounded-full bg-hijau-200 px-4 py-1 text-xs font-bold tracking-wider text-hijau-900 uppercase">
              Makan bersama
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-hijau-900">
              Makan sendiri, duduk dengan teman
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Anak makan dengan tangan sendiri tanpa dibantu pamong. Alat
              makan diletakkan di jangkauan anak, sehingga anak berlatih
              mandiri tanpa bergantung pada orang lain.
            </p>
          </div>
          <ul className="space-y-3">
            {[
              "Anak makan sendiri tanpa disuapi.",
              "Alat makan diletakkan di jangkauan anak.",
              "Setelah makan, meja dibersihkan bersama anak.",
              "Anak belajar menunggu sampai semua teman selesai.",
            ].map((t) => (
              <li
                key={t}
                className="flex items-start gap-3 rounded-2xl border-2 border-hijau-900 bg-white p-4"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-hijau-600 font-display text-xs font-extrabold text-white"
                >
                  &#10003;
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
