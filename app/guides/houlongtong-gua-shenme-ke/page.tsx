import type { Metadata } from "next";
import Link from "next/link";
import GuideMoreLinks from "../GuideMoreLinks";

export const metadata: Metadata = {
  title: "喉咙痛挂什么科",
  description:
    "喉咙痛一般优先看耳鼻喉科，也可结合呼吸内科判断；若伴吞咽困难、呼吸困难等应尽快就医。",
  alternates: {
    canonical: "/guides/houlongtong-gua-shenme-ke",
  },
};

export default function GuideHoulongtongPage() {
  const aiSummary =
    "喉咙痛通常优先考虑耳鼻喉科。如果同时伴咳嗽、发热、流鼻涕，也可结合呼吸内科方向判断；如果以局部疼痛、吞咽痛、声音嘶哑为主，更偏向耳鼻喉方向。若伴吞咽困难、呼吸困难、高热不退或症状快速加重，应尽快线下就医。";

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "喉咙痛挂什么科",
    description: aiSummary,
    url: "https://triage-seo-site.vercel.app/guides/houlongtong-gua-shenme-ke",
  };

  const recommendedSymptoms = [
    {
      href: "/symptom/sore-throat",
      title: "喉咙痛挂什么科？",
      summary: "喉咙痛常见于咽炎、扁桃体炎或上呼吸道感染。",
    },
    {
      href: "/symptom/itchy-throat",
      title: "喉咙痒挂什么科",
      summary: "喉咙痒常见于过敏或咽炎。",
    },
    {
      href: "/symptom/voice-hoarseness",
      title: "声音嘶哑挂什么科",
      summary: "声音嘶哑可能与声带炎症或过度用嗓有关。",
    },
    {
      href: "/symptom/throat-foreign-body",
      title: "喉咙异物感挂什么科",
      summary: "喉咙异物感可能与咽炎或胃食管反流有关。",
    },
  ];

  const recommendedTopics = [
    {
      href: "/topics?tag=耳鼻喉",
      title: "耳鼻喉专题",
      summary: "查看鼻塞、流鼻涕、喉咙痛、耳鸣等相关症状入口。",
    },
    {
      href: "/topics?tag=呼吸",
      title: "呼吸专题",
      summary: "查看咳嗽、气短、胸闷、呼吸困难等相关症状入口。",
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
          <h1 className="text-3xl font-semibold">喉咙痛挂什么科</h1>
          <p className="text-slate-600">帮助你快速判断喉咙痛一般优先挂什么科。</p>

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
            {["耳鼻喉科", "呼吸内科", "全科医学科"].map((dept) => (
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
            <li>吞咽困难明显。</li>
            <li>呼吸困难或喘不上气。</li>
            <li>高热不退、全身状态差。</li>
            <li>症状短时间快速加重。</li>
          </ul>
        </section>

        <section className="rounded-2xl border p-4 space-y-3">
          <h2 className="text-lg font-semibold">相关问题</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link href="/guides/bisai-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">
              鼻塞挂什么科
            </Link>
            <Link href="/guides/ganmao-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">
              感冒挂什么科
            </Link>
            <Link href="/guides/kesou-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">
              咳嗽挂什么科
            </Link>
            <Link href="/guides/fashao-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">
              发烧挂什么科
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