/**
 * Wrapper isi halaman.
 *
 * Sebelumnya menampilkan label "Konten sementara". Sesuai keputusan
 * sekolah, label dihapus dari semua section; isi tetap ditampilkan dan
 * nantinya diisi dengan konten resmi.
 */
export function KontenSementara({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`relative ${className}`}>{children}</div>;
}

/** Banner pengingat data sementara. Sudah dihapus sesuai keputusan sekolah. */
export function PeringatanKonten() {
  return null;
}
