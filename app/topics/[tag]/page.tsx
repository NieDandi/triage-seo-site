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
    const guideMap: Record<string, { href: string; title: string; summary: string }[]> = {
    "呼吸": [
      {
        href: "/guides/kesou-gua-shenme-ke",
        title: "咳嗽挂什么科",
        summary: "咳嗽一般优先看呼吸内科，也可结合耳鼻喉科方向判断。",
      },
      {
        href: "/guides/huxikunnan-gua-shenme-ke",
        title: "呼吸困难挂什么科",
        summary: "呼吸困难一般优先看呼吸内科或心内科。",
      },
      {
        href: "/guides/ganmao-gua-shenme-ke",
        title: "感冒挂什么科",
        summary: "普通感冒一般可先看全科医学科、呼吸内科或耳鼻喉科。",
      },
      {
        href: "/guides/xiongtong-gua-shenme-ke",
        title: "胸痛挂什么科",
        summary: "胸痛一般优先看心内科，也可能涉及呼吸内科。",
      },
    ],
    "耳鼻喉": [
      {
        href: "/guides/bisai-gua-shenme-ke",
        title: "鼻塞挂什么科",
        summary: "鼻塞一般优先看耳鼻喉科。",
      },
      {
        href: "/guides/liubiti-gua-shenme-ke",
        title: "流鼻涕挂什么科",
        summary: "流鼻涕一般优先看耳鼻喉科，也可结合呼吸内科判断。",
      },
      {
        href: "/guides/houlongtong-gua-shenme-ke",
        title: "喉咙痛挂什么科",
        summary: "喉咙痛一般优先看耳鼻喉科。",
      },
      {
        href: "/guides/ganmao-gua-shenme-ke",
        title: "感冒挂什么科",
        summary: "普通感冒一般可先看全科医学科、呼吸内科或耳鼻喉科。",
      },
    ],
    "消化": [
      {
        href: "/guides/weitong-gua-shenme-ke",
        title: "胃痛挂什么科",
        summary: "胃痛一般先看消化内科。",
      },
      {
        href: "/guides/futong-gua-shenme-ke",
        title: "腹痛挂什么科",
        summary: "腹痛一般优先看消化内科，也可能涉及普通外科。",
      },
      {
        href: "/guides/fuxie-gua-shenme-ke",
        title: "腹泻挂什么科",
        summary: "腹泻一般优先看消化内科或感染科。",
      },
      {
        href: "/guides/fansuan-gua-shenme-ke",
        title: "反酸挂什么科",
        summary: "反酸一般优先看消化内科。",
      },
    ],
    "神经": [
      {
        href: "/guides/toutong-gua-shenme-ke",
        title: "头痛挂什么科",
        summary: "头痛通常优先考虑神经内科。",
      },
      {
        href: "/guides/piantoutong-gua-shenme-ke",
        title: "偏头痛挂什么科",
        summary: "偏头痛一般优先看神经内科。",
      },
      {
        href: "/guides/touyun-gua-shenme-ke",
        title: "头晕挂什么科",
        summary: "头晕通常优先看神经内科。",
      },
      {
        href: "/guides/shimian-gua-shenme-ke",
        title: "失眠挂什么科",
        summary: "失眠通常优先考虑精神科、心理科或神经内科。",
      },
    ],
    "心理": [
      {
        href: "/guides/jiaolv-gua-shenme-ke",
        title: "焦虑挂什么科",
        summary: "焦虑一般优先看心理科或精神科。",
      },
      {
        href: "/guides/yiyu-gua-shenme-ke",
        title: "抑郁挂什么科",
        summary: "抑郁一般优先看精神科或心理科。",
      },
      {
        href: "/guides/shimian-gua-shenme-ke",
        title: "失眠挂什么科",
        summary: "失眠一般优先看神经内科、心理科或精神科。",
      },
    ],
    "心脏": [
      {
        href: "/guides/xiongmen-gua-shenme-ke",
        title: "胸闷挂什么科",
        summary: "胸闷常先看心内科或呼吸内科。",
      },
      {
        href: "/guides/xiongtong-gua-shenme-ke",
        title: "胸痛挂什么科",
        summary: "胸痛一般优先看心内科。",
      },
      {
        href: "/guides/xinhuang-gua-shenme-ke",
        title: "心慌挂什么科",
        summary: "心慌一般优先看心内科。",
      },
      {
        href: "/guides/huxikunnan-gua-shenme-ke",
        title: "呼吸困难挂什么科",
        summary: "呼吸困难一般优先看呼吸内科或心内科。",
      },
    ],
  };

  const relatedGuides = guideMap[decoded] ?? [];

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

                {relatedGuides.length > 0 ? (
          <section className="rounded-2xl border p-4 space-y-3">
            <h2 className="text-lg font-semibold">推荐导诊指南</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {relatedGuides.map((g) => (
                <Link
                  key={g.href}
                  href={g.href}
                  className="rounded-xl border p-3 hover:bg-slate-50"
                >
                  <div className="font-medium">{g.title}</div>
                  <div className="text-sm text-slate-600 mt-1">{g.summary}</div>
                </Link>
              ))}
            </div>
          </section>
        ) : null}
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
