import type { Metadata } from "next";
import { BingkaiBalok } from "@/components/bingkai-balok";
import { KepalaHalaman } from "@/components/kepala-halaman";
import { JudulSeksi } from "@/components/judul-seksi";
import { KontenSementara } from "@/components/konten-sementara";
import { PlaceholderFoto } from "@/components/placeholder-foto";
import { alamatSatuBaris, alamatPendek, linkPeta, linkWa, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Kontak",
  description: `Alamat, telepon, WhatsApp, jam buka, dan lokasi ${site.nama} di Jetis, Yogyakarta.`,
  alternates: { canonical: `${site.url}/kontak` },
};

export default function HalamanKontak() {
  return (
    <>
      <KepalaHalaman
        label="Kontak"
        judul="Datang, lihat sendiri kelasnya"
        deskripsi="Orang tua bisa datang kapan saja pada jam kerja untuk melihat kelas dan bicara dengan pamong."
      />
      <KontenSementara>
        <BagianKontak />
        <BagianLokasi />
        <BagianJamBuka />
      </KontenSementara>
    </>
  );
}

/* ------------------------------------------------------------------ */

function BarisKontak({
  label,
  nilai,
  href,
  eksternal = false,
}: {
  label: string;
  nilai: string;
  href?: string;
  eksternal?: boolean;
}) {
  return (
    <div className="border-t-2 border-kertas-200 py-4 first:border-t-0 first:pt-0">
      <dt className="text-xs font-bold tracking-wider text-ink-soft uppercase">
        {label}
      </dt>
      <dd className="mt-1 text-lg font-semibold text-hijau-900">
        {href ? (
          <a
            href={href}
            className="hover:underline"
            {...(eksternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {nilai}
          </a>
        ) : (
          nilai
        )}
      </dd>
    </div>
  );
}

function BagianKontak() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <JudulSeksi
            label="Cara menghubungi"
            judul="Paling cepat lewat WhatsApp"
            deskripsi="Nomor Whatsapp dipakai untuk pendaftaran, tanya kegiatan, dan menghubungi pamong kelas."
          />
          <dl className="mt-8 rounded-[1.75rem] border-4 border-hijau-900 bg-white p-6">
            <BarisKontak
              label="Alamat"
              nilai={`${alamatSatuBaris}, ${site.alamat.kodePos}`}
            />
            <BarisKontak
              label="Telepon"
              nilai={site.telepon}
              href={`tel:${site.teleponTel}`}
            />
            <BarisKontak
              label="WhatsApp"
              nilai={site.whatsapp}
              href={linkWa}
              eksternal
            />
            <BarisKontak label="Email" nilai={site.email} href={`mailto:${site.email}`} />
          </dl>
        </div>

        <div>
          <BingkaiBalok warna="hijau" miring={4} className="mx-auto w-full max-w-sm">
            <PlaceholderFoto
              label="Pintu masuk sekolah"
              warna="hijau"
              aspect="aspect-4/3"
              className="border-0"
            />
          </BingkaiBalok>
          <div className="mt-8 rounded-3xl border-4 border-kunyit-400 bg-kunyit-100 p-6">
            <h2 className="font-display text-lg font-bold text-hijau-900">
              Datang tanpa harus mendaftar
            </h2>
            <p className="mt-2 leading-relaxed text-ink-soft">
              Kunjungan untuk melihat kelas tidak perlu janji. Datang pada
              jam kerja, pamong akan menyediakan waktu khusus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function BagianLokasi() {
  return (
    <section className="border-y-4 border-hijau-900 bg-hijau-900 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <JudulSeksi
          label="Lokasi"
          judul={alamatPendek}
          deskripsi="Sekolah berada di kompleks Tamansiswa Jetis, satu kompleks dengan SMP dan SD Tamansiswa Jetis."
        />
        <div className="mt-8 overflow-hidden rounded-[1.75rem] border-4 border-kunyit-400 bg-kertas-100">
          <div className="p-6">
            <p className="font-display text-lg font-bold text-hijau-900">
              Buka di Google Maps
            </p>
            <p className="mt-2 text-ink-soft">
              {alamatSatuBaris}, {site.alamat.kodePos}
            </p>
            <a
              href={linkPeta}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block rounded-2xl bg-kunyit-500 px-5 py-3 font-display font-bold text-hijau-900 transition-colors duration-200 hover:bg-kunyit-400"
            >
              Lihat peta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function BagianJamBuka() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20">
      <JudulSeksi
        label="Jam buka"
        judul="Kapan sekolah bisa dihubungi"
        align="center"
      />
      <ul className="mt-10 space-y-3">
        {site.jamBuka.map((j) => (
          <li
            key={j.hari}
            className="flex flex-col gap-1 rounded-2xl border-4 border-hijau-900 bg-white p-5 sm:flex-row sm:items-center sm:justify-between"
          >
            <span className="font-display text-lg font-bold text-hijau-900">
              {j.hari}
            </span>
            <span className="text-ink-soft">{j.jam}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
