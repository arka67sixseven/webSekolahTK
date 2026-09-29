import type { Metadata, Viewport } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import { DataTerstrukturSekolah } from "@/components/data-terstruktur-sekolah";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PeringatanKonten } from "@/components/konten-sementara";
import { alamatPendek, site } from "@/data/site";
import "./globals.css";

const baloo = Baloo_2({
  subsets: ["latin"],
  variable: "--font-baloo",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.nama} - ${site.tagline}`,
    template: `%s | ${site.nama}`,
  },
  description: `${site.nama} adalah taman kanak-kanak di ${site.institusi}, ${alamatPendek}. Belajar sambil bermain dengan metode Among, Dolanan Anak, Panca Indra, dan Wira-wiri.`,
  keywords: [
    "TK Taman Indria Jetis",
    "TK Yogyakarta",
    "Tamansiswa Jetis",
    "taman kanak-kanak",
    "PAUD",
    "Penerimaan Peserta Didik Baru",
  ],
  authors: [{ name: site.institusi }],
  creator: site.institusi,
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: site.url,
    siteName: site.nama,
    title: `${site.nama} - ${site.tagline}`,
    description: "Sekolah taman kanak-kanak di Tamansiswa Jetis, Yogyakarta.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.nama} - ${site.tagline}`,
    description: "Sekolah taman kanak-kanak di Tamansiswa Jetis, Yogyakarta.",
  },
  alternates: { canonical: site.url },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#17803f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${baloo.variable} ${nunito.variable}`}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <a
          href="#konten"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:rounded-2xl focus:bg-hijau-900 focus:px-5 focus:py-3 focus:font-bold focus:text-white"
        >
          Lewati ke konten utama
        </a>
        <PeringatanKonten />
        <DataTerstrukturSekolah />
        <Header />
        {/* overflow-x-clip menahan blok dekoratif BingkaiBalok yang
            sengaja menimbul keluar kotak. Berbeda dengan `hidden`,
            `clip` tidak menjadikan elemen ini scroll container, sehingga
            `sticky` pada sub-navigasi tetap berfungsi. */}
        <main id="konten" className="flex-1 overflow-x-clip">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
