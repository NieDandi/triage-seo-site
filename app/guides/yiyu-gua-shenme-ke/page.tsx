import type { Metadata } from "next";
import Link from "next/link";
import GuideMoreLinks from "../GuideMoreLinks";

export const metadata: Metadata = {
    title: "抑郁挂什么科",
    description:
        "抑郁一般优先看精神科或心理科；若伴明显自伤想法、严重失眠、无法正常生活，应尽快求助。",
    alternates: {
        canonical: "/guides/yiyu-gua-shenme-ke",
    },
};

export default function GuideYiyuPage() {
    const aiSummary =
        "抑郁相关问题通常优先考虑精神科或心理科。如果表现为持续情绪低落、兴趣下降、睡眠问题、明显乏力或自我评价降低，建议尽快专业评估。若伴明显自伤想法、严重失眠、无法正常生活或进食，应尽快线下求助。";

    const webPageJsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "抑郁挂什么科",
        description: aiSummary,
        url: "https://triage-seo-site.vercel.app/guides/yiyu-gua-shenme-ke",
    };

    const recommendedSymptoms = [
        {
            href: "/symptom/depression",
            title: "抑郁挂什么科？",
            summary: "抑郁可能与情绪障碍有关。",
        },
        {
            href: "/symptom/anxiety",
            title: "焦虑挂什么科？",
            summary: "焦虑可能与心理压力或情绪问题有关。",
        },
        {
            href: "/symptom/insomnia",
            title: "失眠挂什么科？",
            summary: "失眠可能与压力、焦虑或生活习惯有关。",
        },
        {
            href: "/symptom/memory-loss",
            title: "记忆力下降挂什么科",
            summary: "记忆力下降可能与压力或神经系统问题有关。",
        },
    ];

    const recommendedTopics = [
        {
            href: "/topics?tag=心理",
            title: "心理专题",
            summary: "查看失眠、焦虑、情绪低落等相关症状入口。",
        },
        {
            href: "/topics?tag=神经",
            title: "神经专题",
            summary: "若伴注意力下降、记忆差，也可查看神经相关入口。",
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
                    <h1 className="text-3xl font-semibold">抑郁挂什么科</h1>
                    <p className="text-slate-600">帮助你快速判断情绪低落或抑郁相关问题一般优先挂什么科。</p>

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
                        {["精神科/心理科"].map((dept) => (
                            <span key={dept} className="rounded-full border border-cyan-600 bg-cyan-50 px-3 py-1 text-sm text-cyan-900">
                                {dept}
                            </span>
                        ))}
                    </div>
                </section>

                <section className="rounded-2xl border p-4 space-y-3">
                    <h2 className="text-lg font-semibold">相关问题</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <Link href="/guides/jiaolv-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">焦虑挂什么科</Link>
                        <Link href="/guides/shimian-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">失眠挂什么科</Link>
                        <Link href="/guides/xinhuang-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">心慌挂什么科</Link>
                        <Link href="/guides/touyun-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">头晕挂什么科</Link>
                    </div>
                </section>

                <GuideMoreLinks symptoms={recommendedSymptoms} topics={recommendedTopics} />

                <section className="rounded-2xl border p-4 space-y-3">
                    <h2 className="text-lg font-semibold">推荐专题入口</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <Link
                            href="/topics?tag=心理"
                            className="rounded-xl border p-3 hover:bg-slate-50"
                        >
                            <div className="font-medium">心理专题</div>
                            <div className="text-sm text-slate-600 mt-1">
                                查看焦虑、失眠、情绪低落等相关症状入口。
                            </div>
                        </Link>

                        <Link
                            href="/topics?tag=神经"
                            className="rounded-xl border p-3 hover:bg-slate-50"
                        >
                            <div className="font-medium">神经专题</div>
                            <div className="text-sm text-slate-600 mt-1">
                                若伴注意力下降、记忆差，也可查看神经相关症状入口。
                            </div>
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