import type { MetadataRoute } from "next";
import { symptoms } from "../data/symptoms";
import { departments } from "../data/departments";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/triage`, lastModified: new Date() },
    { url: `${base}/symptoms`, lastModified: new Date() },
    { url: `${base}/departments`, lastModified: new Date() },
    ...departments.map((d) => ({
      url: `${base}/department/${d.slug}`,
      lastModified: new Date(),
    })),
    ...symptoms.map((s) => ({
      url: `${base}/symptom/${s.slug}`,
      lastModified: new Date(),
    })),
  ];
}