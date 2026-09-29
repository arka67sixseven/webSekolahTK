import { placeholderTampil, sumberData } from "@/data/content-status";

/**
 * Penanda konten sementara.
 *
 * Saat `SHOW_PLACEHOLDER=0` komponen ini mengembalikan null, sehingga
 * seluruh isi yang ditandai placeholder hilang dari halaman, bukan
 * hanya badge-nya. Lihat `data/content-status.ts`.
 */
export function KontenSementara({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  if (!placeholderTampil()) return null;
  return (
    <div className={`relative ${className}`}>
      <span
        className="absolute -top-2 right-3 z-10 rounded-full bg-kunyit-500 px-2.5 py-0.5 text-[0.65rem] font-bold tracking-wide text-hijau-900 uppercase"
        title={`Sumber sementara: ${sumberData.nama}`}
      >
        Konten sementara
      </span>
      {children}
    </div>
  );
}

/** Banner pengingat di bagian atas halaman. */
export function PeringatanKonten() {
  if (!placeholderTampil()) return null;
  return (
    <div
      role="status"
      className="border-b-2 border-kunyit-500 bg-kunyit-100 px-4 py-2 text-center text-xs text-hijau-900 sm:text-sm"
    >
      <strong className="font-bold">Data sementara.</strong>{" "}
      <span>
        Situs ini sedang disiapkan. Isi halaman memakai data contoh dan
        akan diganti dengan data resmi sekolah.
      </span>
    </div>
  );
}
