import type { MetadataRoute } from "next";

const baseUrl = "https://triage-seo-site.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: [
      `${baseUrl}/sitemap/0.xml`,
      `${baseUrl}/sitemap/1.xml`,
      `${baseUrl}/sitemap/2.xml`,
      `${baseUrl}/sitemap/3.xml`,
    ],
  };
}
