import type { Metadata } from "next";
import Link from "next/link";
import GuideMoreLinks from "../GuideMoreLinks";

export const metadata: Metadata = {
    title: "失眠挂什么科",
    description:
        "失眠一般优先看精神科、心理科或神经内科；若伴明显情绪低落、自伤想法等，应尽快线下求助。",
    alternates: {
        canonical: "/guides/shimian-gua-shenme-ke",
    },
};

export default function GuideShimianPage() {
    const aiSummary =
        "失眠通常优先考虑精神科、心理科或神经内科。如果以入睡困难、早醒、夜间频繁醒来、焦虑紧张为主，常见于情绪和睡眠节律问题；如果同时伴头痛、手抖、神经系统不适，也可结合神经方向评估。若伴明显情绪低落、自伤想法、严重影响基本生活，应尽快线下求助。";

    const recommendedSymptoms = [
        {
            href: "/symptom/insomnia",
            title: "失眠挂什么科？",
            summary: "失眠可能与压力、焦虑或生活习惯有关。",
        },
        {
            href: "/symptom/anxiety",
            title: "焦虑挂什么科？",
            summary: "焦虑可能与心理压力或情绪问题有关。",
        },
        {
            href: "/symptom/depression",
            title: "抑郁挂什么科？",
            summary: "抑郁可能与情绪障碍有关。",
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
            summary: "查看头痛、头晕、记忆力下降等相关症状入口。",
        },
    ];

    return (
        <main className="mx-auto max-w-4xl p-6 space-y-6">
            <header className="space-y-3">
                <h1 className="text-3xl font-semibold">失眠挂什么科</h1>
                <p className="text-slate-600">快速判断失眠一般优先挂什么科，以及什么情况下需要尽快求助。</p>

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
                    {["精神科/心理科", "神经内科", "睡眠门诊"].map((dept) => (
                        <span key={dept} className="rounded-full border border-cyan-600 bg-cyan-50 px-3 py-1 text-sm text-cyan-900">
                            {dept}
                        </span>
                    ))}
                </div>
            </section>

            <section className="rounded-2xl border border-red-200 bg-red-50 p-4 space-y-3">
                <h2 className="text-xl font-semibold text-red-700">什么情况下要尽快线下求助</h2>
                <ul className="list-disc pl-5 space-y-1 text-sm text-slate-800">
                    <li>连续多日严重失眠，已明显影响基本生活。</li>
                    <li>伴明显焦虑、惊恐、情绪低落。</li>
                    <li>出现自伤、自杀相关想法。</li>
                    <li>伴胸闷、心慌、呼吸困难等明显躯体症状。</li>
                </ul>
            </section>

            <section className="rounded-2xl border p-4 space-y-3">
                <h2 className="text-xl font-semibold">相关症状入口</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <Link href="/symptom/insomnia" className="rounded-xl border p-3 hover:bg-slate-50">
                        <div className="font-medium">失眠挂什么科？</div>
                        <div className="text-sm text-slate-600 mt-1">睡眠问题可能与压力、作息或身心因素相关。</div>
                    </Link>
                    <Link href="/symptom/anxiety" className="rounded-xl border p-3 hover:bg-slate-50">
                        <div className="font-medium">焦虑挂什么科？</div>
                        <div className="text-sm text-slate-600 mt-1">焦虑可能伴随心慌胸闷等躯体感受。</div>
                    </Link>
                    <Link href="/symptom/depression" className="rounded-xl border p-3 hover:bg-slate-50">
                        <div className="font-medium">抑郁挂什么科？</div>
                        <div className="text-sm text-slate-600 mt-1">情绪问题需要专业评估与支持。</div>
                    </Link>
                    <Link href="/symptom/memory-loss" className="rounded-xl border p-3 hover:bg-slate-50">
                        <div className="font-medium">记忆力下降挂什么科</div>
                        <div className="text-sm text-slate-600 mt-1">记忆力下降可能与压力或神经系统问题有关。</div>
                    </Link>
                </div>
            </section>

            <section className="rounded-2xl border p-4 space-y-3">
                <h2 className="text-lg font-semibold">相关问题</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Link href="/guides/toutong-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">
                        头痛挂什么科
                    </Link>
                    <Link href="/guides/touyun-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">
                        头晕挂什么科
                    </Link>
                    <Link href="/guides/ganmao-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">
                        感冒挂什么科
                    </Link>
                    <Link href="/guides/xiongmen-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">
                        胸闷挂什么科
                    </Link>
                </div>
            </section>

            <GuideMoreLinks
                symptoms={recommendedSymptoms}
                topics={recommendedTopics}
            />

            <section className="rounded-2xl border p-4 space-y-3">
                <h2 className="text-lg font-semibold">推荐专题入口</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Link
                        href="/topics?tag=心理"
                        className="rounded-xl border p-3 hover:bg-slate-50"
                    >
                        <div className="font-medium">心理专题</div>
                        <div className="text-sm text-slate-600 mt-1">
                            查看失眠、焦虑、情绪低落等相关症状入口。
                        </div>
                    </Link>

                    <Link
                        href="/topics?tag=神经"
                        className="rounded-xl border p-3 hover:bg-slate-50"
                    >
                        <div className="font-medium">神经专题</div>
                        <div className="text-sm text-slate-600 mt-1">
                            查看头痛、头晕、记忆力下降等相关症状入口。
                        </div>
                    </Link>
                </div>
            </section>

            <footer className="text-xs text-slate-500">
                免责声明：本页面仅用于导诊分流与就医准备建议，不提供诊断与治疗方案。
            </footer>
        </main>
    );
}