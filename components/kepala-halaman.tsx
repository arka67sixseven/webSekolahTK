import type { ReactNode } from "react";
import { JudulSeksi } from "@/components/judul-seksi";

/**
 * Kepala halaman dalam (bukan hero).
 * Dipakai semua halaman selain beranda agar hierarkinya konsisten.
 *
 * `judul` dirender sebagai `h1` supaya setiap halaman punya tepat satu
 * heading tingkat tertinggi, lalu seksi di bawahnya turun ke `h2`.
 */
export function KepalaHalaman({
  label,
  judul,
  deskripsi,
  children,
}: {
  label: string;
  judul: string;
  deskripsi?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b-4 border-hijau-900 bg-kertas-50">
      <div
        aria-hidden="true"
        className="pola-titik absolute inset-0 text-hijau-200 opacity-40"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-14">
        <JudulSeksi as="h1" label={label} judul={judul} deskripsi={deskripsi} />
        {children}
      </div>
    </section>
  );
}
