/**
 * Bingkai Balok
 * =============
 *
 * Tanda visual khas situs ini: bingkai tebal dengan satu blok warna
 * yang miring, seperti balok kayu susun mainan anak. Dipakai di hero,
 * kartu foto, dan blok statistik.
 *
 * Sengaja tanpa gradient, tanpa blob, tanpa bayangan berat.
 */
export function BingkaiBalok({
  children,
  warna = "kunyit",
  miring = -4,
  className = "",
}: {
  children: React.ReactNode;
  /** Warna blok miring yang muncul di pojok bingkai. */
  warna?: "hijau" | "kunyit" | "daun";
  /** Sudut kemiringan blok, dalam derajat. */
  miring?: number;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      {/* Blok warna miring di belakang, purely dekoratif. */}
      <span
        aria-hidden="true"
        className={`absolute -top-3 -right-3 h-full w-full rounded-[inherit] ${WARNA[warna]}`}
        style={{ transform: `rotate(${miring}deg)` }}
      />
      <div className="relative overflow-hidden rounded-[1.75rem] border-4 border-hijau-900 bg-white">
        {children}
      </div>
    </div>
  );
}

const WARNA = {
  hijau: "bg-hijau-300",
  kunyit: "bg-kunyit-300",
  daun: "bg-hijau-200",
} as const;
