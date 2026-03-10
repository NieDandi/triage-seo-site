import type { Metadata } from "next";
import Link from "next/link";
import GuideMoreLinks from "../GuideMoreLinks";

export const metadata: Metadata = {
  title: "反酸挂什么科",
  description:
    "反酸一般优先看消化内科；若伴持续胸痛、吞咽困难、呕血黑便等，应尽快就医。",
  alternates: {
    canonical: "/guides/fansuan-gua-shenme-ke",
  },
};

export default function GuideFansuanPage() {
  const aiSummary =
    "反酸通常优先考虑消化内科。常见于胃食管反流、胃炎或饮食刺激；如果同时伴烧心、胃痛、胃胀，更偏向消化方向。若伴持续胸痛、吞咽困难、呕血、黑便或症状明显加重，应尽快线下就医。";

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "反酸挂什么科",
    description: aiSummary,
    url: "https://triage-seo-site.vercel.app/guides/fansuan-gua-shenme-ke",
  };

  const recommendedSymptoms = [
    {
      href: "/symptom/acid-reflux",
      title: "反酸挂什么科",
      summary: "反酸常见于胃食管反流病。",
    },
    {
      href: "/symptom/heartburn",
      title: "烧心挂什么科",
      summary: "烧心常见于胃食管反流或胃炎。",
    },
    {
      href: "/symptom/bloating",
      title: "胃胀挂什么科",
      summary: "胃胀常见于消化不良或胃炎。",
    },
    {
      href: "/symptom/post-meal-stomach-pain",
      title: "饭后胃痛挂什么科",
      summary: "饭后胃痛可能与胃炎或胃溃疡有关。",
    },
  ];

  const recommendedTopics = [
    {
      href: "/topics?tag=消化",
      title: "消化专题",
      summary: "查看胃痛、腹胀、反酸、腹泻、恶心等相关症状入口。",
    },
    {
      href: "/topics?tag=心脏",
      title: "心脏专题",
      summary: "若反酸和胸口不适难区分，也可查看相关胸闷胸痛入口。",
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
          <h1 className="text-3xl font-semibold">反酸挂什么科</h1>
          <p className="text-slate-600">帮助你快速判断反酸一般优先挂什么科。</p>

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
            {["消化内科", "综合内科"].map((dept) => (
              <span key={dept} className="rounded-full border border-cyan-600 bg-cyan-50 px-3 py-1 text-sm text-cyan-900">
                {dept}
              </span>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border p-4 space-y-3">
          <h2 className="text-lg font-semibold">相关问题</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link href="/guides/weitong-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">胃痛挂什么科</Link>
            <Link href="/guides/futong-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">腹痛挂什么科</Link>
            <Link href="/guides/fuxie-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">腹泻挂什么科</Link>
            <Link href="/guides/xiongtong-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">胸痛挂什么科</Link>
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