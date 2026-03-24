import type { MetadataRoute } from "next";
import { symptoms } from "@/data/symptoms";
import { departments } from "@/data/departments";
import { faqs } from "@/data/faqs";

const baseUrl = "https://triage-seo-site.vercel.app";

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
  "shengyin-siya-gua-shenme-ke",
  "bizi-yang-gua-shenme-ke",
  "weizhang-gua-shenme-ke",
  "shouma-gua-shenme-ke",
  "xintiao-kuai-gua-shenme-ke",
  "xintiao-man-gua-shenme-ke",
  "toupifama-gua-shenme-ke",
  "jiyili-xiajiang-gua-shenme-ke",
  "weisuan-gua-shenme-ke",
  "heibian-gua-shenme-ke",
  "bianmi-gua-shenme-ke",
  "exin-gua-shenme-ke",
  "dapenqi-gua-shenme-ke",
  "houlong-yiwugan-gua-shenme-ke",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: baseUrl, lastModified: now },
    { url: `${baseUrl}/guides`, lastModified: now },
    { url: `${baseUrl}/topics`, lastModified: now },
    { url: `${baseUrl}/symptoms`, lastModified: now },
    { url: `${baseUrl}/departments`, lastModified: now },
    { url: `${baseUrl}/triage`, lastModified: now },
    { url: `${baseUrl}/faq`, lastModified: now },
    ...guideSlugs.map((slug) => ({
      url: `${baseUrl}/guides/${slug}`,
      lastModified: now,
    })),
    ...symptoms.map((s) => ({
      url: `${baseUrl}/symptom/${s.slug}`,
      lastModified: now,
    })),
    ...departments.map((d) => ({
      url: `${baseUrl}/department/${d.slug}`,
      lastModified: now,
    })),
    ...faqs.map((item) => ({
      url: `${baseUrl}/faq/${item.slug}`,
      lastModified: now,
    })),
  ];
}
