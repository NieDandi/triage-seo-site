import type { Metadata } from "next";
import Link from "next/link";
import GuideMoreLinks from "../GuideMoreLinks";

export const metadata: Metadata = {
  title: "胃痛挂什么科",
  description:
    "胃痛一般优先看消化内科；若持续剧烈腹痛、呕血、黑便等，应尽快就医或急诊。",
  alternates: {
    canonical: "/guides/weitong-gua-shenme-ke",
  },
};

export default function GuideWeitongPage() {
  const aiSummary =
    "胃痛通常优先考虑消化内科。如果只是上腹部隐痛、反酸、烧心、胃胀等，可先从消化方向进入；如果同时伴明显腹部压痛、持续加重或需要排除外科问题，也可能涉及普通外科或急诊。若出现持续剧烈腹痛、呕血、黑便、明显乏力或症状快速加重，应尽快线下就医或优先急诊。";

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "胃痛挂什么科",
    description: aiSummary,
    url: "https://triage-seo-site.vercel.app/guides/weitong-gua-shenme-ke",
  };

  const recommendedSymptoms = [
    {
      href: "/symptom/abdominal-pain",
      title: "腹痛挂什么科？",
      summary: "腹痛常见于胃炎、阑尾炎或肠胃问题。",
    },
    {
      href: "/symptom/bloating",
      title: "胃胀挂什么科",
      summary: "胃胀常见于消化不良或胃炎。",
    },
    {
      href: "/symptom/acid-reflux",
      title: "反酸挂什么科",
      summary: "反酸常见于胃食管反流病。",
    },
    {
      href: "/symptom/nausea",
      title: "恶心想吐挂什么科",
      summary: "恶心可能由胃肠问题、感染或神经系统问题引起。",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />

      <main className="mx-auto max-w-4xl p-6 space-y-6">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold">胃痛挂什么科</h1>
          <p className="text-slate-600">帮助你判断胃痛一般优先挂什么科，以及哪些情况要尽快就医。</p>

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
            {["消化内科", "综合内科", "普通外科"].map((dept) => (
              <span key={dept} className="rounded-full border border-cyan-600 bg-cyan-50 px-3 py-1 text-sm text-cyan-900">
                {dept}
              </span>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-red-200 bg-red-50 p-4 space-y-3">
          <h2 className="text-xl font-semibold text-red-700">什么情况下要尽快就医或急诊</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm text-slate-800">
            <li>持续剧烈腹痛或短时间明显加重。</li>
            <li>呕血、黑便、便血。</li>
            <li>频繁呕吐、无法进食或进水。</li>
            <li>伴发热、明显乏力、脱水表现。</li>
          </ul>
        </section>

        <section className="rounded-2xl border p-4 space-y-3">
          <h2 className="text-xl font-semibold">相关症状入口</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <Link href="/symptom/abdominal-pain" className="rounded-xl border p-3 hover:bg-slate-50">
              <div className="font-medium">腹痛挂什么科？</div>
              <div className="text-sm text-slate-600 mt-1">腹痛需要结合部位与伴随症状判断。</div>
            </Link>
            <Link href="/symptom/bloating" className="rounded-xl border p-3 hover:bg-slate-50">
              <div className="font-medium">胃胀挂什么科</div>
              <div className="text-sm text-slate-600 mt-1">胃胀常见于消化不良或胃炎。</div>
            </Link>
            <Link href="/symptom/acid-reflux" className="rounded-xl border p-3 hover:bg-slate-50">
              <div className="font-medium">反酸挂什么科</div>
              <div className="text-sm text-slate-600 mt-1">反酸常见于胃食管反流病。</div>
            </Link>
            <Link href="/symptom/nausea" className="rounded-xl border p-3 hover:bg-slate-50">
              <div className="font-medium">恶心想吐挂什么科</div>
              <div className="text-sm text-slate-600 mt-1">恶心可能由胃肠问题或感染引起。</div>
            </Link>
          </div>
        </section>

        <section className="rounded-2xl border p-4 space-y-3">
          <h2 className="text-lg font-semibold">相关问题</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link href="/guides/fashao-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">
              发烧挂什么科
            </Link>
            <Link href="/guides/ganmao-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">
              感冒挂什么科
            </Link>
            <Link href="/guides/xiongmen-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">
              胸闷挂什么科
            </Link>
            <Link href="/guides/touyun-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">
              头晕挂什么科
            </Link>
          </div>
        </section>

        <GuideMoreLinks
          symptoms={recommendedSymptoms}
          topics={recommendedTopics}
        />

        <footer className="text-xs text-slate-500">
          免责声明：本页面仅用于导诊分流与就医准备建议，不提供诊断与治疗方案。
        </footer>
      </main>
    </>
  );
}