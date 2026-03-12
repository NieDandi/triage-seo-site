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
  {
    slug: "bisai-gua-shenme-ke",
    title: "鼻塞挂什么科",
    summary: "鼻塞一般优先看耳鼻喉科，若伴高热、头痛需尽快就医。",
    tags: ["耳鼻喉"],
  },
  {
    slug: "houlongtong-gua-shenme-ke",
    title: "喉咙痛挂什么科",
    summary: "喉咙痛一般优先看耳鼻喉科，也可结合呼吸内科判断。",
    tags: ["耳鼻喉", "呼吸"],
  },
  {
    slug: "futong-gua-shenme-ke",
    title: "腹痛挂什么科",
    summary: "腹痛一般优先看消化内科，也可能涉及普通外科。",
    tags: ["消化"],
  },
  {
    slug: "xinhuang-gua-shenme-ke",
    title: "心慌挂什么科",
    summary: "心慌一般优先看心内科，也可能结合内分泌或心理方向判断。",
    tags: ["心脏", "心理"],
  },
  {
    slug: "liubiti-gua-shenme-ke",
    title: "流鼻涕挂什么科",
    summary: "流鼻涕一般优先看耳鼻喉科，也可结合呼吸内科判断。",
    tags: ["耳鼻喉", "呼吸"],
  },
  {
    slug: "huxikunnan-gua-shenme-ke",
    title: "呼吸困难挂什么科",
    summary: "呼吸困难一般优先看呼吸内科或心内科。",
    tags: ["呼吸", "心脏"],
  },
  {
    slug: "fansuan-gua-shenme-ke",
    title: "反酸挂什么科",
    summary: "反酸一般优先看消化内科。",
    tags: ["消化"],
  },
  {
    slug: "fuxie-gua-shenme-ke",
    title: "腹泻挂什么科",
    summary: "腹泻一般优先看消化内科或感染科。",
    tags: ["消化", "感染"],
  },
  {
    slug: "piantoutong-gua-shenme-ke",
    title: "偏头痛挂什么科",
    summary: "偏头痛一般优先看神经内科。",
    tags: ["神经"],
  },
  {
    slug: "jiaolv-gua-shenme-ke",
    title: "焦虑挂什么科",
    summary: "焦虑一般优先看精神科或心理科。",
    tags: ["心理"],
  },
  {
    slug: "yiyu-gua-shenme-ke",
    title: "抑郁挂什么科",
    summary: "抑郁一般优先看精神科或心理科。",
    tags: ["心理"],
  },
  {
    slug: "xiongtong-gua-shenme-ke",
    title: "胸痛挂什么科",
    summary: "胸痛一般优先看心内科，也可能涉及呼吸内科。",
    tags: ["心脏", "呼吸"],
  },
];

const hotGuides = [
  "ganmao-gua-shenme-ke",
  "fashao-gua-shenme-ke",
  "kesou-gua-shenme-ke",
  "xiongmen-gua-shenme-ke",
];

const recommendedSymptoms = [
  {
    href: "/symptom/cough",
    title: "咳嗽挂什么科？",
    summary: "咳嗽常见于感冒、支气管炎、肺炎等呼吸系统问题。",
  },
  {
    href: "/symptom/headache",
    title: "头痛挂什么科？",
    summary: "头痛可能与偏头痛、紧张性头痛或感染有关。",
  },
  {
    href: "/symptom/abdominal-pain",
    title: "腹痛挂什么科？",
    summary: "腹痛常见于胃炎、阑尾炎或肠胃问题。",
  },
  {
    href: "/symptom/dizziness",
    title: "头晕挂什么科？",
    summary: "头晕可能与低血压、贫血、耳石症或神经系统问题有关。",
  },
];

const recommendedTopics = [
  {
    href: "/topics?tag=呼吸",
    title: "呼吸专题",
    summary: "查看咳嗽、气短、胸闷、呼吸困难等相关症状入口。",
  },
  {
    href: "/topics?tag=消化",
    title: "消化专题",
    summary: "查看胃痛、腹胀、反酸、腹泻、恶心等相关症状入口。",
  },
  {
    href: "/topics?tag=神经",
    title: "神经专题",
    summary: "查看头痛、头晕、手麻、记忆力下降等相关症状入口。",
  },
  {
    href: "/topics?tag=心理",
    title: "心理专题",
    summary: "查看失眠、焦虑、情绪低落等相关症状入口。",
  },
];

