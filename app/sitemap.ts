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

const guideSlugs = [
  "ganmao-gua-shenme-ke",
  "fashao-gua-shenme-ke",
  "kesou-gua-shenme-ke",
  "toutong-gua-shenme-ke",
  "weitong-gua-shenme-ke",
  "xiongmen-gua-shenme-ke",
  "touyun-gua-shenme-ke",
  "shimian-gua-shenme-ke",
  "bisai-gua-shenme-ke",
  "houlongtong-gua-shenme-ke",
  "futong-gua-shenme-ke",
  "xinhuang-gua-shenme-ke",
  "liubiti-gua-shenme-ke",
  "huxikunnan-gua-shenme-ke",
  "fansuan-gua-shenme-ke",
  "fuxie-gua-shenme-ke",
  "piantoutong-gua-shenme-ke",
  "jiaolv-gua-shenme-ke",
  "yiyu-gua-shenme-ke",
  "xiongtong-gua-shenme-ke",
];

  const guidePages = guideSlugs.map((slug) => ({
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