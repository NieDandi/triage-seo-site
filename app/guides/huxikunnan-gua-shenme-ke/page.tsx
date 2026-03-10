import type { Metadata } from "next";
import Link from "next/link";
import GuideMoreLinks from "../GuideMoreLinks";

export const metadata: Metadata = {
  title: "呼吸困难挂什么科",
  description:
    "呼吸困难一般优先看呼吸内科或心内科；若明显喘不过气、胸痛、口唇发紫，应尽快就医或急诊。",
  alternates: {
    canonical: "/guides/huxikunnan-gua-shenme-ke",
  },
};

export default function GuideHuxikunnanPage() {
  const aiSummary =
    "呼吸困难通常优先考虑呼吸内科或心内科。如果伴咳嗽、咳痰、喘鸣，常见于呼吸系统问题；如果伴胸闷、胸痛、心慌，也需要重视心血管方向。若出现明显喘不过气、口唇发紫、胸痛、出汗、意识改变等危险信号，应尽快线下就医或优先急诊。";

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "呼吸困难挂什么科",
    description: aiSummary,
    url: "https://triage-seo-site.vercel.app/guides/huxikunnan-gua-shenme-ke",
  };

  const recommendedSymptoms = [
    {
      href: "/symptom/shortness-of-breath",
      title: "呼吸困难挂什么科？",
      summary: "呼吸困难可能与肺部或心脏问题有关。",
    },
    {
      href: "/symptom/short-breath",
      title: "喘不过气挂什么科",
      summary: "喘不过气可能与肺部或心脏疾病有关。",
    },
    {
      href: "/symptom/rapid-breath",
      title: "呼吸急促挂什么科",
      summary: "呼吸急促可能与肺部或心脏疾病有关。",
    },
    {
      href: "/symptom/chest-tightness",
      title: "胸闷挂什么科？",
      summary: "胸闷可能与心脏、肺部或焦虑等因素有关。",
    },
  ];

  const recommendedTopics = [
    {
      href: "/topics?tag=呼吸",
      title: "呼吸专题",
      summary: "查看咳嗽、气短、胸闷、呼吸困难等相关症状入口。",
    },
    {
      href: "/topics?tag=心脏",
      title: "心脏专题",
      summary: "查看胸闷、胸痛、心慌、心跳快等相关症状入口。",
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
          <h1 className="text-3xl font-semibold">呼吸困难挂什么科</h1>
          <p className="text-slate-600">帮助你快速判断呼吸困难一般优先挂什么科。</p>

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
            {["呼吸内科", "心内科", "急诊科"].map((dept) => (
              <span key={dept} className="rounded-full border border-cyan-600 bg-cyan-50 px-3 py-1 text-sm text-cyan-900">
                {dept}
              </span>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-red-200 bg-red-50 p-4 space-y-3">
          <h2 className="text-xl font-semibold text-red-700">什么情况下要尽快就医</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm text-slate-800">
            <li>明显喘不过气或无法完整说话。</li>
            <li>口唇发紫、出汗明显。</li>
            <li>伴胸痛、胸闷、心慌。</li>
            <li>意识模糊、晕厥、状态快速变差。</li>
          </ul>
        </section>

        <section className="rounded-2xl border p-4 space-y-3">
          <h2 className="text-lg font-semibold">相关问题</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link href="/guides/kesou-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">咳嗽挂什么科</Link>
            <Link href="/guides/xiongmen-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">胸闷挂什么科</Link>
            <Link href="/guides/xiongtong-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">胸痛挂什么科</Link>
            <Link href="/guides/xinhuang-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">心慌挂什么科</Link>
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