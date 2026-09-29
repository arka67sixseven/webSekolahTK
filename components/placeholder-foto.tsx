/**
 * Placeholder gambar
 * =================
 *
 * Aset asli TK belum tersedia. Alih-alih menampilkan gambar rusak,
 * komponen ini menggambar blok warna dengan keterangan singkat.
 * Ganti <Image> pemanggilnya dengan berkas asli begitu tersedia.
 *
 * Menghemat bandwidth: tidak ada satu pun request jaringan.
 */
export function PlaceholderFoto({
  label,
  warna = "kertas",
  aspect = "aspect-4/3",
  className = "",
}: {
  label?: string;
  warna?: "hijau" | "kunyit" | "daun" | "kertas";
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={`${aspect} ${GAYA[warna]} ${className} grid place-items-center border-4 border-hijau-900`}
    >
      <div className="p-4 text-center">
        <span className="font-display text-2xl font-extrabold text-hijau-800">
          {label ?? "Foto"}
        </span>
        <span className="mt-1 block text-xs text-ink-soft">
          Berkas asli menyusul
        </span>
      </div>
    </div>
  );
}

const GAYA = {
  hijau: "bg-hijau-100",
  kunyit: "bg-kunyit-100",
  daun: "bg-hijau-200",
  kertas: "bg-kertas-200",
} as const;
