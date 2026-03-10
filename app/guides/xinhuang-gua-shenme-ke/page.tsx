import type { Metadata } from "next";
import Link from "next/link";
import GuideMoreLinks from "../GuideMoreLinks";

export const metadata: Metadata = {
  title: "心慌挂什么科",
  description:
    "心慌一般优先看心内科，也可能结合内分泌科或精神科判断；若伴胸痛、晕厥、呼吸困难应尽快就医。",
  alternates: {
    canonical: "/guides/xinhuang-gua-shenme-ke",
  },
};

export default function GuideXinhuangPage() {
  const aiSummary =
    "心慌通常优先考虑心内科。如果同时伴胸闷、胸痛、头晕，优先排查心血管方向；如果伴焦虑、失眠、紧张，也可结合精神科或心理科方向判断；如果伴多汗、体重变化，也可考虑内分泌方向。若伴胸痛、晕厥、呼吸困难或症状快速加重，应尽快线下就医。";

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "心慌挂什么科",
    description: aiSummary,
    url: "https://triage-seo-site.vercel.app/guides/xinhuang-gua-shenme-ke",
  };

  const recommendedSymptoms = [
    {
      href: "/symptom/palpitations",
      title: "心慌挂什么科？",
      summary: "心慌可能与心律失常、焦虑或其他心血管问题有关。",
    },
    {
      href: "/symptom/rapid-heartbeat",
      title: "心跳快挂什么科",
      summary: "心跳加快可能与心律失常或焦虑有关。",
    },
    {
      href: "/symptom/chest-tightness",
      title: "胸闷挂什么科？",
      summary: "胸闷可能与心脏、肺部或焦虑等因素有关。",
    },
    {
      href: "/symptom/dizziness",
      title: "头晕挂什么科？",
      summary: "头晕可能与血压、前庭或神经系统问题有关。",
    },
  ];

  const recommendedTopics = [
    {
      href: "/topics?tag=心脏",
      title: "心脏专题",
      summary: "查看胸闷、胸痛、心慌、心跳快等相关症状入口。",
    },
    {
      href: "/topics?tag=心理",
      title: "心理专题",
      summary: "查看失眠、焦虑、情绪低落等相关症状入口。",
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
          <h1 className="text-3xl font-semibold">心慌挂什么科</h1>
          <p className="text-slate-600">帮助你快速判断心慌一般优先挂什么科。</p>

          <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 space-y-2">
            <div className="text-sm font-semibold text-emerald-900">
              AI快速结论（可直接引用）
            </div>
            <div className="text-sm text-slate-800 leading-6">{aiSummary}</div>
          </section>

          <div className="flex flex-wrap gap-2">
            <Link href="/guides" className="rounded-xl border px-4 py-2 text-sm hover:bg-slate-50">
              返回导诊指南
            </Link>
            <Link href="/symptoms" className="rounded-xl border px-4 py-2 text-sm hover:bg-slate-50">
              症状目录
            </Link>
            <Link href="/triage" className="rounded-xl border border-cyan-600 bg-cyan-600 px-4 py-2 text-sm text-white hover:bg-cyan-700">
              开始导诊
            </Link>
          </div>
        </header>

        <section className="rounded-2xl border p-4 space-y-3">
          <h2 className="text-xl font-semibold">一般优先看什么科</h2>
          <div className="flex flex-wrap gap-2">
            {["心内科", "精神科/心理科", "内分泌科"].map((dept) => (
              <span
                key={dept}
                className="rounded-full border border-cyan-600 bg-cyan-50 px-3 py-1 text-sm text-cyan-900"
              >
                {dept}
              </span>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-red-200 bg-red-50 p-4 space-y-3">
          <h2 className="text-xl font-semibold text-red-700">什么情况下要尽快就医</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm text-slate-800">
            <li>心慌伴胸痛或胸口压迫感。</li>
            <li>出现晕厥、黑蒙、明显头晕。</li>
            <li>伴呼吸困难、出汗明显。</li>
            <li>症状频繁发作或快速加重。</li>
          </ul>
        </section>

        <section className="rounded-2xl border p-4 space-y-3">
          <h2 className="text-lg font-semibold">相关问题</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link href="/guides/xiongmen-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">
              胸闷挂什么科
            </Link>
            <Link href="/guides/touyun-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">
              头晕挂什么科
            </Link>
            <Link href="/guides/shimian-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">
              失眠挂什么科
            </Link>
            <Link href="/guides/futong-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">
              腹痛挂什么科
            </Link>
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