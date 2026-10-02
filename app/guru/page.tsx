import type { Metadata } from "next";
import { BingkaiBalok } from "@/components/bingkai-balok";
import { KepalaHalaman } from "@/components/kepala-halaman";
import { JudulSeksi } from "@/components/judul-seksi";
import { KontenSementara } from "@/components/konten-sementara";
import { PlaceholderFoto } from "@/components/placeholder-foto";
import { guru } from "@/data/kelas";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Guru dan Pamong",
  description: `Daftar guru dan pamong ${site.nama}. Setiap pamong mencatat perkembangan anak sehingga laporan lebih akurat.`,
  alternates: { canonical: `${site.url}/guru` },
};

const WARNA: Record<string, "hijau" | "kunyit" | "daun"> = {
  hijau: "hijau",
  kunyit: "kunyit",
  daun: "daun",
};

export default function HalamanGuru() {
  return (
    <>
      <KepalaHalaman
        label="Guru dan pamong"
        judul="Orang dewasa yang mendampingi, bukan mengajari"
        deskripsi="Pamong mengamati anak setiap hari dan mencatat apa yang sudah bisa dilakukan anak, bukan apa yang belum bisa."
      />
      <KontenSementara>
        <BagianDaftar />
      </KontenSementara>
    </>
  );
}

/* ------------------------------------------------------------------ */

function BagianDaftar() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <JudulSeksi
        label="Daftar pamong"
        judul="Orang dewasa yang mendampingi, bukan mengajari"
        deskripsi="Setiap pamong mendampingi satu kelompok dan mencatat perkembangan anak setiap hari."
      />
      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {guru.map((g, i) => {
          const warna = WARNA[i % 3 === 0 ? "hijau" : i % 3 === 1 ? "kunyit" : "daun"];
          return (
            <li key={g.id} className="h-full">
              <BingkaiBalok
                warna={warna}
                miring={i % 2 === 0 ? -4 : 4}
                className="h-full"
              >
                <div className="flex h-full flex-col">
                  <PlaceholderFoto
                    label={g.nama.split(",")[0]}
                    warna={warna}
                    aspect="aspect-3/4"
                    className="border-0 border-b-4"
                  />
                  <div className="flex flex-1 flex-col p-5">
                    <h2 className="font-display text-xl leading-tight font-bold text-hijau-900">
                      {g.nama}
                    </h2>
                    <p className="mt-1 text-sm font-bold tracking-wide text-hijau-700 uppercase">
                      {g.jabatan}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                      {g.catatan}
                    </p>
                    <p className="mt-4 border-t-2 border-kertas-200 pt-3 text-xs font-bold tracking-wide text-ink-soft uppercase">
                      Kelompok {g.kelompok}
                    </p>
                  </div>
                </div>
              </BingkaiBalok>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
