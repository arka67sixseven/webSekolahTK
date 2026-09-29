import Link from "next/link";
import type { SubMenu } from "@/data/site";

/**
 * Sub-navigasi lengket untuk halaman yang punya sub-section
 * (profil, metode, kelas, kegiatan). Memakai tautan jangkar yang
 * punya smooth scroll, dengan `scroll-padding-top` dari globals.css
 * agar judul section tidak tertutup header.
 */
export function SubNav({
  items,
  label = "Di halaman ini",
}: {
  items: SubMenu[];
  label?: string;
}) {
  if (items.length === 0) return null;

  return (
    <nav
      aria-label={label}
      className="sticky top-[var(--header-h)] z-30 border-y-2 border-hijau-200 bg-kertas-50/95 backdrop-blur"
    >
      <ul className="tanpa-scrollbar mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2">
        {items.map((item) => (
          <li key={item.href} className="shrink-0">
            <Link
              href={item.href}
              className="inline-block rounded-xl px-3 py-1.5 text-sm font-bold whitespace-nowrap text-hijau-800 transition-colors duration-200 hover:bg-kunyit-200"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
