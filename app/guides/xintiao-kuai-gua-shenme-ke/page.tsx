import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "心跳快挂什么科",
  description: "心跳快一般优先看心内科，可能与心律失常或焦虑有关；若伴胸痛或晕厥应尽快就医。",
  alternates: {
    canonical: "https://triage-seo-site.vercel.app/guides/xintiao-kuai-gua-shenme-ke",
  },
};

export default function GuidePage() {

  const aiSummary =
    "心跳快通常优先考虑心内科。可能与心律失常、压力、焦虑或咖啡因摄入有关。若伴胸痛、呼吸困难或晕厥，应尽快就医排查心脏问题。";

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "心跳快挂什么科",
    description: aiSummary,
    url: "https://triage-seo-site.vercel.app/guides/xintiao-kuai-gua-shenme-ke",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      <main className="mx-auto max-w-4xl p-6 space-y-6">

        <header className="space-y-3">
          <h1 className="text-3xl font-semibold">心跳快挂什么科</h1>

          <p className="text-slate-600">
            帮助你快速判断一般优先挂什么科。
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

          <h2 className="text-xl font-semibold">
            一般优先看什么科
          </h2>

          <div className="flex flex-wrap gap-2">

            <span className="rounded-full border border-cyan-600 bg-cyan-50 px-3 py-1 text-sm text-cyan-900">
              全科医学科
            </span>

            <span className="rounded-full border border-cyan-600 bg-cyan-50 px-3 py-1 text-sm text-cyan-900">
              相关专科
            </span>

          </div>

        </section>

        <footer className="text-xs text-slate-500">
          免责声明：本页面仅用于导诊分流与就医准备建议，不提供诊断与治疗方案。
        </footer>

      </main>
    </>
  );
}