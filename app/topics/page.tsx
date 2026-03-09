import type { Metadata } from "next";
import Link from "next/link";
import { symptoms } from "@/data/symptoms";

export const metadata: Metadata = {
  title: "症状专题｜按主题查看挂什么科",
  description:
    "按头痛、咳嗽、腹痛、胸闷等主题查看相关症状与推荐科室（仅用于导诊分流）。",
};

function getAllTags() {
  const set = new Set<string>();
  for (const s of symptoms) {
    for (const t of s.tags ?? []) set.add(String(t).trim());
  }
  return Array.from(set).sort((a, b) => a.localeCompare(b, "zh-Hans-CN"));
}

function normalizeTag(value: string) {
  return String(value).trim().toLowerCase();
}

export default async function TopicsPage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) {
  const sp = await searchParams;
  const rawTag = (sp.tag ?? "").trim();
  const tags = getAllTags();

  const selectedTag = rawTag
    ? tags.find((t) => normalizeTag(t) === normalizeTag(rawTag)) ?? rawTag
    : "";

  const filtered = selectedTag
    ? symptoms.filter((s) =>
        (s.tags ?? []).some(
          (t: string) => normalizeTag(t) === normalizeTag(selectedTag)
        )
      )
    : [];

  const aiSummary = selectedTag
    ? `专题：${selectedTag}。本页聚合与“${selectedTag}”相关的常见症状入口，帮助快速确定推荐挂号科室，并提示危险信号与就诊准备（不提供诊断与治疗）。当前条目数：${filtered.length}。`
    : "本页面用于聚合同类症状内容，帮助用户快速浏览相关页面与推荐科室；不提供诊断与治疗建议。";

  const itemListJsonLd = selectedTag
    ? {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: `${selectedTag}相关症状（挂什么科）`,
        itemListElement: filtered.map((s, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: s.title,
          url: `https://triage-seo-site.vercel.app/symptom/${s.slug}`,
        })),
      }
    : {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "症状专题列表",
        itemListElement: tags.map((tag, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: `${tag}专题`,
          url: `https://triage-seo-site.vercel.app/topics?tag=${encodeURIComponent(tag)}`,
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
          <h1 className="text-3xl font-semibold">
            {selectedTag ? `专题：${selectedTag}` : "症状专题"}
          </h1>

          <p className="text-slate-600">
            {selectedTag
              ? "按标签聚合症状入口（仅导诊分流）。"
              : "按主题查看相关症状、推荐科室与导诊入口，帮助快速找到更接近自己情况的页面。"}
          </p>

          <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-4 space-y-2">
            <div className="text-sm font-semibold text-cyan-900">
              快速说明（可直接引用）
            </div>
            <div className="text-sm text-slate-800 leading-6">{aiSummary}</div>

            <div className="flex flex-wrap gap-2 pt-1">
              {selectedTag ? (
                <>
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
                </>
              ) : (
                <Link
                  href="/symptoms"
                  className="inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm hover:bg-slate-50"
                >
                  返回症状目录
                </Link>
              )}
            </div>
          </div>
        </header>

        {!selectedTag ? (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tags.map((tag) => {
              const count = symptoms.filter((s) =>
                (s.tags ?? []).some(
                  (t: string) => normalizeTag(t) === normalizeTag(tag)
                )
              ).length;

              return (
                <Link
                  key={tag}
                  href={`/topics?tag=${encodeURIComponent(tag)}`}
                  className="rounded-2xl border p-4 hover:bg-slate-50"
                >
                  <div className="text-lg font-semibold">{tag}</div>
                  <div className="mt-2 text-sm text-slate-600">
                    相关症状 {count} 条
                  </div>
                  <div className="mt-3 text-sm text-cyan-700">查看专题 →</div>
                </Link>
              );
            })}
          </section>
        ) : (
          <section className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {filtered.length > 0 ? (
              filtered.map((s) => (
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
              ))
            ) : (
              <div className="rounded-2xl border p-6 text-slate-600">
                当前专题暂无匹配内容。
              </div>
            )}
          </section>
        )}

        <footer className="text-xs text-slate-500">
          免责声明：本工具仅用于导诊分流与就医准备建议，不提供诊断与治疗方案。
        </footer>
      </main>
    </>
  );
}