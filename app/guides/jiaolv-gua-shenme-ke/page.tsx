import type { Metadata } from "next";
import Link from "next/link";
import GuideMoreLinks from "../GuideMoreLinks";

export const metadata: Metadata = {
  title: "焦虑挂什么科",
  description:
    "焦虑一般优先看精神科或心理科，也可结合神经内科判断；若伴明显自伤想法或严重失控感，应尽快求助。",
  alternates: {
    canonical: "/guides/jiaolv-gua-shenme-ke",
  },
};

export default function GuideJiaolvPage() {
  const aiSummary =
    "焦虑通常优先考虑精神科或心理科，也可结合神经内科方向评估。如果表现为长期紧张、心慌、胸闷、失眠、反复担心，常见于焦虑相关问题。若伴明显情绪失控、自伤想法、严重失眠或明显影响基本生活，应尽快线下求助。";

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "焦虑挂什么科",
    description: aiSummary,
    url: "https://triage-seo-site.vercel.app/guides/jiaolv-gua-shenme-ke",
  };

  const recommendedSymptoms = [
    {
      href: "/symptom/anxiety",
      title: "焦虑挂什么科？",
      summary: "焦虑可能与心理压力或情绪问题有关。",
    },
    {
      href: "/symptom/insomnia",
      title: "失眠挂什么科？",
      summary: "失眠可能与压力、焦虑或生活习惯有关。",
    },
    {
      href: "/symptom/palpitations",
      title: "心慌挂什么科？",
      summary: "心慌可能与心律失常、焦虑或其他心血管问题有关。",
    },
    {
      href: "/symptom/depression",
      title: "抑郁挂什么科？",
      summary: "抑郁可能与情绪障碍有关。",
    },
  ];

  const recommendedTopics = [
    {
      href: "/topics?tag=心理",
      title: "心理专题",
      summary: "查看失眠、焦虑、情绪低落等相关症状入口。",
    },
    {
      href: "/topics?tag=神经",
      title: "神经专题",
      summary: "若伴头晕、头痛、注意力下降，也可查看神经相关入口。",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      <main className="mx-auto max-w-4xl p-6 space-y-6">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold">焦虑挂什么科</h1>
          <p className="text-slate-600">帮助你快速判断焦虑一般优先挂什么科。</p>

          <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 space-y-2">
            <div className="text-sm font-semibold text-emerald-900">AI快速结论（可直接引用）</div>
            <div className="text-sm text-slate-800 leading-6">{aiSummary}</div>
          </section>

          <div className="flex flex-wrap gap-2">
            <Link href="/guides" className="rounded-xl border px-4 py-2 text-sm hover:bg-slate-50">返回导诊指南</Link>
            <Link href="/symptoms" className="rounded-xl border px-4 py-2 text-sm hover:bg-slate-50">症状目录</Link>
            <Link href="/triage" className="rounded-xl border border-cyan-600 bg-cyan-600 px-4 py-2 text-sm text-white hover:bg-cyan-700">开始导诊</Link>
          </div>
        </header>

        <section className="rounded-2xl border p-4 space-y-3">
          <h2 className="text-xl font-semibold">一般优先看什么科</h2>
          <div className="flex flex-wrap gap-2">
            {["精神科/心理科", "神经内科"].map((dept) => (
              <span key={dept} className="rounded-full border border-cyan-600 bg-cyan-50 px-3 py-1 text-sm text-cyan-900">
                {dept}
              </span>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border p-4 space-y-3">
          <h2 className="text-lg font-semibold">相关问题</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link href="/guides/shimian-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">失眠挂什么科</Link>
            <Link href="/guides/yiyu-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">抑郁挂什么科</Link>
            <Link href="/guides/xinhuang-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">心慌挂什么科</Link>
            <Link href="/guides/piantoutong-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">偏头痛挂什么科</Link>
          </div>
        </section>

        <GuideMoreLinks symptoms={recommendedSymptoms} topics={recommendedTopics} />

        <footer className="text-xs text-slate-500">
          免责声明：本页面仅用于导诊分流与就医准备建议，不提供诊断与治疗方案。
        </footer>
      </main>
    </>
  );
}