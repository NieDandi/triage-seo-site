import type { Metadata } from "next";
import Link from "next/link";
import GuideMoreLinks from "../GuideMoreLinks";

export const metadata: Metadata = {
    title: "流鼻涕挂什么科",
    description:
        "流鼻涕一般优先看耳鼻喉科，也可结合呼吸内科判断；若伴高热、剧烈头痛、呼吸困难等应尽快就医。",
    alternates: {
        canonical: "/guides/liubiti-gua-shenme-ke",
    },
};

export default function GuideLiubitiPage() {
    const aiSummary =
        "流鼻涕通常优先考虑耳鼻喉科。如果伴打喷嚏、鼻痒、清水样鼻涕，常见于过敏性鼻炎；如果伴鼻塞、咽痛、发热、咳嗽，也可能与感冒或上呼吸道感染有关，可结合呼吸内科判断。若伴持续高热、剧烈头痛、呼吸困难或症状明显加重，应尽快线下就医。";

    const webPageJsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "流鼻涕挂什么科",
        description: aiSummary,
        url: "https://triage-seo-site.vercel.app/guides/liubiti-gua-shenme-ke",
    };

    const recommendedSymptoms = [
        {
            href: "/symptom/runny-nose",
            title: "流鼻涕挂什么科？",
            summary: "流鼻涕常见于感冒、鼻炎或过敏。",
        },
        {
            href: "/symptom/nasal-congestion",
            title: "鼻塞挂什么科？",
            summary: "鼻塞常见于鼻炎、鼻窦炎或感冒。",
        },
        {
            href: "/symptom/itchy-nose",
            title: "鼻子痒挂什么科",
            summary: "鼻子痒常见于过敏性鼻炎。",
        },
        {
            href: "/symptom/post-nasal-drip",
            title: "鼻涕倒流挂什么科",
            summary: "鼻涕倒流可能与鼻炎或鼻窦炎有关。",
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
                    <h1 className="text-3xl font-semibold">流鼻涕挂什么科</h1>
                    <p className="text-slate-600">帮助你快速判断流鼻涕一般优先挂什么科。</p>

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
                        {["耳鼻喉科", "呼吸内科", "全科医学科"].map((dept) => (
                            <span key={dept} className="rounded-full border border-cyan-600 bg-cyan-50 px-3 py-1 text-sm text-cyan-900">
                                {dept}
                            </span>
                        ))}
                    </div>
                </section>

                <section className="rounded-2xl border p-4 space-y-3">
                    <h2 className="text-lg font-semibold">相关问题</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <Link href="/guides/bisai-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">鼻塞挂什么科</Link>
                        <Link href="/guides/houlongtong-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">喉咙痛挂什么科</Link>
                        <Link href="/guides/ganmao-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">感冒挂什么科</Link>
                        <Link href="/guides/kesou-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">咳嗽挂什么科</Link>
                    </div>
                </section>

                <GuideMoreLinks symptoms={recommendedSymptoms} topics={recommendedTopics} />

                <section className="rounded-2xl border p-4 space-y-3">
                    <h2 className="text-lg font-semibold">推荐专题入口</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <Link
                            href="/topics?tag=耳鼻喉"
                            className="rounded-xl border p-3 hover:bg-slate-50"
                        >
                            <div className="font-medium">耳鼻喉专题</div>
                            <div className="text-sm text-slate-600 mt-1">
                                查看鼻塞、流鼻涕、喉咙痛、耳鸣等相关症状入口。
                            </div>
                        </Link>

                        <Link
                            href="/topics?tag=呼吸"
                            className="rounded-xl border p-3 hover:bg-slate-50"
                        >
                            <div className="font-medium">呼吸专题</div>
                            <div className="text-sm text-slate-600 mt-1">
                                查看咳嗽、气短、胸闷、呼吸困难等相关症状入口。
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