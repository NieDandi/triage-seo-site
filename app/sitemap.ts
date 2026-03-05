import { MetadataRoute } from "next";
import { symptoms } from "@/data/symptoms";
import { departments } from "@/data/departments";

export default function sitemap(): MetadataRoute.Sitemap {

  const baseUrl = "https://triage-seo-site.vercel.app";

  const symptomPages = symptoms.map((s) => ({
    url: `${baseUrl}/symptom/${s.slug}`,
    lastModified: new Date(),
  }));

  const departmentPages = departments.map((d) => ({
    url: `${baseUrl}/department/${d.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/symptoms`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/departments`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/triage`,
      lastModified: new Date(),
    },
    ...symptomPages,
    ...departmentPages,
  ];
}