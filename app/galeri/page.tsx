import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { KepalaHalaman } from "@/components/kepala-halaman";
import { JudulSeksi } from "@/components/judul-seksi";
import { KontenSementara } from "@/components/konten-sementara";
import { PlaceholderFoto } from "@/components/placeholder-foto";
import { galeri, kategoriGaleri, type KategoriGaleri } from "@/data/galeri";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Galeri Kegiatan",
  description: `Dokumentasi kegiatan anak di ${site.nama}: bermain balok, seni rupa, kokurikuler, dan suasana ruang kelas.`,
  alternates: { canonical: `${site.url}/galeri` },
};

type Params = {
  searchParams: Promise<{ kategori?: string }>;
};

function validKategori(nilai: string | undefined): KategoriGaleri | undefined {
  return kategoriGaleri.find((k) => k === nilai);
}

export default async function HalamanGaleri({ searchParams }: Params) {
  const { kategori } = await searchParams;
  const aktif = validKategori(kategori);
  const foto = aktif ? galeri.filter((g) => g.kategori === aktif) : galeri;

  return (
    <>
      <KepalaHalaman
        label="Galeri"
        judul="Kegiatan anak di kelas"
        deskripsi="Foto asli akan dimuat setelah tersedia. Untuk sekarang yang tampil adalah keterangan kegiatan."
      />
      <KontenSementara>
        <BagianFilter aktif={aktif} />
        <BagianFoto foto={foto} />
      </KontenSementara>
    </>
  );
}

/* ------------------------------------------------------------------ */

function BagianFilter({ aktif }: { aktif: KategoriGaleri | undefined }) {
  return (
    <section className="border-b-2 border-kertas-200 bg-kertas-100">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <h2 className="text-xs font-bold tracking-wider text-ink-soft uppercase">
          Saring berdasarkan kegiatan
        </h2>
        <ul className="tanpa-scrollbar mt-3 flex gap-2 overflow-x-auto">
          <li className="shrink-0">
            <Link
              href="/galeri"
              aria-current={aktif ? undefined : "page"}
              className={`inline-block rounded-2xl border-[3px] px-4 py-2 text-sm font-bold whitespace-nowrap transition-colors duration-200 ${
                aktif
                  ? "border-kertas-300 bg-white text-ink-soft hover:border-hijau-400"
                  : "border-hijau-900 bg-hijau-600 text-white"
              }`}
            >
              Semua
            </Link>
          </li>
          {kategoriGaleri.map((k) => (
            <li key={k} className="shrink-0">
              <Link
                href={`/galeri?kategori=${encodeURIComponent(k)}`}
                aria-current={aktif === k ? "page" : undefined}
                className={`inline-block rounded-2xl border-[3px] px-4 py-2 text-sm font-bold whitespace-nowrap transition-colors duration-200 ${
                  aktif === k
                    ? "border-hijau-900 bg-hijau-600 text-white"
                    : "border-kertas-300 bg-white text-ink-soft hover:border-hijau-400"
                }`}
              >
                {k}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function BagianFoto({ foto }: { foto: typeof galeri }) {
  if (foto.length === 0) {
    return (
      <section className="mx-auto max-w-6xl px-4 py-20">
        <p className="text-ink-soft">
          Belum ada foto pada kategori ini. Pilih kategori lain.
        </p>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <JudulSeksi
        label="Dokumentasi"
        judul={`${foto.length} kegiatan`}
        deskripsi="Setiap foto diberi keterangan singkat supaya orang tua tahu apa yang sedang dikerjakan anak."
      />
      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {foto.map((f) => (
          <li key={f.id}>
            <figure className="h-full overflow-hidden rounded-[1.75rem] border-4 border-hijau-900 bg-white">
              {f.gambar ? (
                <div className="relative aspect-4/3">
                  <Image
                    src={f.gambar}
                    alt={f.judul}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                <PlaceholderFoto
                  label={f.kategori}
                  aspect="aspect-4/3"
                  className="border-0 border-b-4"
                />
              )}
              <figcaption className="p-5">
                <p className="text-xs font-bold tracking-wide text-hijau-600 uppercase">
                  {f.kategori}
                </p>
                <h3 className="mt-1 font-display text-lg font-bold text-hijau-900">
                  {f.judul}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {f.keterangan}
                </p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
