import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { KartuBerita } from "@/components/kartu-berita";
import { KontenSementara } from "@/components/konten-sementara";
import { berita, type Berita } from "@/data/berita.generated";
import { site } from "@/data/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return berita.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const b = cariBerita(slug);
  if (!b) return { title: "Berita tidak ditemukan" };

  return {
    title: b.judul,
    description: b.ringkas || `Berita ${site.nama} tanggal ${b.tanggal}.`,
    alternates: { canonical: `${site.url}/berita/${b.slug}` },
    openGraph: {
      type: "article",
      title: b.judul,
      description: b.ringkas,
      publishedTime: b.tanggalIso,
      images: b.gambar ? [{ url: b.gambar }] : undefined,
    },
  };
}

export default async function HalamanBeritaDetail({ params }: Params) {
  const { slug } = await params;
  const b = cariBerita(slug);
  if (!b) notFound();

  const terbaru = berita
    .filter((x) => x.slug !== b.slug)
    .slice(0, 3);

  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <KontenSementara>
        <nav aria-label="Remah roti" className="text-sm text-ink-soft">
          <Link href="/berita" className="font-bold text-hijau-700 hover:underline">
            Berita
          </Link>
          <span aria-hidden="true" className="px-2">
            /
          </span>
          <span>{b.tanggal}</span>
        </nav>

        <header className="mt-6">
          <p className="flex flex-wrap items-center gap-2 text-xs font-bold tracking-wide uppercase">
            <span className="rounded-full bg-hijau-100 px-3 py-1 text-hijau-800">
              {b.jenis}
            </span>
            <time dateTime={b.tanggalIso} className="text-terong-600">
              {b.tanggal}
            </time>
          </p>
          <h1 className="mt-4 font-display text-3xl leading-tight font-extrabold text-balance text-hijau-900 sm:text-4xl">
            {b.judul}
          </h1>
          <p className="mt-4 text-lg leading-relaxed font-semibold text-ink-soft">
            {b.ringkas}
          </p>
        </header>

        {b.gambar ? (
          <div className="relative mt-8 aspect-4/3 overflow-hidden rounded-[1.75rem] border-4 border-hijau-900 bg-kertas-200">
            <Image
              src={b.gambar}
              alt={`Dokumentasi ${b.judul}`}
              fill
              sizes="(max-width: 768px) 100vw, 48rem"
              className="object-cover"
            />
          </div>
        ) : null}

        <div className="prose-tk mt-10">
          {b.isi.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4 border-t-2 border-kertas-200 pt-6">
          <a
            href={b.tautan}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-hijau-600 px-5 py-2.5 text-sm font-bold text-white transition-colors duration-200 hover:bg-hijau-700"
          >
            Lihat di Instagram
          </a>
          <span className="text-sm text-ink-soft">{b.jumlahSuka} suka</span>
        </div>

        {terbaru.length > 0 ? (
          <section className="mt-16">
            <h2 className="font-display text-2xl font-bold text-hijau-900">
              Berita lainnya
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              {terbaru.map((x) => (
                <KartuBerita key={x.slug} b={x} />
              ))}
            </div>
          </section>
        ) : null}
      </KontenSementara>
    </article>
  );
}

/* ------------------------------------------------------------------ */

function cariBerita(slug: string): Berita | undefined {
  return berita.find((b) => b.slug === slug);
}
