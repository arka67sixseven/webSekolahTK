import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BingkaiBalok } from "@/components/bingkai-balok";
import { KepalaHalaman } from "@/components/kepala-halaman";
import { JudulSeksi } from "@/components/judul-seksi";
import { KontenSementara } from "@/components/konten-sementara";
import { alurKemitraan, bentukKemitraan } from "@/data/kemitraan";
import { linkWa, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Kemitraan dengan Orang Tua",
  description: `Bentuk kerja sama sekolah dan orang tua di ${site.nama}: buku penghubung, jurnal bulanan, kunjungan kelas, dan pertemuan kelas.`,
  alternates: { canonical: `${site.url}/kemitraan` },
};

const WARNA = {
  hijau: "bg-hijau-100",
  kunyit: "bg-kunyit-100",
  daun: "bg-hijau-200",
} as const;

export default function HalamanKemitraan() {
  return (
    <>
      <KepalaHalaman
        label="Kemitraan"
        judul="Orang tua adalah mitra, bukan tamu"
        deskripsi="Anak tumbuh di dua tempat. Sekolah menuliskan apa yang terjadi, lalu orang tua melanjutkan di rumah."
      />
      <KontenSementara>
        <BagianBentuk />
        <BagianAlur />
        <BagianAjakan />
      </KontenSementara>
    </>
  );
}

/* ------------------------------------------------------------------ */

function BagianBentuk() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <BingkaiBalok warna="hijau" miring={3} className="mx-auto w-full max-w-sm">
          <div className="relative aspect-4/3 w-full overflow-hidden">
            <Image
              src="/images/metode/kemitraan.webp"
              alt={`Orang tua dan anak berjalan bergandengan, ilustrasi kemitraan ${site.nama}`}
              fill
              sizes="(max-width: 1024px) 100vw, 384px"
              className="object-cover"
            />
          </div>
        </BingkaiBalok>
        <div>
          <JudulSeksi
            label="Bentuk kerja sama"
            judul="Empat agenda yang sudah jadwal"
            deskripsi="Tidak perlu konfirmasi lebih dulu. Semua agenda ada di kalender sekolah dan di buku penghubung."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {bentukKemitraan.map((b) => (
              <article
                key={b.id}
                className={`rounded-[1.75rem] border-4 border-hijau-900 p-6 ${WARNA[b.warna]}`}
              >
                <p className="text-xs font-bold tracking-wider text-ink-soft uppercase">
                  {b.waktu}
                </p>
                <h2 className="mt-2 font-display text-xl font-bold text-hijau-900">
                  {b.nama}
                </h2>
                <p className="mt-2 leading-relaxed text-ink-soft">{b.isi}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function BagianAlur() {
  return (
    <section className="border-y-4 border-hijau-900 bg-hijau-900 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <JudulSeksi
          label="Alur komunikasi"
          judul="Empat langkah yang berulang setiap bulan"
          deskripsi="Cara informasi mengalir dua arah, bukan laporan searah dari guru ke orang tua."
        />
        <ol className="mt-10 space-y-4">
          {alurKemitraan.map((a, i) => (
            <li
              key={a.langkah}
              className="flex flex-col gap-4 rounded-3xl border-4 border-kunyit-400 bg-hijau-950 p-6 sm:flex-row sm:items-start"
            >
              <span
                aria-hidden="true"
                className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-kunyit-400 font-display text-xl font-extrabold text-hijau-900"
              >
                {i + 1}
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-white">
                  {a.langkah}
                </h3>
                <p className="mt-1 leading-relaxed text-hijau-100">{a.uraian}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function BagianAjakan() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 text-center">
      <h2 className="font-display text-2xl font-bold text-balance text-hijau-900 sm:text-3xl">
        Ingin melihat langsung cara anak belajar di sini?
      </h2>
      <p className="mt-4 leading-relaxed text-ink-soft">
        Kunjungan kelas terbuka untuk orang tua. Datang pada jam kerja tanpa
        perlu janji sebelumnya.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link
          href="/kontak"
          className="rounded-2xl bg-hijau-600 px-6 py-3 text-center font-display font-bold text-white transition-colors duration-200 hover:bg-hijau-700"
        >
          Lihat alamat dan jam buka
        </Link>
        <a
          href={linkWa}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border-[3px] border-hijau-900 bg-white px-6 py-3 text-center font-display font-bold text-hijau-900 transition-colors duration-200 hover:bg-hijau-100"
        >
          Tanya jadwal kunjungan
        </a>
      </div>
    </section>
  );
}
