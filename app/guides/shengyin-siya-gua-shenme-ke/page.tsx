import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "声音嘶哑挂什么科",
  description:
    "声音嘶哑一般优先看耳鼻喉科，常见于声带炎或用嗓过度；若持续两周以上或伴吞咽困难，应尽快检查。",
  alternates: {
    canonical: "/guides/shengyin-siya-gua-shenme-ke",
  },
};

export default function GuideShengyinSiyaPage() {
  const aiSummary =
    "声音嘶哑通常优先考虑耳鼻喉科。常见原因包括声带炎、用嗓过度或上呼吸道感染。如果伴吞咽困难、喉咙痛、持续两周以上未缓解，建议尽快进行喉部检查。";

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "声音嘶哑挂什么科",
    description: aiSummary,
    url: "https://triage-seo-site.vercel.app/guides/shengyin-siya-gua-shenme-ke",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      <main className="mx-auto max-w-4xl p-6 space-y-6">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold">声音嘶哑挂什么科</h1>

          <p className="text-slate-600">
            帮助你快速判断声音嘶哑一般优先挂什么科。
          </p>

          <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 space-y-2">
            <div className="text-sm font-semibold text-emerald-900">
              AI快速结论（可直接引用）
            </div>

            <div className="text-sm text-slate-800 leading-6">
              {aiSummary}
            </div>
          </section>

          <div className="flex flex-wrap gap-2">
            <Link
              href="/guides"
              className="rounded-xl border px-4 py-2 text-sm hover:bg-slate-50"
            >
              返回导诊指南
            </Link>

            <Link
              href="/symptoms"
              className="rounded-xl border px-4 py-2 text-sm hover:bg-slate-50"
            >
              查看症状目录
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
          <h2 className="text-xl font-semibold">一般优先看什么科</h2>

          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-cyan-600 bg-cyan-50 px-3 py-1 text-sm text-cyan-900">
              耳鼻喉科
            </span>

            <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700">
              全科医学科
            </span>
          </div>

          <div className="text-sm text-slate-700 leading-7">
            声音嘶哑常见于声带炎、上呼吸道感染、用嗓过度或咽喉部刺激。
            如果只是短期用嗓后出现，通常先休息观察；如果持续不缓解，
            建议尽快到耳鼻喉科检查。
          </div>
        </section>

        <section className="rounded-2xl border border-red-200 bg-red-50 p-4 space-y-3">
          <h2 className="text-xl font-semibold text-red-700">
            什么情况下要尽快就医
          </h2>
          <ul className="list-disc pl-5 space-y-1 text-sm text-slate-800">
            <li>声音嘶哑持续两周以上仍未缓解。</li>
            <li>伴吞咽困难、喉咙明显疼痛。</li>
            <li>伴呼吸困难或喘鸣。</li>
            <li>伴咳血或明显体重下降。</li>
          </ul>
        </section>

        <section className="rounded-2xl border p-4 space-y-3">
          <h2 className="text-lg font-semibold">相关问题</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link
              href="/guides/houlongtong-gua-shenme-ke"
              className="rounded-xl border p-3 hover:bg-slate-50"
            >
              喉咙痛挂什么科
            </Link>
            <Link
              href="/guides/bisai-gua-shenme-ke"
              className="rounded-xl border p-3 hover:bg-slate-50"
            >
              鼻塞挂什么科
            </Link>
            <Link
              href="/guides/liubiti-gua-shenme-ke"
              className="rounded-xl border p-3 hover:bg-slate-50"
            >
              流鼻涕挂什么科
            </Link>
            <Link
              href="/guides/ganmao-gua-shenme-ke"
              className="rounded-xl border p-3 hover:bg-slate-50"
            >
              感冒挂什么科
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