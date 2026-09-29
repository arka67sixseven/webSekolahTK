import Image from "next/image";
import Link from "next/link";
import type { Berita } from "@/data/berita.generated";

/**
 * Kartu berita
 * ============
 *
 * Dipakai di daftar berita (app/berita/page.tsx), detail berita, dan
 * beranda.
 *
 * `alt` sengaja kosong: gambar thumbnail berita adalah dekoratif,
 * karena teks judul sudah menjelaskan isi. Butuh deskripsi gambar
 * yang informatif, isi alt diisi manual di pemanggilnya.
 *
 * `judulLevel` harus menyesuaikan posisinya. Di daftar berita, kartu
 * adalah isi utama halaman sehingga judulnya `h2` supaya tidak ada
 * lompatan dari `h1` ke `h3`. Di detail berita, kartu muncul di
 * dalam seksi "berita terkait" yang sudah punya `h2`, jadi `h3`.
 */
export function KartuBerita({
  b,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  alt = "",
  judulLevel: Tag = "h3",
}: {
  b: Berita;
  sizes?: string;
  alt?: string;
  judulLevel?: "h2" | "h3";
}) {
  return (
    <article className="group h-full overflow-hidden rounded-[1.75rem] border-4 border-hijau-900 bg-white transition-transform duration-200 hover:-translate-y-1">
      <div className="relative aspect-4/3 bg-kertas-200">
        {b.gambar ? (
          <Image
            src={b.gambar}
            alt={alt}
            fill
            sizes={sizes}
            className="object-cover"
          />
        ) : null}
        <span className="absolute top-3 left-3 rounded-full bg-hijau-900 px-3 py-1 text-xs font-bold text-white">
          {b.jenis}
        </span>
      </div>
      <div className="p-5">
        <p className="text-xs font-bold tracking-wide text-terong-600 uppercase">
          <time dateTime={b.tanggalIso}>{b.tanggal}</time>
        </p>
        <Tag className="mt-2 font-display text-lg leading-snug font-bold text-hijau-900">
          <Link href={`/berita/${b.slug}`} className="hover:underline">
            {b.judul}
          </Link>
        </Tag>
        {b.ringkas ? (
          <p className="mt-2 line-clamp-2 text-sm text-ink-soft">{b.ringkas}</p>
        ) : null}
      </div>
    </article>
  );
}
