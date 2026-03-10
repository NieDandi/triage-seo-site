import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "胸闷挂什么科",
  description:
    "胸闷一般优先看心内科或呼吸内科；若伴胸痛、呼吸困难、出汗、晕厥等，应尽快就医或急诊。",
  alternates: {
    canonical: "/guides/xiongmen-gua-shenme-ke",
  },
};

export default function GuideXiongmenPage() {
  const aiSummary =
    "胸闷通常优先考虑心内科或呼吸内科。如果同时伴心慌、胸口压迫感、活动后加重，应更重视心血管方向；如果伴咳嗽、喘鸣、气短等，也可能偏向呼吸系统。若伴胸痛、呼吸困难、出汗、晕厥或濒死感，应尽快线下就医或优先急诊。";

  return (
    <main className="mx-auto max-w-4xl p-6 space-y-6">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold">胸闷挂什么科</h1>
        <p className="text-slate-600">帮助你快速判断胸闷一般优先挂什么科。</p>

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
          {["心内科", "呼吸内科", "全科医学科"].map((dept) => (
            <span key={dept} className="rounded-full border border-cyan-600 bg-cyan-50 px-3 py-1 text-sm text-cyan-900">
              {dept}
            </span>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-red-200 bg-red-50 p-4 space-y-3">
        <h2 className="text-xl font-semibold text-red-700">什么情况下要尽快就医或急诊</h2>
        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-800">
          <li>胸闷伴胸痛或压榨感。</li>
          <li>明显呼吸困难、气短、喘不过气。</li>
          <li>出汗、头晕、晕厥。</li>
          <li>症状活动后明显加重，或短时间快速恶化。</li>
        </ul>
      </section>

      <section className="rounded-2xl border p-4 space-y-3">
        <h2 className="text-xl font-semibold">相关症状入口</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <Link href="/symptom/chest-tightness" className="rounded-xl border p-3 hover:bg-slate-50">
            <div className="font-medium">胸闷挂什么科？</div>
            <div className="text-sm text-slate-600 mt-1">胸闷可能与心肺、焦虑等相关。</div>
          </Link>
          <Link href="/symptom/chest-pain" className="rounded-xl border p-3 hover:bg-slate-50">
            <div className="font-medium">胸痛挂什么科</div>
            <div className="text-sm text-slate-600 mt-1">胸痛可能与心脏、肺部或肌肉有关。</div>
          </Link>
          <Link href="/symptom/shortness-of-breath" className="rounded-xl border p-3 hover:bg-slate-50">
            <div className="font-medium">呼吸困难挂什么科？</div>
            <div className="text-sm text-slate-600 mt-1">呼吸困难可能涉及呼吸或心血管问题。</div>
          </Link>
          <Link href="/symptom/palpitations" className="rounded-xl border p-3 hover:bg-slate-50">
            <div className="font-medium">心慌挂什么科？</div>
            <div className="text-sm text-slate-600 mt-1">心慌可能与心律、焦虑、甲状腺等相关。</div>
          </Link>
        </div>
      </section>

      <footer className="text-xs text-slate-500">
        免责声明：本页面仅用于导诊分流与就医准备建议，不提供诊断与治疗方案。
      </footer>
    </main>
  );
}