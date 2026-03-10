import type { Metadata } from "next";
import Link from "next/link";
import GuideMoreLinks from "../GuideMoreLinks";

export const metadata: Metadata = {
  title: "头晕挂什么科",
  description:
    "头晕一般优先看神经内科，也可能涉及耳鼻喉科、心内科；若伴说话不清、肢体无力等，应尽快就医或急诊。",
  alternates: {
    canonical: "/guides/touyun-gua-shenme-ke",
  },
};

export default function GuideTouyunPage() {
  const aiSummary =
    "头晕通常优先考虑神经内科，也可能涉及耳鼻喉科或心内科。如果表现为旋转感、眩晕、耳鸣，常见于前庭或耳部问题；如果伴心慌、低血压、活动后不适，也可结合心血管方向评估。若伴说话不清、一侧肢体无力、意识异常等危险信号，应尽快线下就医或优先急诊。";

  const recommendedSymptoms = [
    {
      href: "/symptom/dizziness",
      title: "头晕挂什么科？",
      summary: "头晕可能与低血压、贫血、耳石症或神经系统问题有关。",
    },
    {
      href: "/symptom/ear-ringing",
      title: "耳鸣挂什么科",
      summary: "耳鸣常见于听力损伤、耳部疾病或压力。",
    },
    {
      href: "/symptom/palpitations",
      title: "心慌挂什么科？",
      summary: "心慌可能与心律失常、焦虑或其他心血管问题有关。",
    },
    {
      href: "/symptom/blurred-vision",
      title: "视力模糊挂什么科",
      summary: "视力模糊可能由眼部疾病或神经问题引起。",
    },
  ];

  const recommendedTopics = [
    {
      href: "/topics?tag=神经",
      title: "神经专题",
      summary: "查看头痛、头晕、手麻、记忆力下降等相关症状入口。",
    },
    {
      href: "/topics?tag=耳鼻喉",
      title: "耳鼻喉专题",
      summary: "查看耳鸣、听力下降、鼻塞、咽痛等相关症状入口。",
    },
  ];

  return (
    <main className="mx-auto max-w-4xl p-6 space-y-6">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold">头晕挂什么科</h1>
        <p className="text-slate-600">快速判断头晕一般优先挂什么科，以及哪些情况需要尽快就医。</p>

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
          {["神经内科", "耳鼻喉科", "心内科"].map((dept) => (
            <span key={dept} className="rounded-full border border-cyan-600 bg-cyan-50 px-3 py-1 text-sm text-cyan-900">
              {dept}
            </span>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-red-200 bg-red-50 p-4 space-y-3">
        <h2 className="text-xl font-semibold text-red-700">什么情况下要尽快就医或急诊</h2>
        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-800">
          <li>伴说话不清、一侧肢体无力、口角歪斜。</li>
          <li>意识异常、抽搐、明显站不稳。</li>
          <li>突发最严重头晕或伴剧烈头痛。</li>
          <li>伴胸痛、呼吸困难、晕厥。</li>
        </ul>
      </section>

      <section className="rounded-2xl border p-4 space-y-3">
        <h2 className="text-xl font-semibold">相关症状入口</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <Link href="/symptom/dizziness" className="rounded-xl border p-3 hover:bg-slate-50">
            <div className="font-medium">头晕挂什么科？</div>
            <div className="text-sm text-slate-600 mt-1">头晕可能与前庭、血压血糖或神经系统有关。</div>
          </Link>
          <Link href="/symptom/ear-ringing" className="rounded-xl border p-3 hover:bg-slate-50">
            <div className="font-medium">耳鸣挂什么科</div>
            <div className="text-sm text-slate-600 mt-1">耳鸣可能与耳部或神经系统相关。</div>
          </Link>
          <Link href="/symptom/palpitations" className="rounded-xl border p-3 hover:bg-slate-50">
            <div className="font-medium">心慌挂什么科？</div>
            <div className="text-sm text-slate-600 mt-1">心慌可能与心律、焦虑、甲状腺等相关。</div>
          </Link>
          <Link href="/symptom/blurred-vision" className="rounded-xl border p-3 hover:bg-slate-50">
            <div className="font-medium">视力模糊挂什么科</div>
            <div className="text-sm text-slate-600 mt-1">视力模糊可能与眼部疾病或神经问题有关。</div>
          </Link>
        </div>
      </section>

      <section className="rounded-2xl border p-4 space-y-3">
        <h2 className="text-lg font-semibold">相关问题</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Link href="/guides/toutong-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">
            头痛挂什么科
          </Link>
          <Link href="/guides/xiongmen-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">
            胸闷挂什么科
          </Link>
          <Link href="/guides/shimian-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">
            失眠挂什么科
          </Link>
          <Link href="/guides/kesou-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">
            咳嗽挂什么科
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
  );
}