const guideGroups = [
  {
    key: "respiratory",
    title: "呼吸 / 耳鼻喉",
    desc: "适合感冒、鼻塞、流鼻涕、喉咙痛、咳嗽、呼吸困难等问题。",
    match: (g: (typeof guides)[number]) =>
      g.tags.includes("呼吸") || g.tags.includes("耳鼻喉"),
  },
  {
    key: "digestive",
    title: "消化",
    desc: "适合胃痛、腹痛、反酸、腹泻等消化系统问题。",
    match: (g: (typeof guides)[number]) => g.tags.includes("消化"),
  },
  {
    key: "neuro",
    title: "神经",
    desc: "适合头痛、偏头痛、头晕等神经系统相关问题。",
    match: (g: (typeof guides)[number]) => g.tags.includes("神经"),
  },
  {
    key: "mental",
    title: "心理",
    desc: "适合失眠、焦虑、抑郁等心理和情绪相关问题。",
    match: (g: (typeof guides)[number]) => g.tags.includes("心理"),
  },
  {
    key: "cardio",
    title: "心脏",
    desc: "适合胸闷、胸痛、心慌等心血管相关问题。",
    match: (g: (typeof guides)[number]) => g.tags.includes("心脏"),
  },
];

export default function GuidesPage() {
  const aiSummary =
    "本页面汇总感冒、发烧、咳嗽、头痛、胃痛、胸闷、失眠、头晕等高频导诊问题，帮助用户快速判断优先挂什么科，并提示何时应急诊或尽快线下就医。用户也可以继续进入症状页和专题页，查看更细的导诊分流信息。本网站仅用于导诊分流与就诊准备建议，不提供诊断与治疗方案。";

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "导诊指南",
    description: aiSummary,
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
            <div className="text-sm text-slate-800 leading-6">{aiSummary}</div>
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

        <section className="rounded-2xl border p-4 space-y-3">
          <h2 className="text-xl font-semibold">热门指南</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {guides
              .filter((g) => hotGuides.includes(g.slug))
              .map((g) => (
                <Link
                  key={g.slug}
                  href={`/guides/${g.slug}`}
                  className="rounded-2xl border p-4 hover:bg-slate-50"
                >
                  <div className="text-lg font-semibold">{g.title}</div>
                  <div className="mt-2 text-sm text-slate-600">{g.summary}</div>
                  <div className="mt-3 text-sm text-cyan-700">查看指南 →</div>
                </Link>
              ))}
          </div>
        </section>

        {guideGroups.map((group) => {
          const list = guides.filter(group.match);
          if (list.length === 0) return null;

          return (
            <section key={group.key} className="rounded-2xl border p-4 space-y-3">
              <div>
                <h2 className="text-xl font-semibold">{group.title}</h2>
                <p className="mt-1 text-sm text-slate-600">{group.desc}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {list.map((g) => (
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
              </div>
            </section>
          );
        })}

        <section className="rounded-2xl border p-4 space-y-3">
          <h2 className="text-xl font-semibold">推荐症状入口</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {recommendedSymptoms.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="rounded-xl border p-3 hover:bg-slate-50"
              >
                <div className="font-medium">{s.title}</div>
                <div className="text-sm text-slate-600 mt-1">{s.summary}</div>
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border p-4 space-y-3">
          <h2 className="text-xl font-semibold">推荐专题入口</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {recommendedTopics.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="rounded-xl border p-3 hover:bg-slate-50"
              >
                <div className="font-medium">{t.title}</div>
                <div className="text-sm text-slate-600 mt-1">{t.summary}</div>
              </Link>
            ))}
          </div>
        </section>

        <footer className="text-xs text-slate-500">
          免责声明：本页面仅用于导诊分流与就医准备建议，不提供诊断与治疗方案。
        </footer>
      </main>
    </>
  );
}