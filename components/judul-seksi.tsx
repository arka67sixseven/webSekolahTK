/**
 * Judul seksi
 * ===========
 *
 * Satu tempat untuk konsistensi hierarki judul antar halaman:
 * label kecil (kunyit), judul besar (display), dan deskripsi singkat.
 *
 * `as` mengatur level heading. Default `h2` karena sebagian besar seksi berada
 * di dalam halaman. Kepala halaman memakai `h1` supaya setiap halaman
 * punya tepat satu heading tingkat tertinggi.
 */
export function JudulSeksi({
  label,
  judul,
  deskripsi,
  align = "left",
  as: Tag = "h2",
}: {
  label?: string;
  judul: string;
  deskripsi?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
}) {
  const tengah = align === "center";
  return (
    <div className={tengah ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {label ? (
        <p className="mb-3 inline-block rounded-full bg-kunyit-200 px-4 py-1 text-xs font-bold tracking-[0.12em] text-hijau-900 uppercase">
          {label}
        </p>
      ) : null}
      <Tag className="font-display text-3xl leading-tight font-bold text-balance text-hijau-900 sm:text-4xl">
        {judul}
      </Tag>
      {deskripsi ? (
        <p className="mt-4 text-base leading-relaxed text-ink-soft text-balance">
          {deskripsi}
        </p>
      ) : null}
    </div>
  );
}
