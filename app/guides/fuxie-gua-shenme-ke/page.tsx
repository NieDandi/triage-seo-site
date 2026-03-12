import type { Metadata } from "next";
import Link from "next/link";
import GuideMoreLinks from "../GuideMoreLinks";

export const metadata: Metadata = {
    title: "腹泻挂什么科",
    description:
        "腹泻一般优先看消化内科或感染科；若伴严重脱水、高热、便血等，应尽快就医。",
    alternates: {
        canonical: "/guides/fuxie-gua-shenme-ke",
    },
};

export default function GuideFuxiePage() {
    const aiSummary =
        "腹泻通常优先考虑消化内科，也可结合感染科判断。如果伴发热、饮食不洁史、急性起病，常见于感染性腹泻；如果长期反复，也需要重视消化系统功能问题。若伴严重脱水、高热、便血、持续频繁腹泻或明显乏力，应尽快线下就医。";

    const webPageJsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "腹泻挂什么科",
        description: aiSummary,
        url: "https://triage-seo-site.vercel.app/guides/fuxie-gua-shenme-ke",
    };

    const recommendedSymptoms = [
        {
            href: "/symptom/diarrhea",
            title: "腹泻挂什么科",
            summary: "腹泻常见于感染或饮食问题。",
        },
        {
            href: "/symptom/nausea",
            title: "恶心想吐挂什么科",
            summary: "恶心可能由胃肠问题、感染或神经系统问题引起。",
        },
        {
            href: "/symptom/vomiting",
            title: "呕吐挂什么科？",
            summary: "呕吐常见于胃肠炎或食物中毒。",
        },
        {
            href: "/symptom/abdominal-pain",
            title: "腹痛挂什么科？",
            summary: "腹痛常见于胃炎、阑尾炎或肠胃问题。",
        },
    ];

    const recommendedTopics = [
        {
            href: "/topics?tag=消化",
            title: "消化专题",
            summary: "查看胃痛、腹胀、反酸、腹泻、恶心等相关症状入口。",
        },
        {
            href: "/topics?tag=感染",
            title: "感染相关入口",
            summary: "若伴发热或急性起病，可优先结合感染方向判断。",
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
                    <h1 className="text-3xl font-semibold">腹泻挂什么科</h1>
                    <p className="text-slate-600">帮助你快速判断腹泻一般优先挂什么科。</p>

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
                        {["消化内科", "感染科", "综合内科"].map((dept) => (
                            <span key={dept} className="rounded-full border border-cyan-600 bg-cyan-50 px-3 py-1 text-sm text-cyan-900">
                                {dept}
                            </span>
                        ))}
                    </div>
                </section>

                <section className="rounded-2xl border p-4 space-y-3">
                    <h2 className="text-lg font-semibold">相关问题</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <Link href="/guides/futong-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">腹痛挂什么科</Link>
                        <Link href="/guides/fansuan-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">反酸挂什么科</Link>
                        <Link href="/guides/fashao-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">发烧挂什么科</Link>
                        <Link href="/guides/weitong-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">胃痛挂什么科</Link>
                    </div>
                </section>

                <GuideMoreLinks symptoms={recommendedSymptoms} topics={recommendedTopics} />

                <section className="rounded-2xl border p-4 space-y-3">
                    <h2 className="text-lg font-semibold">推荐专题入口</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <Link
                            href="/topics?tag=消化"
                            className="rounded-xl border p-3 hover:bg-slate-50"
                        >
                            <div className="font-medium">消化专题</div>
                            <div className="text-sm text-slate-600 mt-1">
                                查看胃痛、腹泻、腹痛、恶心、呕吐等相关症状入口。
                            </div>
                        </Link>

                        <Link
                            href="/topics?tag=感染"
                            className="rounded-xl border p-3 hover:bg-slate-50"
                        >
                            <div className="font-medium">感染专题</div>
                            <div className="text-sm text-slate-600 mt-1">
                                若伴发热或急性起病，可结合感染相关症状入口查看。
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