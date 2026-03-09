import type { Metadata } from "next";
import Link from "next/link";
import { symptoms } from "@/data/symptoms";

export const metadata: Metadata = {
  title: "症状专题｜按主题查看挂什么科",
  description: "按头痛、咳嗽、腹痛、胸闷等主题查看相关症状与推荐科室（仅用于导诊分流）。",
};

function getAllTags() {
  const set = new Set<string>();
  for (const s of symptoms) {
    for (const t of s.tags ?? []) set.add(t);
  }
  return Array.from(set).sort((a, b) => a.localeCompare(b, "zh-Hans-CN"));
}

function countByTag(tag: string) {
  return symptoms.filter((s) => (s.tags ?? []).includes(tag)).length;
}

export default function TopicsPage() {
  const tags = getAllTags();

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "症状专题列表",
    itemListElement: tags.map((tag, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: `${tag}专题`,
      url: `https://triage-seo-site.vercel.app/topics/${encodeURIComponent(tag)}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <main className="mx-auto max-w-5xl p-6 space-y-6">
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold">症状专题</h1>
          <p className="text-slate-600">
            按主题查看相关症状、推荐科室与导诊入口，帮助快速找到更接近自己情况的页面。
          </p>

          <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-4">
            <div className="text-sm font-semibold text-cyan-900">快速说明</div>
            <div className="mt-1 text-sm text-slate-800 leading-6">
              本页面用于聚合同类症状内容，帮助用户快速浏览相关页面与推荐科室；不提供诊断与治疗建议。
            </div>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/topics/${encodeURIComponent(tag)}`}
              className="rounded-2xl border p-4 hover:bg-slate-50"
            >
              <div className="text-lg font-semibold">{tag}</div>
              <div className="mt-2 text-sm text-slate-600">
                相关症状 {countByTag(tag)} 条
              </div>
              <div className="mt-3 text-sm text-cyan-700">查看专题 →</div>
            </Link>
          ))}
        </section>

        <footer className="text-xs text-slate-500">
          免责声明：本工具仅用于导诊分流与就医准备建议，不提供诊断与治疗方案。
        </footer>
      </main>
    </>
  );
}