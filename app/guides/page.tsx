import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "导诊指南｜高频问题快速入口",
  description:
    "按感冒、发烧、咳嗽、头痛、胃痛、胸闷、失眠、头晕等高频问题，快速查看挂什么科与何时需要急诊（仅用于导诊分流）。",
  alternates: {
    canonical: "/guides",
  },
};

const guides = [
  {
    slug: "ganmao-gua-shenme-ke",
    title: "感冒挂什么科",
    summary: "感冒常见于上呼吸道感染，可先看全科、呼吸内科或耳鼻喉科。",
    tags: ["呼吸", "耳鼻喉"],
  },
  {
    slug: "fashao-gua-shenme-ke",
    title: "发烧挂什么科",
    summary: "发热需结合持续时间、伴随症状与年龄判断，可先看感染科或内科。",
    tags: ["感染", "发热"],
  },
  {
    slug: "kesou-gua-shenme-ke",
    title: "咳嗽挂什么科",
    summary: "咳嗽常见于呼吸系统问题，也可能与鼻后滴漏或反流有关。",
    tags: ["呼吸"],
  },
  {
    slug: "toutong-gua-shenme-ke",
    title: "头痛挂什么科",
    summary: "头痛常先看神经内科，若突发剧烈或伴神经症状需尽快就医。",
    tags: ["神经"],
  },
  {
    slug: "weitong-gua-shenme-ke",
    title: "胃痛挂什么科",
    summary: "胃痛一般先看消化内科，持续加重或伴呕血黑便需尽快就医。",
    tags: ["消化"],
  },
  {
    slug: "xiongmen-gua-shenme-ke",
    title: "胸闷挂什么科",
    summary: "胸闷常先看心内科或呼吸内科，若伴胸痛气短需警惕急症。",
    tags: ["心脏", "呼吸"],
  },
  {
    slug: "shimian-gua-shenme-ke",
    title: "失眠挂什么科",
    summary: "失眠常看精神科、心理科或神经内科，重点评估持续时间和影响程度。",
    tags: ["心理", "神经"],
  },
  {
    slug: "touyun-gua-shenme-ke",
    title: "头晕挂什么科",
    summary: "头晕常看神经内科，也可能涉及耳鼻喉、心血管等方向。",
    tags: ["神经", "耳鼻喉"],
  },
];

export default function GuidesPage() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "导诊指南",
    description:
      "按感冒、发烧、咳嗽、头痛、胃痛、胸闷、失眠、头晕等高频问题，快速查看挂什么科与何时需要急诊。",
    url: "https://triage-seo-site.vercel.app/guides",
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "导诊指南列表",
    itemListElement: guides.map((g, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: g.title,
      url: `https://triage-seo-site.vercel.app/guides/${g.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <main className="mx-auto max-w-5xl p-6 space-y-6">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold">导诊指南</h1>
          <p className="text-slate-600">
            汇总高频“挂什么科”问题，帮助你快速进入更接近自己情况的答案页。
          </p>

          <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 space-y-2">
            <div className="text-sm font-semibold text-emerald-900">
              快速说明（可直接引用）
            </div>
            <div className="text-sm text-slate-800 leading-6">
              本页面汇总感冒、发烧、咳嗽、头痛、胃痛、胸闷、失眠、头晕等高频导诊问题，
              帮助用户快速判断优先挂什么科，并提示何时应急诊或尽快线下就医。
              本网站仅用于导诊分流与就诊准备建议，不提供诊断与治疗方案。
            </div>
          </section>

          <div className="flex flex-wrap gap-2">
            <Link
              href="/symptoms"
              className="rounded-xl border px-4 py-2 text-sm hover:bg-slate-50"
            >
              查看症状目录
            </Link>
            <Link
              href="/topics"
              className="rounded-xl border px-4 py-2 text-sm hover:bg-slate-50"
            >
              查看症状专题
            </Link>
            <Link
              href="/triage"
              className="rounded-xl border border-cyan-600 bg-cyan-600 px-4 py-2 text-sm text-white hover:bg-cyan-700"
            >
              开始导诊
            </Link>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {guides.map((g) => (
            <Link
              key={g.slug}
              href={`/guides/${g.slug}`}
              className="rounded-2xl border p-4 hover:bg-slate-50"
            >
              <div className="text-lg font-semibold">{g.title}</div>
              <div className="mt-2 text-sm text-slate-600">{g.summary}</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {g.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-3 text-sm text-cyan-700">查看指南 →</div>
            </Link>
          ))}
        </section>

        <footer className="text-xs text-slate-500">
          免责声明：本页面仅用于导诊分流与就医准备建议，不提供诊断与治疗方案。
        </footer>
      </main>
    </>
  );
}