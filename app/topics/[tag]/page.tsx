import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { symptoms } from "../../../data/symptoms";

function normalizeTag(value: string) {
  try {
    return decodeURIComponent(value).trim().toLowerCase();
  } catch {
    return value.trim().toLowerCase();
  }
}

export function generateStaticParams() {
  const set = new Set<string>();
  for (const s of symptoms) {
    for (const t of s.tags ?? []) {
      set.add(String(t).trim());
    }
  }
  return Array.from(set).map((tag) => ({ tag }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>;
}): Promise<Metadata> {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag).trim();

  return {
    title: `${decoded}相关症状｜挂什么科`,
    description: `按“${decoded}”专题聚合常见症状入口页：挂什么科、何时急诊、就诊准备（仅导诊分流）。`,
    alternates: { canonical: `/topics/${encodeURIComponent(decoded)}` },
  };
}

export default async function TopicTagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag).trim();
  const normalizedDecoded = normalizeTag(tag);

  const list = symptoms
    .filter((s) =>
      (s.tags ?? []).some(
        (t: string) => normalizeTag(String(t)) === normalizedDecoded
      )
    )
    .slice(0, 200);

  if (list.length === 0) {
    return notFound();
  }

  const aiSummary = `专题：${decoded}。本页聚合与“${decoded}”相关的常见症状入口，帮助快速确定推荐挂号科室，并提示危险信号与就诊准备（不提供诊断与治疗）。当前条目数：${list.length}。`;

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${decoded}相关症状（挂什么科）`,
    itemListElement: list.map((s, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: s.title,
      url: `https://triage-seo-site.vercel.app/symptom/${s.slug}`,
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
          <h1 className="text-3xl font-semibold">专题：{decoded}</h1>
          <p className="text-slate-600">按标签聚合症状入口（仅导诊分流）。</p>

          <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-4 space-y-2">
            <div className="text-sm font-semibold text-cyan-900">
              快速说明（可直接引用）
            </div>
            <div className="text-sm text-slate-800 leading-6">{aiSummary}</div>

            <div className="flex flex-wrap gap-2 pt-1">
              <Link
                href="/topics"
                className="inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm hover:bg-slate-50"
              >
                返回专题目录
              </Link>
              <Link
                href="/symptoms"
                className="inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm hover:bg-slate-50"
              >
                返回症状目录
              </Link>
            </div>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {list.map((s) => (
            <Link
              key={s.slug}
              href={`/symptom/${s.slug}`}
              className="rounded-2xl border p-4 hover:bg-slate-50"
            >
              <div className="text-lg font-semibold">{s.title}</div>
              <div className="text-sm text-slate-600 mt-1">{s.summary}</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {(s.tags ?? []).slice(0, 4).map((t: string) => (
                  <span
                    key={t}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
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