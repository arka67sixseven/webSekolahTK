import Script from "next/script";
import { linkWa, site } from "@/data/site";

/**
 * JSON-LD untuk data sekolah.
 *
 * Dipakai di root layout, jadi tersedia di semua halaman. Google memakai
 * data ini untuk panel pengetahuan di hasil pencarian dan untuk peta lokal.
 *
 * Semua nilai diambil dari `data/site.ts`. Tidak ada alamat atau nomor
 * yang ditulis ulang di sini.
 */
export function DataTerstrukturSekolah() {
  const a = site.alamat;

  const data = {
    "@context": "https://schema.org",
    "@type": "School",
    "@id": `${site.url}/#sekolah`,
    name: site.namaLengkap,
    alternateName: site.nama,
    description: `${site.tagline}. ${site.kutipanIndria}`,
    url: site.url,
    telephone: site.telepon,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: a.jalan,
      addressLocality: `${a.kelurahan}, ${a.kecamatan}, ${a.kota}`,
      addressRegion: a.provinsi,
      postalCode: a.kodePos,
      addressCountry: a.negara,
    },
    sameAs: [linkWa],
    potentialAction: {
      "@type": "ContactAction",
      target: `${site.url}/kontak`,
      contactType: "admissions",
    },
  };

  return (
    <Script
      id="json-ld-sekolah"
      type="application/ld+json"
      // Isi berasal dari data aplikasi sendiri, bukan dari input pengguna.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
