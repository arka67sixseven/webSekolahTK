import type { MetadataRoute } from "next";
import { site } from "@/data/site";

/**
 * Robots
 * ======
 *
 * Situs ini boleh diindeks penuh karena seluruh isinya adalah
 * informasi publik sekolah. Tidak ada halaman yang perlu
 * dikecualikan.
 *
 * CATATAN: `site.url` masih placeholder.
 */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
