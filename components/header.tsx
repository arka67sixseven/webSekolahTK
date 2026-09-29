"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { nav, site, tahunSekarang } from "@/data/site";

/**
 * Header navigasi.
 *
 * Mobile memakai <details> supaya menu bisa dibuka tanpa JavaScript
 * tambahan dan tetap bisa ditutup dengan Escape.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-4 border-hijau-900 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        <Logo />
        <NavigasiDesktop />
        <TombolPanalytics />
        <NavigasiMobile />
      </div>
    </header>
  );
}

function Logo() {
  return (
    <Link href="/" className="group flex shrink-0 items-center gap-2.5">
      <span className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-2xl border-2 border-hijau-900 bg-white transition-transform duration-200 group-hover:-rotate-3">
        <Image
          src={site.logoRingkas}
          alt={`Logo ${site.nama}`}
          width={44}
          height={44}
          priority
          className="h-full w-full object-contain"
        />
      </span>
      <span className="leading-tight">
        <span className="block font-display text-base font-extrabold text-hijau-900">
          {site.namaPendek}
        </span>
        <span className="block text-[0.7rem] font-semibold tracking-wide text-ink-soft uppercase">
          {site.institusi}
        </span>
      </span>
    </Link>
  );
}

function TombolPanalytics() {
  return (
    <Link
      href="/ppdb"
      className="ml-auto hidden shrink-0 rounded-2xl bg-hijau-600 px-4 py-2.5 font-display text-sm font-bold whitespace-nowrap text-white transition-colors duration-200 hover:bg-hijau-700 sm:ml-0 sm:block"
    >
      Daftar PPDB
    </Link>
  );
}

function aktif(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavigasiDesktop() {
  const pathname = usePathname();
  return (
    <nav aria-label="Navigasi utama" className="ml-auto hidden min-w-0 lg:block">
      <ul className="flex items-center">
        {nav.map((item) => {
          const on = aktif(pathname, item.href);
          return (
            <li key={item.href} className="group relative">
              <Link
                href={item.href}
                aria-current={on ? "page" : undefined}
                className={`inline-block rounded-xl px-2 py-2 text-sm font-bold whitespace-nowrap transition-colors duration-200 ${
                  on
                    ? "bg-hijau-100 text-hijau-900"
                    : "text-ink hover:bg-kertas-100 hover:text-hijau-800"
                }`}
              >
                {item.label}
              </Link>
              {item.children ? (
                <ul className="invisible absolute top-full left-0 w-56 rounded-2xl border-2 border-hijau-900 bg-white p-1.5 opacity-0 shadow-lg transition-[opacity,visibility] duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  {item.children.map((sub) => (
                    <li key={sub.href}>
                      <Link
                        href={sub.href}
                        className="block rounded-xl px-3 py-2 text-sm font-semibold text-ink hover:bg-kunyit-100 hover:text-hijau-900"
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function NavigasiMobile() {
  const [terbuka, setTerbuka] = useState(false);
  const pathname = usePathname();
  const idMenu = useId();
  const refTombol = useRef<HTMLButtonElement>(null);

  const tutup = () => setTerbuka(false);

  useEffect(() => {
    if (!terbuka) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        tutup();
        refTombol.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [terbuka]);

  return (
    <div className="lg:hidden">
      <button
        ref={refTombol}
        type="button"
        onClick={() => setTerbuka((v) => !v)}
        aria-expanded={terbuka}
        aria-controls={idMenu}
        className="grid h-11 w-11 place-items-center rounded-2xl border-[3px] border-hijau-900 bg-kertas-100"
      >
        <span className="sr-only">
          {terbuka ? "Tutup menu navigasi" : "Buka menu navigasi"}
        </span>
        <span aria-hidden="true" className="flex flex-col gap-1">
          <span
            className={`block h-1 w-5 rounded-full bg-hijau-900 transition-transform duration-200 ${terbuka ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-1 w-5 rounded-full bg-hijau-900 transition-opacity duration-200 ${terbuka ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-1 w-5 rounded-full bg-hijau-900 transition-transform duration-200 ${terbuka ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </span>
      </button>

      {terbuka ? (
        <>
          <div
            className="fixed inset-0 z-40 bg-hijau-900/40"
            onClick={tutup}
            aria-hidden="true"
          />
          <nav
            id={idMenu}
            aria-label="Navigasi mobile"
            className="fixed inset-y-0 right-0 z-50 w-[min(22rem,88vw)] overflow-y-auto border-l-4 border-hijau-900 bg-kertas-50 px-5 py-6"
          >
            <p className="font-display text-lg font-extrabold text-hijau-900">
              {site.nama}
            </p>
            <p className="mt-1 text-xs text-ink-soft">
              Tahun ajaran {tahunSekarang}
            </p>
            <ul className="mt-6 space-y-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={tutup}
                    className={`block rounded-2xl px-4 py-3 font-display text-base font-bold ${
                      aktif(pathname, item.href)
                        ? "bg-hijau-600 text-white"
                        : "text-hijau-900 hover:bg-kunyit-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.children ? (
                    <ul className="mt-1 space-y-0.5 border-l-2 border-kertas-300 pl-3">
                      {item.children.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            onClick={tutup}
                            className="block rounded-xl px-3 py-2 text-sm font-semibold text-ink-soft hover:bg-kertas-100 hover:text-hijau-800"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
            <Link
              href="/ppdb"
              onClick={tutup}
              className="mt-6 block rounded-2xl bg-kunyit-500 px-5 py-3 text-center font-display font-bold text-hijau-900"
            >
              Daftar PPDB
            </Link>
          </nav>
        </>
      ) : null}
    </div>
  );
}
