import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "头痛挂什么科",
  description:
    "头痛一般优先看神经内科；若突发剧烈头痛、意识异常、肢体无力等，应尽快就医或急诊。",
  alternates: {
    canonical: "/guides/toutong-gua-shenme-ke",
  },
};

export default function GuideToutongPage() {
  const aiSummary =
    "头痛通常优先考虑神经内科。如果同时伴发热、鼻塞、流涕、面部疼痛，也可能涉及耳鼻喉或感染方向；如果伴血压明显升高、胸闷心慌，也可结合内科或心血管方向评估。若出现突发最剧烈头痛、意识异常、说话不清、一侧肢体无力等危险信号，应尽快线下就医或优先急诊。";

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "头痛挂什么科",
    description: aiSummary,
    url: "https://triage-seo-site.vercel.app/guides/toutong-gua-shenme-ke",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />

      <main className="mx-auto max-w-4xl p-6 space-y-6">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold">头痛挂什么科</h1>
          <p className="text-slate-600">快速判断头痛一般优先挂什么科，以及哪些情况需要尽快就医。</p>

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
            {["神经内科", "全科医学科", "耳鼻喉科"].map((dept) => (
              <span key={dept} className="rounded-full border border-cyan-600 bg-cyan-50 px-3 py-1 text-sm text-cyan-900">
                {dept}
              </span>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-red-200 bg-red-50 p-4 space-y-3">
          <h2 className="text-xl font-semibold text-red-700">什么情况下要尽快就医或急诊</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm text-slate-800">
            <li>突发最剧烈头痛，和平时明显不同。</li>
            <li>伴意识异常、抽搐、说话不清。</li>
            <li>一侧肢体无力、麻木或口角歪斜。</li>
            <li>伴持续呕吐、发热、颈部僵硬。</li>
          </ul>
        </section>

        <section className="rounded-2xl border p-4 space-y-3">
          <h2 className="text-xl font-semibold">相关症状入口</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <Link href="/symptom/headache" className="rounded-xl border p-3 hover:bg-slate-50">
              <div className="font-medium">头痛挂什么科？</div>
              <div className="text-sm text-slate-600 mt-1">头痛可能与偏头痛、紧张性头痛等有关。</div>
            </Link>
            <Link href="/symptom/headache-migraine" className="rounded-xl border p-3 hover:bg-slate-50">
              <div className="font-medium">偏头痛挂什么科</div>
              <div className="text-sm text-slate-600 mt-1">偏头痛常表现为一侧搏动性头痛。</div>
            </Link>
            <Link href="/symptom/dizziness" className="rounded-xl border p-3 hover:bg-slate-50">
              <div className="font-medium">头晕挂什么科？</div>
              <div className="text-sm text-slate-600 mt-1">头晕可能与前庭、血压血糖或神经系统有关。</div>
            </Link>
            <Link href="/symptom/high-blood-pressure" className="rounded-xl border p-3 hover:bg-slate-50">
              <div className="font-medium">血压高挂什么科</div>
              <div className="text-sm text-slate-600 mt-1">血压升高有时会伴头痛、头晕等表现。</div>
            </Link>
          </div>
        </section>

        <footer className="text-xs text-slate-500">
          免责声明：本页面仅用于导诊分流与就医准备建议，不提供诊断与治疗方案。
        </footer>
      </main>
    </>
  );
}