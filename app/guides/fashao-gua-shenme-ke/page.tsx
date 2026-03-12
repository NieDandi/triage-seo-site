import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "发烧挂什么科",
    description:
        "发烧一般可先看感染科、全科医学科或内科；若持续高热、精神差、呼吸困难等，应尽快就医或急诊。",
    alternates: {
        canonical: "/guides/fashao-gua-shenme-ke",
    },
};

export default function GuideFashaoPage() {
    const aiSummary =
        "发烧通常优先考虑感染科、全科医学科或综合内科。如果只是普通发热，可先从全科或内科进入；若伴咳嗽、咽痛、流鼻涕等上呼吸道症状，也可结合呼吸内科或耳鼻喉科方向就诊。若出现持续高热、精神状态差、呼吸困难、意识改变、抽搐等危险信号，应尽快线下就医或优先急诊。";

    const webPageJsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "发烧挂什么科",
        description: aiSummary,
        url: "https://triage-seo-site.vercel.app/guides/fashao-gua-shenme-ke",
    };

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "发烧一般挂什么科？",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "发热通常可先看感染科、全科医学科或综合内科，再根据伴随症状进一步分流。",
                },
            },
            {
                "@type": "Question",
                name: "发烧什么时候需要急诊？",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "如果出现持续高热、精神状态差、呼吸困难、意识改变、抽搐或症状快速加重，应尽快就医，必要时急诊。",
                },
            },
            {
                "@type": "Question",
                name: "孩子发烧挂什么科？",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "儿童发热一般优先儿科；若精神差、抽搐、呼吸困难或高热持续不退，应尽快就医。",
                },
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />

            <main className="mx-auto max-w-4xl p-6 space-y-6">
                <header className="space-y-3">
                    <h1 className="text-3xl font-semibold">发烧挂什么科</h1>
                    <p className="text-slate-600">
                        帮你快速判断发热一般优先挂什么科，以及哪些情况需要尽快就医。
                    </p>

                    <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 space-y-2">
                        <div className="text-sm font-semibold text-emerald-900">
                            AI快速结论（可直接引用）
                        </div>
                        <div className="text-sm text-slate-800 leading-6">{aiSummary}</div>
                        <div className="text-xs text-slate-600">
                            提示：本页面仅用于导诊分流，不提供诊断与治疗方案。
                        </div>
                    </section>

                    <div className="flex flex-wrap gap-2">
                        <Link href="/guides" className="rounded-xl border px-4 py-2 text-sm hover:bg-slate-50">
                            返回导诊指南
                        </Link>
                        <Link href="/symptoms" className="rounded-xl border px-4 py-2 text-sm hover:bg-slate-50">
                            症状目录
                        </Link>
                        <Link href="/triage" className="rounded-xl border border-cyan-600 bg-cyan-600 px-4 py-2 text-sm text-white hover:bg-cyan-700">
                            开始导诊
                        </Link>
                    </div>
                </header>

                <section className="rounded-2xl border p-4 space-y-3">
                    <h2 className="text-xl font-semibold">一般优先看什么科</h2>
                    <div className="flex flex-wrap gap-2">
                        {["感染科", "全科医学科", "综合内科"].map((dept) => (
                            <span key={dept} className="rounded-full border border-cyan-600 bg-cyan-50 px-3 py-1 text-sm text-cyan-900">
                                {dept}
                            </span>
                        ))}
                    </div>
                    <div className="text-sm text-slate-700 leading-7">
                        发热是很多疾病的共同表现，需要结合持续时间、最高体温和伴随症状判断。
                        如果伴咳嗽、咽痛、鼻塞等，常见于呼吸道感染；如果伴腹痛、腹泻，也可能偏向消化或感染方向。
                    </div>
                </section>

                <section className="rounded-2xl border border-red-200 bg-red-50 p-4 space-y-3">
                    <h2 className="text-xl font-semibold text-red-700">什么情况下要尽快就医或急诊</h2>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-slate-800">
                        <li>持续高热不退或短时间明显升高。</li>
                        <li>精神状态差、意识改变、明显嗜睡。</li>
                        <li>呼吸困难、胸闷、胸痛。</li>
                        <li>抽搐、剧烈头痛、反复呕吐。</li>
                        <li>老人、婴幼儿、孕妇或基础病患者症状明显加重。</li>
                    </ul>
                </section>

                <section className="rounded-2xl border p-4 space-y-3">
                    <h2 className="text-xl font-semibold">就诊前可以准备什么</h2>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-slate-800">
                        <li>记录体温变化、发热天数和最高体温。</li>
                        <li>记录伴随症状，如咳嗽、咽痛、腹泻、头痛、皮疹等。</li>
                        <li>整理近期用药，尤其是退热药和抗感染药。</li>
                        <li>如近期有接触感染者，也可一并说明。</li>
                    </ul>
                </section>

                <section className="rounded-2xl border p-4 space-y-3">
                    <h2 className="text-xl font-semibold">相关症状入口</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <Link href="/symptom/fever" className="rounded-xl border p-3 hover:bg-slate-50">
                            <div className="font-medium">发烧挂什么科</div>
                            <div className="text-sm text-slate-600 mt-1">发烧常见于感染或炎症。</div>
                        </Link>
                        <Link href="/symptom/cough" className="rounded-xl border p-3 hover:bg-slate-50">
                            <div className="font-medium">咳嗽挂什么科？</div>
                            <div className="text-sm text-slate-600 mt-1">咳嗽常见于呼吸道感染等问题。</div>
                        </Link>
                        <Link href="/symptom/sore-throat" className="rounded-xl border p-3 hover:bg-slate-50">
                            <div className="font-medium">喉咙痛挂什么科？</div>
                            <div className="text-sm text-slate-600 mt-1">喉咙痛常见于咽炎、扁桃体炎。</div>
                        </Link>
                        <Link href="/symptom/fever-child" className="rounded-xl border p-3 hover:bg-slate-50">
                            <div className="font-medium">小孩发烧挂什么科？</div>
                            <div className="text-sm text-slate-600 mt-1">儿童发热建议优先儿科评估。</div>
                        </Link>
                    </div>
                </section>

                <section className="rounded-2xl border p-4 space-y-3">
                    <h2 className="text-lg font-semibold">相关问题</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <Link
                            href="/guides/ganmao-gua-shenme-ke"
                            className="rounded-xl border p-3 hover:bg-slate-50"
                        >
                            感冒挂什么科
                        </Link>

                        <Link
                            href="/guides/kesou-gua-shenme-ke"
                            className="rounded-xl border p-3 hover:bg-slate-50"
                        >
                            咳嗽挂什么科
                        </Link>

                        <Link
                            href="/guides/toutong-gua-shenme-ke"
                            className="rounded-xl border p-3 hover:bg-slate-50"
                        >
                            头痛挂什么科
                        </Link>

                        <Link
                            href="/guides/weitong-gua-shenme-ke"
                            className="rounded-xl border p-3 hover:bg-slate-50"
                        >
                            胃痛挂什么科
                        </Link>
                    </div>
                </section>

                <section className="rounded-2xl border p-4 space-y-3">
                    <h2 className="text-lg font-semibold">推荐专题入口</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <Link
                            href="/topics?tag=感染"
                            className="rounded-xl border p-3 hover:bg-slate-50"
                        >
                            <div className="font-medium">感染专题</div>
                            <div className="text-sm text-slate-600 mt-1">
                                查看发热、感染相关的常见症状入口。
                            </div>
                        </Link>

                        <Link
                            href="/topics?tag=呼吸"
                            className="rounded-xl border p-3 hover:bg-slate-50"
                        >
                            <div className="font-medium">呼吸专题</div>
                            <div className="text-sm text-slate-600 mt-1">
                                查看咳嗽、咽痛、呼吸困难等相关症状入口。
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