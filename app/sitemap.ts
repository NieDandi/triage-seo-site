import { MetadataRoute } from "next";
import { symptoms } from "@/data/symptoms";
import { departments } from "@/data/departments";
import { faqs } from "@/data/faqs"; // ✅ 新增

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://triage-seo-site.vercel.app";

  const now = new Date();

  const symptomPages = symptoms.map((s) => ({
    url: `${baseUrl}/symptom/${s.slug}`,
    lastModified: now,
  }));

  const departmentPages = departments.map((d) => ({
    url: `${baseUrl}/department/${d.slug}`,
    lastModified: now,
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
    lastModified: now,
  }));

  // ✅ 新增 FAQ 页面
  const faqPages = faqs.map((item) => ({
    url: `${baseUrl}/faq/${item.slug}`,
    lastModified: now,
  }));

  return [
    // 首页
    {
      url: baseUrl,
      lastModified: now,
    },

    // 栏目页
    {
      url: `${baseUrl}/guides`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/topics`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/symptoms`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/departments`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/triage`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/faq`, // ✅ FAQ列表页
      lastModified: now,
    },

    // 详情页
    ...guidePages,
    ...symptomPages,
    ...departmentPages,
    ...faqPages, // ✅ FAQ详情页
  ];
}