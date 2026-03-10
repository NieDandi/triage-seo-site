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

  const guidePages = [
    "ganmao-gua-shenme-ke",
    "fashao-gua-shenme-ke",
    "kesou-gua-shenme-ke",
    "toutong-gua-shenme-ke",
    "weitong-gua-shenme-ke",
    "xiongmen-gua-shenme-ke",
    "touyun-gua-shenme-ke",
    "shimian-gua-shenme-ke",
  ].map((slug) => ({
    url: `${baseUrl}/guides/${slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/topics`,
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
    ...guidePages,
    ...symptomPages,
    ...departmentPages,
  ];
}
