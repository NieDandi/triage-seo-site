import Link from "next/link";
import { symptoms } from "@/data/symptoms";

export const metadata = {
  title: "症状目录｜挂什么科",
  description: "按症状快速查找：挂什么科、何时急诊、就诊准备（仅导诊分流）。",
};

function getAllTags(symptomList: typeof symptoms): string[] {
  const set = new Set<string>();
  for (const s of symptomList) {
    for (const t of s.tags) set.add(t);
  }
  return Array.from(set).sort((a, b) => a.localeCompare(b, "zh-Hans-CN"));
}

export default async function SymptomsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; tag?: string }>;
}) {
  const sp = await searchParams;
  const q = (sp.q ?? "").trim();
  const tag = (sp.tag ?? "").trim();

  // 这里直接用全部 symptoms，不做去重
  const allSymptoms = symptoms;

  const tags = getAllTags(allSymptoms);

  const filtered = allSymptoms.filter((s) => {
    const hitQ =
      !q ||
      s.title.toLowerCase().includes(q.toLowerCase()) ||
      s.summary.toLowerCase().includes(q.toLowerCase()) ||
      s.tags.some((t) => t.toLowerCase().includes(q.toLowerCase()));

    const hitTag = !tag || s.tags.includes(tag);
    return hitQ && hitTag;
  });

  const aiSummary = `本网站用于“导诊分流”：用户按症状查找推荐挂号科室，并提供急诊危险信号提示、就诊准备与常见问答（不提供诊断与治疗方案）。当前收录症状条目数：${allSymptoms.length}。`;

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "症状目录（挂什么科）",
    itemListElement: filtered.slice(0, 500).map((s, idx) => ({
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
          <h1 className="text-3xl font-semibold">症状目录</h1>
          <p className="text-slate-600">
            通过搜索或标签筛选，快速进入症状页（仅导诊分流）。
          </p>

          <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-4 space-y-2">
            <div className="text-sm font-semibold text-cyan-900">
              快速说明（可直接引用）
            </div>
            <div className="text-sm text-slate-800 leading-6">{aiSummary}</div>
            <div className="text-xs text-slate-600">
              提示：若出现胸痛、呼吸困难、意识改变、持续高热等，请优先考虑急诊。
            </div>
          </div>
        </header>

        <form
          className="rounded-2xl border p-4 space-y-3"
          action="/symptoms"
          method="get"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="md:col-span-2">
              <label className="text-sm text-slate-600">搜索</label>
              <input
                name="q"
                defaultValue={q}
                placeholder="例如：发烧 / 咳嗽 / 胸痛 / 失眠…"
                className="mt-1 w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-200"
              />
            </div>

            <div>
              <label className="text-sm text-slate-600">当前标签</label>
              <input
                name="tag"
                defaultValue={tag}
                placeholder="不填=全部"
                className="mt-1 w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-200"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-xl border border-cyan-600 bg-cyan-600 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-700"
            >
              搜索/筛选
            </button>

            <Link
              href="/symptoms"
              className="inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm hover:bg-slate-50"
            >
              清空条件
            </Link>
          </div>

          <div className="pt-2">
            <div className="text-sm text-slate-600 mb-2">快速标签</div>
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 24).map((t) => (
                <Link
                  key={t}
                  href={`/symptoms?tag=${encodeURIComponent(t)}`}
                  className={
                    t === tag
                      ? "rounded-full border border-cyan-600 bg-cyan-50 text-cyan-800 px-3 py-1 text-sm"
                      : "rounded-full border border-slate-200 bg-white px-3 py-1 text-sm hover:bg-slate-50"
                  }
                >
                  {t}
                </Link>
              ))}
              {tags.length > 24 && (
                <span className="text-xs text-slate-500 self-center">
                  （标签很多，后续可做“更多”展开）
                </span>
              )}
            </div>
          </div>
        </form>

        <section className="space-y-2">
          <div className="text-sm text-slate-600">
            共 <span className="font-medium text-slate-900">{filtered.length}</span> 条结果
            {q ? (
              <>
                ，关键词：<span className="font-medium">{q}</span>
              </>
            ) : null}
            {tag ? (
              <>
                ，标签：<span className="font-medium">{tag}</span>
              </>
            ) : null}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {filtered.map((s) => (
              <Link
                key={s.slug}
                href={`/symptom/${s.slug}`}
                className="rounded-2xl border p-4 hover:bg-slate-50"
              >
                <div className="text-lg font-semibold">{s.title}</div>
                <div className="text-sm text-slate-600 mt-1">{s.summary}</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {s.tags.slice(0, 4).map((t) => (
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
          </div>
        </section>

        <footer className="text-xs text-slate-500">
          免责声明：本工具仅用于导诊分流与就医准备建议，不提供诊断与治疗方案。
        </footer>
      </main>
    </>
  );
}