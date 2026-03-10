import type { Metadata } from "next";
import Link from "next/link";
import GuideMoreLinks from "../GuideMoreLinks";

export const metadata: Metadata = {
  title: "偏头痛挂什么科",
  description:
    "偏头痛一般优先看神经内科；若伴意识异常、肢体无力、最剧烈头痛等，应尽快就医。",
  alternates: {
    canonical: "/guides/piantoutong-gua-shenme-ke",
  },
};

export default function GuidePiantoutongPage() {
  const aiSummary =
    "偏头痛通常优先考虑神经内科。如果表现为反复发作、一侧头部搏动性疼痛、恶心、畏光等，更符合偏头痛常见表现。若出现突发最剧烈头痛、意识异常、肢体无力、说话不清或症状明显不同于以往，应尽快线下就医。";

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "偏头痛挂什么科",
    description: aiSummary,
    url: "https://triage-seo-site.vercel.app/guides/piantoutong-gua-shenme-ke",
  };

  const recommendedSymptoms = [
    {
      href: "/symptom/headache",
      title: "头痛挂什么科？",
      summary: "头痛可能与偏头痛、紧张性头痛或感染有关。",
    },
    {
      href: "/symptom/light-sensitive",
      title: "畏光挂什么科",
      summary: "畏光可能与眼部炎症、角膜问题或偏头痛有关。",
    },
    {
      href: "/symptom/dizziness",
      title: "头晕挂什么科？",
      summary: "头晕可能与前庭、血压血糖或神经系统有关。",
    },
    {
      href: "/symptom/nausea",
      title: "恶心想吐挂什么科",
      summary: "恶心可能由胃肠问题、感染或神经系统问题引起。",
    },
  ];

  const recommendedTopics = [
    {
      href: "/topics?tag=神经",
      title: "神经专题",
      summary: "查看头痛、头晕、手麻、记忆力下降等相关症状入口。",
    },
    {
      href: "/topics?tag=眼科",
      title: "眼科专题",
      summary: "若伴畏光、眼部不适，也可查看眼科相关症状入口。",
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
          <h1 className="text-3xl font-semibold">偏头痛挂什么科</h1>
          <p className="text-slate-600">帮助你快速判断偏头痛一般优先挂什么科。</p>

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
            {["神经内科", "全科医学科"].map((dept) => (
              <span key={dept} className="rounded-full border border-cyan-600 bg-cyan-50 px-3 py-1 text-sm text-cyan-900">
                {dept}
              </span>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border p-4 space-y-3">
          <h2 className="text-lg font-semibold">相关问题</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link href="/guides/toutong-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">头痛挂什么科</Link>
            <Link href="/guides/touyun-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">头晕挂什么科</Link>
            <Link href="/guides/shimian-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">失眠挂什么科</Link>
            <Link href="/guides/jiaolv-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">焦虑挂什么科</Link>
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