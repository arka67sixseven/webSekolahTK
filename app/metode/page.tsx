import type { Metadata } from "next";
import Link from "next/link";
import { BingkaiBalok } from "@/components/bingkai-balok";
import { KepalaHalaman } from "@/components/kepala-halaman";
import { JudulSeksi } from "@/components/judul-seksi";
import { PlaceholderFoto } from "@/components/placeholder-foto";
import { SubNav } from "@/components/sub-nav";
import { metode, prinsipKelas, type WarnaTema } from "@/data/metode";
import { nav, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Metode Belajar",
  description: `Metode ${site.nama}: Among, Dolanan Anak, Panca Indra, Wira-wiri, dan kemitraan dengan orang tua. Cara belajar yang menempatkan anak sebagai subjek utama.`,
  alternates: { canonical: `${site.url}/metode` },
};

const SUB = nav.find((n) => n.href === "/metode")?.children ?? [];

export default function HalamanMetode() {
  return (
    <>
      <KepalaHalaman
        label="Metode belajar"
        judul="Anak belajar dengan bermain, bukan dengan diajar"
        deskripsi={site.kutipanIndria}
      />
      <SubNav items={SUB} />
      <BagianPrinsip />
      {metode.map((m) => (
        <BagianMetode key={m.id} item={m} />
      ))}
      <BagianPrinsipTidakBisaDitawar />
    </>
  );
}

/* ------------------------------------------------------------------ */

const WARNA_TEKS: Record<WarnaTema, string> = {
  hijau: "text-hijau-800",
  kunyit: "text-kunyit-700",
  terong: "text-terong-700",
};

const WARNA_LATAR: Record<WarnaTema, string> = {
  hijau: "bg-hijau-100",
  kunyit: "bg-kunyit-100",
  terong: "bg-terong-100",
};

function BagianPrinsip() {
  return (
    <section className="border-y-4 border-hijau-900 bg-hijau-900 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <p className="inline-block rounded-full bg-kunyit-400 px-4 py-1 text-xs font-bold tracking-wider text-hijau-900 uppercase">
          Prinsip dasar
        </p>
        <p className="mt-5 max-w-4xl font-display text-2xl leading-snug font-extrabold text-balance text-white sm:text-3xl">
          Pamong berdiri di samping anak, bukan di belakangnya. Anak yang
          sedang belajar tidak boleh merasa sedang diajar.
        </p>
      </div>
    </section>
  );
}

function BagianMetode({ item }: { item: (typeof metode)[number] }) {
  return (
    <section
      id={item.id}
      className="scroll-mt-32 border-b-4 border-kertas-200 bg-white py-20 even:bg-kertas-50"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p
              className={`inline-block rounded-full px-4 py-1 text-xs font-bold tracking-wide uppercase ${WARNA_LATAR[item.warna]} ${WARNA_TEKS[item.warna]}`}
            >
              {item.tagline}
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-balance text-hijau-900 sm:text-4xl">
              {item.nama}
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed font-semibold text-hijau-800">
              {item.ringkas}
            </p>
            <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">
              {item.penjelasan}
            </p>

            <h3 className="mt-8 font-display text-lg font-bold text-hijau-900">
              Contoh yang bisa dilihat orang tua
            </h3>
            <ul className="mt-4 space-y-3">
              {item.contoh.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className={`mt-1.5 h-3 w-3 shrink-0 rounded-sm ${WARNA_LATAR[item.warna]} ring-2 ${WARNA_TEKS[item.warna]}`}
                  />
                  <span className="leading-relaxed text-ink-soft">{c}</span>
                </li>
              ))}
            </ul>

            {item.id === "orang-tua" && (
              <Link
                href="/kemitraan"
                className="mt-8 inline-block rounded-2xl bg-hijau-600 px-6 py-3 font-display font-bold text-white transition-colors duration-200 hover:bg-hijau-700"
              >
                Lihat empat bentuk kemitraan
              </Link>
            )}
          </div>

          <BingkaiBalok
            warna={item.warna}
            miring={item.warna === "hijau" ? 4 : item.warna === "kunyit" ? -4 : 3}
            className="mx-auto w-full max-w-sm"
          >
            <PlaceholderFoto
              label={item.nama}
              warna={item.warna}
              aspect="aspect-4/3"
              className="border-0"
            />
          </BingkaiBalok>
        </div>
      </div>
    </section>
  );
}

function BagianPrinsipTidakBisaDitawar() {
  return (
    <section className="bg-kertas-100 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <JudulSeksi
          label="Tidak bisa ditawar"
          judul="Empat hal yang selalu dijaga di kelas"
          deskripsi="Hal-hal ini yang membuat anak merasa aman untuk mencoba dan salah."
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {prinsipKelas.map((p) => (
            <li
              key={p.judul}
              className="rounded-3xl border-4 border-hijau-900 bg-white p-6"
            >
              <h3 className="font-display text-lg font-bold text-hijau-900">
                {p.judul}
              </h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{p.isi}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
