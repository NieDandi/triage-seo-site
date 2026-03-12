import type { Metadata } from "next";
import Link from "next/link";
import GuideMoreLinks from "../GuideMoreLinks";

export const metadata: Metadata = {
    title: "胸痛挂什么科",
    description:
        "胸痛一般优先看心内科，也可能涉及呼吸内科；若持续胸痛、出汗、呼吸困难、晕厥，应尽快就医或急诊。",
    alternates: {
        canonical: "/guides/xiongtong-gua-shenme-ke",
    },
};

export default function GuideXiongtongPage() {
    const aiSummary =
        "胸痛通常优先考虑心内科，也可能涉及呼吸内科。如果伴胸闷、心慌、活动后加重，更需要重视心血管方向；如果伴咳嗽、深呼吸疼痛，也可能与呼吸系统或胸膜相关。若持续胸痛、出汗、呼吸困难、晕厥或症状快速加重，应尽快线下就医或优先急诊。";

    const webPageJsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "胸痛挂什么科",
        description: aiSummary,
        url: "https://triage-seo-site.vercel.app/guides/xiongtong-gua-shenme-ke",
    };

    const recommendedSymptoms = [
        {
            href: "/symptom/chest-pain",
            title: "胸痛挂什么科",
            summary: "胸痛可能与心脏、肺部或肌肉问题有关。",
        },
        {
            href: "/symptom/chest-tightness",
            title: "胸闷挂什么科？",
            summary: "胸闷可能与心脏、肺部或焦虑等因素有关。",
        },
        {
            href: "/symptom/deep-breath-pain",
            title: "深呼吸胸痛挂什么科",
            summary: "深呼吸胸痛可能与胸膜或肌肉问题有关。",
        },
        {
            href: "/symptom/palpitations",
            title: "心慌挂什么科？",
            summary: "心慌可能与心律失常、焦虑或其他心血管问题有关。",
        },
    ];

    const recommendedTopics = [
        {
            href: "/topics?tag=心脏",
            title: "心脏专题",
            summary: "查看胸闷、胸痛、心慌、心跳快等相关症状入口。",
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
                    <h1 className="text-3xl font-semibold">胸痛挂什么科</h1>
                    <p className="text-slate-600">帮助你快速判断胸痛一般优先挂什么科。</p>

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
                        {["心内科", "呼吸内科", "急诊科"].map((dept) => (
                            <span key={dept} className="rounded-full border border-cyan-600 bg-cyan-50 px-3 py-1 text-sm text-cyan-900">
                                {dept}
                            </span>
                        ))}
                    </div>
                </section>

                <section className="rounded-2xl border p-4 space-y-3">
                    <h2 className="text-lg font-semibold">相关问题</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <Link href="/guides/xiongmen-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">胸闷挂什么科</Link>
                        <Link href="/guides/huxikunnan-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">呼吸困难挂什么科</Link>
                        <Link href="/guides/xinhuang-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">心慌挂什么科</Link>
                        <Link href="/guides/kesou-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">咳嗽挂什么科</Link>
                    </div>
                </section>

                <GuideMoreLinks symptoms={recommendedSymptoms} topics={recommendedTopics} />

                <section className="rounded-2xl border p-4 space-y-3">
                    <h2 className="text-lg font-semibold">推荐专题入口</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <Link
                            href="/topics?tag=心脏"
                            className="rounded-xl border p-3 hover:bg-slate-50"
                        >
                            <div className="font-medium">心脏专题</div>
                            <div className="text-sm text-slate-600 mt-1">
                                查看胸闷、胸痛、心慌、心跳快等相关症状入口。
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