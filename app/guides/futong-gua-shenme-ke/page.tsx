import type { Metadata } from "next";
import Link from "next/link";
import GuideMoreLinks from "../GuideMoreLinks";

export const metadata: Metadata = {
  title: "腹痛挂什么科",
  description:
    "腹痛一般优先看消化内科，也可能涉及普通外科；若剧烈持续腹痛、呕血、黑便等应尽快就医。",
  alternates: {
    canonical: "/guides/futong-gua-shenme-ke",
  },
};

export default function GuideFutongPage() {
  const aiSummary =
    "腹痛通常优先考虑消化内科。如果疼痛集中在右下腹、持续加重或伴明显压痛，也可能涉及普通外科方向。若伴剧烈持续腹痛、呕血、黑便、频繁呕吐、发热明显或症状快速加重，应尽快线下就医。";

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "腹痛挂什么科",
    description: aiSummary,
    url: "https://triage-seo-site.vercel.app/guides/futong-gua-shenme-ke",
  };

  const recommendedSymptoms = [
    {
      href: "/symptom/abdominal-pain",
      title: "腹痛挂什么科？",
      summary: "腹痛常见于胃炎、阑尾炎或肠胃问题。",
    },
    {
      href: "/symptom/lower-abdominal-pain",
      title: "小腹痛挂什么科",
      summary: "小腹痛可能与肠道或泌尿系统问题有关。",
    },
    {
      href: "/symptom/right-lower-abdomen",
      title: "右下腹痛挂什么科",
      summary: "右下腹痛可能与阑尾炎有关。",
    },
    {
      href: "/symptom/left-lower-abdomen",
      title: "左下腹痛挂什么科",
      summary: "左下腹痛可能与肠道疾病有关。",
    },
  ];

  const recommendedTopics = [
    {
      href: "/topics?tag=消化",
      title: "消化专题",
      summary: "查看胃痛、腹胀、反酸、腹泻、恶心等相关症状入口。",
    },
    {
      href: "/topics?tag=泌尿",
      title: "泌尿专题",
      summary: "查看尿频、尿痛、血尿、小腹痛等相关症状入口。",
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
          <h1 className="text-3xl font-semibold">腹痛挂什么科</h1>
          <p className="text-slate-600">帮助你快速判断腹痛一般优先挂什么科。</p>

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
            {["消化内科", "普通外科", "综合内科"].map((dept) => (
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
            <li>剧烈持续腹痛。</li>
            <li>右下腹疼痛明显加重。</li>
            <li>呕血、黑便、便血。</li>
            <li>伴高热、频繁呕吐或明显乏力。</li>
          </ul>
        </section>

        <section className="rounded-2xl border p-4 space-y-3">
          <h2 className="text-lg font-semibold">相关问题</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link href="/guides/weitong-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">
              胃痛挂什么科
            </Link>
            <Link href="/guides/fashao-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">
              发烧挂什么科
            </Link>
            <Link href="/guides/xinhuang-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">
              心慌挂什么科
            </Link>
            <Link href="/guides/xiongmen-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">
              胸闷挂什么科
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