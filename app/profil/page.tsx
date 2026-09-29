import type { Metadata } from "next";
import { BingkaiBalok } from "@/components/bingkai-balok";
import { KepalaHalaman } from "@/components/kepala-halaman";
import { KontenSementara } from "@/components/konten-sementara";
import { PlaceholderFoto } from "@/components/placeholder-foto";
import { SubNav } from "@/components/sub-nav";
import {
  prestasi,
  sambutan,
  sejarah,
  sarana,
  struktur,
  visiMisi,
} from "@/data/profil";
import { nav, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Profil Sekolah",
  description: `Profil ${site.nama}: sambutan kepala TK, visi dan misi, sejarah, sarana prasarana, struktur organisasi, dan prestasi.`,
  alternates: { canonical: `${site.url}/profil` },
};

const SUB = nav.find((n) => n.href === "/profil")?.children ?? [];

export default function HalamanProfil() {
  return (
    <>
      <KepalaHalaman
        label="Profil sekolah"
        judul="Sekolah yang mendidik tanpa memaksa"
        deskripsi="Taman Indria mengajar anak dengan cara yang menempatkan anak sebagai subjek utama, bukan penerima pelajaran pasif."
      />
      <SubNav items={SUB} />
      <BagianSambutan />
      <BagianVisiMisi />
      <BagianSejarah />
      <KontenSementara>
        <BagianSarana />
        <BagianStruktur />
        <BagianPrestasi />
      </KontenSementara>
    </>
  );
}

/* ------------------------------------------------------------------ */

function BagianSambutan() {
  return (
    <section id="sambutan" className="mx-auto max-w-6xl px-4 py-20">
      <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <BingkaiBalok warna="hijau" miring={4} className="mx-auto w-full max-w-sm">
          <PlaceholderFoto
            label={sambutan.nama.split(",")[0]}
            warna="hijau"
            aspect="aspect-3/4"
            className="border-0"
          />
        </BingkaiBalok>
        <div>
          <p className="text-sm font-bold tracking-wide text-hijau-700 uppercase">
            {sambutan.jabatan}
          </p>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-hijau-900">
            {sambutan.nama}
          </h2>
          <div className="prose-tk mt-6 border-t-4 border-kunyit-400 pt-6">
            {sambutan.isi.map((paragraf, i) => (
              <p key={i} className={i === 0 ? "font-semibold text-hijau-800" : ""}>
                {paragraf}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function BagianVisiMisi() {
  return (
    <section
      id="visimisi"
      className="border-y-4 border-hijau-900 bg-hijau-900 py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="inline-block rounded-full bg-kunyit-400 px-4 py-1 text-xs font-bold tracking-wider text-hijau-900 uppercase">
              Visi
            </p>
            <p className="mt-5 font-display text-2xl leading-snug font-extrabold text-balance text-white sm:text-3xl">
              {visiMisi.visi}
            </p>
          </div>
          <div>
            <p className="inline-block rounded-full bg-kunyit-400 px-4 py-1 text-xs font-bold tracking-wider text-hijau-900 uppercase">
              Misi
            </p>
            <ul className="mt-5 space-y-3">
              {visiMisi.misi.map((m, i) => (
                <li key={m} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-kunyit-400 font-display text-xs font-extrabold text-hijau-900"
                  >
                    {i + 1}
                  </span>
                  <span className="text-base leading-relaxed text-hijau-100">
                    {m}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function BagianSejarah() {
  return (
    <section id="sejarah" className="mx-auto max-w-6xl px-4 py-20">
      <h2 className="font-display text-3xl font-bold text-hijau-900">
        Sejarah singkat
      </h2>
      <p className="mt-3 max-w-2xl text-ink-soft">
        Taman Indria adalah jenjang paling awal dalam sistem Taman Siswa,
        dirintis Ki Hadjar Dewantara pada 1922.
      </p>
      <ol className="mt-10 space-y-0">
        {sejarah.map((b, i) => (
          <li key={b.tahun} className="flex gap-6">
            <div className="flex flex-col items-center">
              <span className="grid h-20 w-20 shrink-0 place-items-center rounded-3xl border-4 border-hijau-900 bg-kunyit-400 font-display text-sm font-extrabold text-hijau-900">
                {b.tahun}
              </span>
              {i < sejarah.length - 1 ? (
                <span aria-hidden="true" className="w-1 flex-1 bg-hijau-200" />
              ) : null}
            </div>
            <div className="pt-3">
              <h3 className="font-display text-xl font-bold text-hijau-900">
                {b.judul}
              </h3>
              <p className="mt-2 max-w-2xl leading-relaxed text-ink-soft">
                {b.isi}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function BagianSarana() {
  return (
    <section id="sarana" className="border-y-4 border-hijau-900 bg-kertas-100 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="font-display text-3xl font-bold text-hijau-900">
          Sarana dan prasarana
        </h2>
        <p className="mt-3 max-w-2xl text-ink-soft">
          Sarana disiapkan agar anak merasa aman, bebas bergerak, dan
          mudah menjangkau alat main.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sarana.map((s) => (
            <li
              key={s.nama}
              className="rounded-3xl border-4 border-hijau-900 bg-white p-5"
            >
              <h3 className="font-display text-lg font-bold text-hijau-900">
                {s.nama}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {s.keterangan}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function BagianStruktur() {
  return (
    <section id="struktur" className="mx-auto max-w-6xl px-4 py-20">
      <h2 className="font-display text-3xl font-bold text-hijau-900">
        Struktur organisasi
      </h2>
      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {struktur.map((s) => (
          <li
            key={s.jabatan}
            className="rounded-3xl border-4 border-hijau-900 bg-white p-6"
          >
            <p className="inline-block rounded-full bg-hijau-100 px-3 py-1 text-xs font-bold tracking-wide text-hijau-900 uppercase">
              {s.jabatan}
            </p>
            <h3 className="mt-3 font-display text-xl font-bold text-hijau-900">
              {s.nama}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              {s.tugas}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function BagianPrestasi() {
  return (
    <section id="prestasi" className="border-t-4 border-hijau-900 bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="font-display text-3xl font-bold text-hijau-900">
          Prestasi
        </h2>
        {prestasi.length === 0 ? (
          <p className="mt-4 text-ink-soft">Belum ada data prestasi.</p>
        ) : (
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[32rem] border-collapse text-left">
              <caption className="sr-only">Daftar prestasi sekolah</caption>
              <thead>
                <tr className="border-b-4 border-hijau-900">
                  <th scope="col" className="py-3 pr-4 font-display font-bold text-hijau-900">
                    Tahun
                  </th>
                  <th scope="col" className="py-3 pr-4 font-display font-bold text-hijau-900">
                    Nama prestasi
                  </th>
                  <th scope="col" className="py-3 pr-4 font-display font-bold text-hijau-900">
                    Tingkat
                  </th>
                  <th scope="col" className="py-3 font-display font-bold text-hijau-900">
                    Bidang
                  </th>
                </tr>
              </thead>
              <tbody>
                {prestasi.map((p) => (
                  <tr key={p.nama} className="border-b-2 border-kertas-200">
                    <td className="py-3 pr-4 font-semibold text-ink-soft">{p.tahun}</td>
                    <td className="py-3 pr-4 font-semibold text-ink">{p.nama}</td>
                    <td className="py-3 pr-4">
                      <span className="rounded-full bg-kunyit-200 px-3 py-1 text-xs font-bold text-hijau-900">
                        {p.tingkat}
                      </span>
                    </td>
                    <td className="py-3 text-sm text-ink-soft">{p.bidang}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
