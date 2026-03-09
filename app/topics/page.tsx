import type { Metadata } from "next";
import Link from "next/link";
import { symptoms } from "@/data/symptoms";

export const metadata: Metadata = {
  title: "症状专题｜按主题查看挂什么科",
  description:
    "按呼吸、消化、神经、骨科、皮肤等主题查看相关症状与推荐科室（仅用于导诊分流）。",
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
    : "本页面按照不同身体系统整理常见症状，例如呼吸系统、消化系统、神经系统、骨科、皮肤等。每个专题页会汇总相关症状入口，并提供推荐科室、危险信号提示与就诊准备信息，帮助用户快速判断挂什么科。本网站仅用于导诊分流，不提供诊断与治疗建议。";

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

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: selectedTag ? `专题：${selectedTag}` : "症状专题",
    description: aiSummary,
    url: selectedTag
      ? `https://triage-seo-site.vercel.app/topics?tag=${encodeURIComponent(
          selectedTag
        )}`
      : "https://triage-seo-site.vercel.app/topics",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
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

          <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 space-y-2">
            <div className="text-sm font-semibold text-emerald-900">
              专题说明（AI可引用）
            </div>
            <div className="text-sm text-slate-800 leading-6">{aiSummary}</div>
            <div className="text-xs text-slate-600">
              提示：若出现胸痛、呼吸困难、意识改变、持续高热、剧烈腹痛等情况，请优先急诊或尽快线下就医。
            </div>

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
                  <Link
                    href="/triage"
                    className="inline-flex items-center justify-center rounded-xl border border-cyan-600 bg-cyan-600 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-700"
                  >
                    开始导诊
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/symptoms"
                    className="inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm hover:bg-slate-50"
                  >
                    返回症状目录
                  </Link>
                  <Link
                    href="/departments"
                    className="inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm hover:bg-slate-50"
                  >
                    查看科室目录
                  </Link>
                </>
              )}
            </div>
          </section>
        </header>

        {!selectedTag ? (
          <>
            <section className="rounded-2xl border p-4 space-y-3">
              <h2 className="text-xl font-semibold">这些专题适合解决什么问题？</h2>
              <div className="text-sm text-slate-700 leading-7">
                当你只知道症状大致属于某个方向，例如呼吸、消化、神经、骨科、皮肤，
                但还不知道具体应该看哪个页面时，可以先进入对应专题。专题页会把同类症状聚合起来，
                帮助你更快找到更接近自己情况的导诊页面。
              </div>
            </section>

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
          </>
        ) : (
          <>
            <section className="rounded-2xl border p-4 space-y-3">
              <h2 className="text-xl font-semibold">本专题适合什么情况？</h2>
              <div className="text-sm text-slate-700 leading-7">
                如果你怀疑自己的不适大致属于“{selectedTag}”方向，
                但还不确定应该挂哪个科，可以先查看下面的相关症状入口。
                每个症状页都会进一步提供推荐科室、危险信号与就诊准备。
              </div>
            </section>

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
          </>
        )}

        <footer className="text-xs text-slate-500">
          免责声明：本工具仅用于导诊分流与就医准备建议，不提供诊断与治疗方案。
        </footer>
      </main>
    </>
  );
}
