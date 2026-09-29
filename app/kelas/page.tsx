import type { Metadata } from "next";
import { BingkaiBalok } from "@/components/bingkai-balok";
import { KepalaHalaman } from "@/components/kepala-halaman";
import { JudulSeksi } from "@/components/judul-seksi";
import { KontenSementara } from "@/components/konten-sementara";
import { PlaceholderFoto } from "@/components/placeholder-foto";
import { SubNav } from "@/components/sub-nav";
import { guru, kelompok, suasana } from "@/data/kelas";
import { nav, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Kelas dan Kelompok Belajar",
  description: `Kelompok usia, rombongan belajar, dan suasana kelas ${site.nama}. Anak usia 3 sampai 5 tahun belajar dengan bermain bersama pamong.`,
  alternates: { canonical: `${site.url}/kelas` },
};

const SUB = nav.find((n) => n.href === "/kelas")?.children ?? [];

export default function HalamanKelas() {
  return (
    <>
      <KepalaHalaman
        label="Kelas"
        judul="Tiga kelompok, satu cara bermain"
        deskripsi="Setiap kelompok punya fokus yang berbeda, tetapi semuanya belajar dengan bermain."
      />
      <SubNav items={SUB} />
      <KontenSementara>
        <BagianKelompok />
        <BagianRombel />
        <BagianSuasana />
      </KontenSementara>
    </>
  );
}

/* ------------------------------------------------------------------ */

function BagianKelompok() {
  return (
    <section id="kelompok" className="mx-auto max-w-6xl scroll-mt-32 px-4 py-20">
      <JudulSeksi
        label="Kelompok usia"
        judul="Anak dikelompokkan berdasarkan usia, bukan tingkatan"
        deskripsi="Kelompok membantu pamong memberi kegiatan yang tepat untuk tahap perkembangan anak."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {kelompok.map((k) => (
          <article
            key={k.id}
            className="flex flex-col rounded-[1.75rem] border-4 border-hijau-900 bg-white p-6"
          >
            <p className="text-sm font-bold tracking-wide text-hijau-700 uppercase">
              {k.usia}
            </p>
            <h3 className="mt-2 font-display text-3xl font-extrabold text-hijau-900">
              {k.nama}
            </h3>
            <p className="mt-3 leading-relaxed text-ink-soft">{k.fokus}</p>

            <dl className="mt-5 flex gap-6 border-t-2 border-kertas-200 pt-4">
              <div>
                <dt className="text-xs font-bold tracking-wide text-ink-soft uppercase">
                  Anak
                </dt>
                <dd className="font-display text-2xl font-extrabold text-hijau-800">
                  {k.jumlahAnak}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold tracking-wide text-ink-soft uppercase">
                  Pamong
                </dt>
                <dd className="font-display text-2xl font-extrabold text-hijau-800">
                  {k.jumlahGuru}
                </dd>
              </div>
            </dl>

            <h4 className="mt-6 text-xs font-bold tracking-wide text-ink-soft uppercase">
              Kegiatan utama
            </h4>
            <ul className="mt-2 space-y-1.5">
              {k.kegiatanUtama.map((g) => (
                <li key={g} className="flex items-start gap-2 text-sm text-ink-soft">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-2 w-2 shrink-0 rounded-sm bg-kunyit-400"
                  />
                  {g}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function BagianRombel() {
  return (
    <section
      id="rombel"
      className="scroll-mt-32 border-y-4 border-hijau-900 bg-hijau-900 py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <JudulSeksi
          label="Rombongan belajar"
          judul="Setiap anak punya pamong yang tahu kebiasaannya"
          deskripsi="Pamong mencatat perkembangan anak setiap hari sehingga laporan semester tidak ditulis dari ingatan."
        />
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[36rem] border-collapse text-left">
            <caption className="sr-only">
              Daftar pamong di tiap kelompok belajar
            </caption>
            <thead>
              <tr className="border-b-4 border-kunyit-400">
                <th scope="col" className="py-3 pr-4 font-display font-bold text-kunyit-300">
                  Kelompok
                </th>
                <th scope="col" className="py-3 pr-4 font-display font-bold text-kunyit-300">
                  Usia
                </th>
                <th scope="col" className="py-3 font-display font-bold text-kunyit-300">
                  Pamong
                </th>
              </tr>
            </thead>
            <tbody>
              {kelompok.map((k) => {
                const pamong = guru.filter((g) => g.kelompok === k.nama);
                return (
                  <tr key={k.id} className="border-b-2 border-hijau-800">
                    <th
                      scope="row"
                      className="py-4 pr-4 font-display text-lg font-extrabold text-white"
                    >
                      {k.nama}
                    </th>
                    <td className="py-4 pr-4 text-hijau-100">{k.usia}</td>
                    <td className="py-4 text-hijau-100">
                      {pamong.length > 0
                        ? pamong.map((p) => p.nama).join(", ")
                        : "Belum diisi"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function BagianSuasana() {
  return (
    <section id="suasana" className="mx-auto max-w-6xl scroll-mt-32 px-4 py-20">
      <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <BingkaiBalok warna="kunyit" miring={-4} className="mx-auto w-full max-w-sm">
          <PlaceholderFoto
            label="Ruang kelas"
            warna="kunyit"
            aspect="aspect-4/3"
            className="border-0"
          />
        </BingkaiBalok>
        <div>
          <JudulSeksi
            label="Suasana belajar"
            judul="Kelas yang terasa seperti rumah"
            deskripsi="Ruang kelas di tata agar anak merasa aman, bebas bergerak, dan tidak perlu izin untuk mencoba."
          />
          <ul className="mt-8 space-y-4">
            {suasana.map((s) => (
              <li
                key={s.id}
                className="border-l-4 border-kunyit-400 bg-kertas-100 p-5"
              >
                <h3 className="font-display text-lg font-bold text-hijau-900">
                  {s.nama}
                </h3>
                <p className="mt-1.5 leading-relaxed text-ink-soft">{s.isi}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
