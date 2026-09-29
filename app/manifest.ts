import type { MetadataRoute } from "next";
import { site } from "@/data/site";

/**
 * Manifest PWA
 * ============
 *
 * Membuat situs bisa dipasang di layar utama ponsel orang tua.
 * Ikon masih placeholder karena logo resmi TK belum tersedia.
 */
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.nama} - ${site.institusi}`,
    short_name: site.namaPendek,
    description: site.tagline,
    lang: "id",
    start_url: "/",
    display: "standalone",
    background_color: "#fefdfa",
    theme_color: "#0b3a20",
    icons: [
      {
        src: site.logoRingkas,
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
