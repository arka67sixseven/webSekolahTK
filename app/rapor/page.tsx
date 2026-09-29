import type { Metadata } from "next";
import { KepalaHalaman } from "@/components/kepala-halaman";
import { JudulSeksi } from "@/components/judul-seksi";
import { KontenSementara } from "@/components/konten-sementara";
import { contohKalimat } from "@/data/contoh-rapor";
import { elemenCapaian } from "@/data/metode";
import { aspekRapor } from "@/data/rapor";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Rapor Deskriptif",
  description: `Rapor ${site.nama} tidak berisi angka. Yang ditulis adalah perkembangan anak dalam kalimat, plus catatan yang perlu dilatih di rumah.`,
  alternates: { canonical: `${site.url}/rapor` },
};

export default function HalamanRapor() {
  return (
    <>
      <KepalaHalaman
        label="Rapor"
        judul="Tidak ada angka di rapor anak"
        deskripsi="Rapor di taman kanak-kanak bukan daftar nilai. Yang ditulis adalah perkembangan anak dalam bentuk kalimat yang bisa dibaca orang tua."
      />
      <BagianPrinsip />
      <KontenSementara>
        <BagianAspek />
        <BagianCapaian />
        <BagianContoh />
      </KontenSementara>
    </>
  );
}

/* ------------------------------------------------------------------ */

function BagianPrinsip() {
  return (
    <section className="border-b-4 border-hijau-900 bg-hijau-900 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="inline-block rounded-full bg-kunyit-400 px-4 py-1 text-xs font-bold tracking-wider text-hijau-900 uppercase">
              Yang ditulis
            </p>
            <ul className="mt-5 space-y-3">
              {[
                "Perilaku yang sudah bisa dilakukan anak",
                "Hal yang sedang diupayakan anak",
                "Kegiatan yang perlu dilanjutkan di rumah",
                "Hal yang perlu ditanyakan langsung ke pamong",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-hijau-100">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-kunyit-400 font-display text-xs font-extrabold text-hijau-900"
                  >
                    &#10003;
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="inline-block rounded-full bg-terong-400 px-4 py-1 text-xs font-bold tracking-wider text-white uppercase">
              Yang tidak ditulis
            </p>
            <ul className="mt-5 space-y-3">
              {[
                "Nilai angka atau peringkat kelas",
                "Bandingkan anak dengan anak lain",
                "Label anak nakal, malas, atau tidak pintar",
                "Prediksi kesiapan anak saat masuk SD",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-hijau-100">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-terong-500 font-display text-xs font-extrabold text-white"
                  >
                    &#215;
                  </span>
                  {t}
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

const WARNA = {
  hijau: "bg-hijau-100 text-hijau-800",
  kunyit: "bg-kunyit-100 text-kunyit-800",
  daun: "bg-hijau-200 text-hijau-900",
} as const;

function BagianAspek() {
  return (
    <section id="aspek" className="mx-auto max-w-6xl scroll-mt-32 px-4 py-20">
      <JudulSeksi
        label="Aspek perkembangan"
        judul="Lima hal yang diamati setiap hari"
        deskripsi="Aspek ini sama untuk semua kelompok, hanya target dan contoh perilakunya yang menyesuaikan usia."
      />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {aspekRapor.map((a) => (
          <article
            key={a.id}
            className="rounded-[1.75rem] border-4 border-hijau-900 bg-white p-6"
          >
            <h3 className="font-display text-xl font-bold text-hijau-900">
              {a.nama}
            </h3>
            <p className="mt-2 leading-relaxed text-ink-soft">{a.deskripsi}</p>
            <ul className="mt-4 space-y-1.5 border-t-2 border-kertas-200 pt-4">
              {a.contohPerilaku.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-ink-soft">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-2 w-2 shrink-0 rounded-sm bg-hijau-400"
                  />
                  {c}
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

function BagianCapaian() {
  return (
    <section
      id="capaian"
      className="scroll-mt-32 border-y-4 border-hijau-900 bg-kertas-100 py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <JudulSeksi
          label="Capaian pembelajaran"
          judul="Tiga elemen capaian untuk usia taman kanak-kanak"
          deskripsi="Mengikuti tiga elemen capaian pembelajaran PAUD dalam Permendikbudristek Nomor 13 Tahun 2022."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {elemenCapaian.map((e) => (
            <div
              key={e.nama}
              className={`rounded-[1.75rem] border-4 border-hijau-900 p-6 ${WARNA[e.warna]}`}
            >
              <h3 className="font-display text-xl font-extrabold text-hijau-900">
                {e.nama}
              </h3>
              <p className="mt-2 text-ink-soft">{e.ringkas}</p>
              <ul className="mt-4 space-y-1.5 border-t-2 border-hijau-900/15 pt-4">
                {e.contoh.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-ink-soft">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-2 w-2 shrink-0 rounded-sm bg-hijau-900/40"
                    />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function BagianContoh() {
  return (
    <section id="contoh" className="mx-auto max-w-6xl scroll-mt-32 px-4 py-20">
      <JudulSeksi
        label="Contoh penulisan"
        judul="Kalimat yang baik dan yang sebaiknya dihindari"
        deskripsi="Tujuannya agar guru menulis tentang perkembangan anak, bukan tentang rasa guru terhadap anak."
      />
      <div className="mt-10 space-y-5">
        {contohKalimat.map((c) => (
          <div
            key={c.situasi}
            className="overflow-hidden rounded-[1.75rem] border-4 border-hijau-900 bg-white"
          >
            <p className="border-b-4 border-hijau-900 bg-kertas-200 px-5 py-3 text-sm font-bold tracking-wide text-hijau-900 uppercase">
              {c.situasi}
            </p>
            <div className="grid gap-0 sm:grid-cols-2">
              <div className="border-b-4 border-hijau-900 p-5 sm:border-r-4 sm:border-b-0">
                <p className="text-xs font-bold tracking-wider text-hijau-700 uppercase">
                  Tulis begini
                </p>
                <p className="mt-2 leading-relaxed text-ink">{c.kalimatBaik}</p>
              </div>
              {/* Hijau terong/merah muda sengaja dipakai di sini: satu-satunya
                  aksen peringatan "jangan/tidak" yang tersisa di situs. */}
              <div className="bg-terong-50 p-5">
                <p className="text-xs font-bold tracking-wider text-terong-700 uppercase">
                  Jangan begini
                </p>
                <p className="mt-2 leading-relaxed text-ink-soft line-through decoration-terong-400 decoration-2">
                  {c.kalimatKurangBaik}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
