import type { Metadata } from "next";
import Link from "next/link";
import { BingkaiBalok } from "@/components/bingkai-balok";
import { KepalaHalaman } from "@/components/kepala-halaman";
import { JudulSeksi } from "@/components/judul-seksi";
import { KontenSementara } from "@/components/konten-sementara";
import { PlaceholderFoto } from "@/components/placeholder-foto";
import { faq, syarat, tahapan } from "@/data/ppdb";
import {
  linkWa,
  ppdbMulai,
  ppdbPengumuman,
  ppdbSelesai,
  site,
  tahunPpdb,
} from "@/data/site";

export const metadata: Metadata = {
  title: "PPDB",
  description: `Penerimaan peserta didik baru ${site.nama} untuk tahun ajaran ${tahunPpdb}. Tanpa tes akademis, hanya perkenalan dan observasi saat anak bermain.`,
  alternates: { canonical: `${site.url}/ppdb` },
};

export default function HalamanPpdb() {
  return (
    <>
      <KepalaHalaman
        label="PPDB"
        judul={`Penerimaan anak baru tahun ${tahunPpdb}`}
        deskripsi="Tidak ada tes akademis. Anak diperkenalkan lewat bermain, dan orang tua diberi waktu bertanya."
      />
      <BagianAjakan />
      <KontenSementara>
        <BagianSyarat />
        <BagianTahapan />
        <BagianFaq />
      </KontenSementara>
    </>
  );
}

/* ------------------------------------------------------------------ */

function BagianAjakan() {
  return (
    <section className="border-b-4 border-hijau-900 bg-hijau-900 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="inline-block rounded-full bg-kunyit-400 px-4 py-1 text-xs font-bold tracking-wider text-hijau-900 uppercase">
              Pendaftaran dibuka
            </p>
            <p className="mt-5 font-display text-3xl font-extrabold text-balance text-white">
              {ppdbMulai} sampai {ppdbSelesai}
            </p>
            <p className="mt-4 max-w-lg leading-relaxed text-hijau-100">
              Pengumuman pada {ppdbPengumuman}. Pendaftaran cukup lewat
              Whatsapp atau datang langsung ke sekolah pada jam kerja.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={linkWa}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-kunyit-500 px-6 py-3 text-center font-display font-bold text-hijau-900 transition-colors duration-200 hover:bg-kunyit-400"
              >
                Tanya via Whatsapp
              </a>
              <Link
                href="/kontak"
                className="rounded-2xl border-[3px] border-kunyit-400 px-6 py-3 text-center font-display font-bold text-kunyit-300 transition-colors duration-200 hover:bg-hijau-950"
              >
                Lihat lokasi sekolah
              </Link>
            </div>
          </div>
          <BingkaiBalok warna="kunyit" miring={4} className="mx-auto w-full max-w-sm">
            <PlaceholderFoto
              label="Suasana kelas saat pendaftaran"
              warna="kunyit"
              aspect="aspect-4/3"
              className="border-0"
            />
          </BingkaiBalok>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function BagianSyarat() {
  return (
    <section id="syarat" className="mx-auto max-w-6xl scroll-mt-32 px-4 py-20">
      <JudulSeksi
        label="Syarat pendaftaran"
        judul="Tiga hal yang perlu disiapkan"
        deskripsi="Berkas sederhana. Tidak ada tes membaca atau menulis untuk anak."
      />
      <ul className="mt-10 grid gap-5 md:grid-cols-3">
        {syarat.map((s) => (
          <li
            key={s.judul}
            className="rounded-[1.75rem] border-4 border-hijau-900 bg-white p-6"
          >
            <h3 className="font-display text-xl font-bold text-hijau-900">
              {s.judul}
            </h3>
            <ul className="mt-3 space-y-2">
              {s.isi.map((baris) => (
                <li key={baris} className="flex items-start gap-2 text-ink-soft">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-2 w-2 shrink-0 rounded-sm bg-kunyit-500"
                  />
                  {baris}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function BagianTahapan() {
  return (
    <section
      id="tahapan"
      className="scroll-mt-32 border-y-4 border-hijau-900 bg-kertas-100 py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <JudulSeksi
          label="Tahapan"
          judul="Empat langkah dari pendaftaran sampai masuk kelas"
          deskripsi="Setiap tahap diberitahukan kepada orang tua lewat telepon dan pengumuman sekolah."
        />
        <ol className="mt-10 space-y-4">
          {tahapan.map((t, i) => (
            <li
              key={t.tahap}
              className="flex flex-col gap-4 rounded-3xl border-4 border-hijau-900 bg-white p-6 sm:flex-row sm:items-center"
            >
              <span
                aria-hidden="true"
                className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-kunyit-400 font-display text-2xl font-extrabold text-hijau-900"
              >
                {i + 1}
              </span>
              <div className="sm:w-48">
                <h3 className="font-display text-lg font-bold text-hijau-900">
                  {t.tahap}
                </h3>
                <p className="text-sm font-semibold text-hijau-700">
                  {t.waktu}
                </p>
              </div>
              <p className="flex-1 leading-relaxed text-ink-soft">{t.uraian}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function BagianFaq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-32 px-4 py-20">
      <JudulSeksi
        label="Pertanyaan orang tua"
        judul="Yang paling sering ditanyakan"
        align="center"
      />
      <div className="mt-10 space-y-4">
        {faq.map((f) => (
          <details
            key={f.tanya}
            className="group rounded-3xl border-4 border-hijau-900 bg-white"
          >
            <summary className="cursor-pointer list-none p-5 font-display text-lg font-bold text-hijau-900 marker:hidden">
              <span className="flex items-start justify-between gap-4">
                {f.tanya}
                <span
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-hijau-600 transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </span>
            </summary>
            <div className="border-t-2 border-kertas-200 p-5 leading-relaxed text-ink-soft">
              {f.jawab}
            </div>
          </details>
        ))}
      </div>
      <p className="mt-10 text-center text-sm text-ink-soft">
        Masih ada pertanyaan? Hubungi sekolah lewat{" "}
        <a href={linkWa} className="font-bold text-hijau-700 underline">
          Whatsapp
        </a>{" "}
        atau datang langsung pada jam kerja.
      </p>
    </section>
  );
}
