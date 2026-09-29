import Image from "next/image";
import Link from "next/link";
import { alamatSatuBaris, linkPeta, linkWa, navRingkas, ppdbMulai, ppdbSelesai, site, tahunPpdb } from "@/data/site";

export function Footer() {
  const tahun = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t-8 border-kunyit-500 bg-hijau-900 text-hijau-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-2xl border-[3px] border-kunyit-400 bg-white p-0.5">
              <Image
                src={site.logoRingkas}
                alt={`Logo ${site.nama}`}
                width={48}
                height={48}
                className="h-full w-full object-contain"
              />
            </span>
            <span className="font-display text-lg font-extrabold text-white">
              {site.nama}
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-hijau-200">
            {site.tagline}. Bagian dari {site.institusi}, jenjang Taman
            Indria yang lahir dari nama Ki Hadjar Dewantara.
          </p>
          <p className="mt-4 text-xs leading-relaxed text-hijau-300 italic">
            {site.semboyan}
          </p>
        </div>

        <nav aria-label="Navigasi footer">
          <h2 className="font-display text-sm font-bold tracking-wide text-kunyit-300 uppercase">
            Halaman
          </h2>
          <ul className="mt-4 space-y-2">
            {navRingkas.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-hijau-100 underline-offset-4 hover:text-kunyit-300 hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-bold tracking-wide text-kunyit-300 uppercase">
            Kontak
          </h2>
          <address className="mt-4 space-y-2 text-sm not-italic text-hijau-100">
            <p>{alamatSatuBaris}</p>
            <p>
              <a
                href={`tel:${site.teleponTel}`}
                className="underline-offset-4 hover:text-kunyit-300 hover:underline"
              >
                {site.telepon}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${site.email}`}
                className="underline-offset-4 hover:text-kunyit-300 hover:underline"
              >
                {site.email}
              </a>
            </p>
          </address>
        </div>

        <div>
          <h2 className="font-display text-sm font-bold tracking-wide text-kunyit-300 uppercase">
            PPDB {tahunPpdb}
          </h2>
          <p className="mt-4 text-sm text-hijau-100">
            {ppdbMulai} sampai {ppdbSelesai}
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <a
              href={linkWa}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-kunyit-500 px-4 py-2.5 text-center text-sm font-bold text-hijau-900 transition-colors duration-200 hover:bg-kunyit-400"
            >
              Tanya via WhatsApp
            </a>
            <Link
              href="/ppdb"
              className="rounded-2xl border-2 border-hijau-200 px-4 py-2.5 text-center text-sm font-bold text-white transition-colors duration-200 hover:border-kunyit-300 hover:text-kunyit-300"
            >
              Lihat syarat pendaftaran
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-hijau-700">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-hijau-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {site.namaLengkap} - {site.institusi}
          </p>
          <p>
            <a
              href={linkPeta}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 hover:text-kunyit-300 hover:underline"
            >
              Lihat di peta
            </a>
            {" - "}
            {tahun} {site.institusi}
          </p>
        </div>
      </div>
    </footer>
  );
}
