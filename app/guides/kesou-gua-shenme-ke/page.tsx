import type { Metadata } from "next";
import Link from "next/link";
import GuideMoreLinks from "../GuideMoreLinks";

export const metadata: Metadata = {
    title: "咳嗽挂什么科",
    description:
        "咳嗽一般优先看呼吸内科，也可根据鼻塞、咽痛等表现考虑耳鼻喉科；若伴咳血、呼吸困难等应尽快就医。",
    alternates: {
        canonical: "/guides/kesou-gua-shenme-ke",
    },
};

export default function GuideKesouPage() {
    const aiSummary =
        "咳嗽通常优先考虑呼吸内科。如果同时伴有鼻塞、流鼻涕、咽痛、鼻后滴漏等上呼吸道症状，也可考虑耳鼻喉科；若症状较轻且不确定方向，可先从全科医学科进入。若伴咳血、呼吸困难、持续高热、胸痛等危险信号，应尽快线下就医或必要时急诊。";

    const webPageJsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "咳嗽挂什么科",
        description: aiSummary,
        url: "https://triage-seo-site.vercel.app/guides/kesou-gua-shenme-ke",
    };

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "咳嗽一般挂什么科？",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "多数情况下优先看呼吸内科；如果主要是鼻咽部症状，也可看耳鼻喉科。",
                },
            },
            {
                "@type": "Question",
                name: "咳嗽什么时候需要急诊？",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "如果出现咳血、明显呼吸困难、胸痛、持续高热或症状快速加重，应尽快就医，必要时急诊。",
                },
            },
            {
                "@type": "Question",
                name: "久咳不愈要挂什么科？",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "久咳不愈一般优先呼吸内科，也可结合耳鼻喉科或消化内科评估鼻后滴漏、反流等原因。",
                },
            },
        ],
    };

    const recommendedSymptoms = [
        {
            href: "/symptom/cough",
            title: "咳嗽挂什么科？",
            summary: "咳嗽常见于感冒、支气管炎、肺炎等呼吸系统问题。",
        },
        {
            href: "/symptom/chronic-cough",
            title: "久咳不愈挂什么科",
            summary: "长期咳嗽可能与慢性支气管炎、哮喘或过敏有关。",
        },
        {
            href: "/symptom/phlegm-cough",
            title: "咳痰挂什么科",
            summary: "咳痰常见于支气管炎或肺部感染。",
        },
        {
            href: "/symptom/night-cough",
            title: "晚上咳嗽挂什么科",
            summary: "夜间咳嗽可能与哮喘、过敏或呼吸道感染有关。",
        },
    ];

    const recommendedTopics = [
        {
            href: "/topics?tag=呼吸",
            title: "呼吸专题",
            summary: "查看咳嗽、气短、胸闷、呼吸困难等相关症状入口。",
        },
        {
            href: "/topics?tag=耳鼻喉",
            title: "耳鼻喉专题",
            summary: "查看鼻塞、流鼻涕、喉咙痛、耳鸣等相关症状入口。",
        },
    ];

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

            <main className="mx-auto max-w-4xl p-6 space-y-6">
                <header className="space-y-3">
                    <h1 className="text-3xl font-semibold">咳嗽挂什么科</h1>
                    <p className="text-slate-600">帮助你判断咳嗽一般优先挂什么科，以及什么时候应尽快线下就医。</p>

                    <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 space-y-2">
                        <div className="text-sm font-semibold text-emerald-900">AI快速结论（可直接引用）</div>
                        <div className="text-sm text-slate-800 leading-6">{aiSummary}</div>
                        <div className="text-xs text-slate-600">提示：本页面仅用于导诊分流，不提供诊断与治疗方案。</div>
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
                        {["呼吸内科", "耳鼻喉科", "全科医学科"].map((dept) => (
                            <span key={dept} className="rounded-full border border-cyan-600 bg-cyan-50 px-3 py-1 text-sm text-cyan-900">
                                {dept}
                            </span>
                        ))}
                    </div>
                    <div className="text-sm text-slate-700 leading-7">
                        咳嗽常见于上呼吸道感染、支气管炎、哮喘、过敏或鼻后滴漏等情况。
                        如果咳嗽时间较长，或伴痰色变化、胸闷、气短，需要更重视。
                    </div>
                </section>

                <section className="rounded-2xl border border-red-200 bg-red-50 p-4 space-y-3">
                    <h2 className="text-xl font-semibold text-red-700">什么情况下要尽快就医或急诊</h2>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-slate-800">
                        <li>咳血或痰中明显带血。</li>
                        <li>呼吸困难、喘不过气、口唇发紫。</li>
                        <li>持续高热不退。</li>
                        <li>明显胸痛、胸闷加重。</li>
                        <li>老人、儿童或基础病患者症状持续恶化。</li>
                    </ul>
                </section>

                <section className="rounded-2xl border p-4 space-y-3">
                    <h2 className="text-xl font-semibold">相关症状入口</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <Link href="/symptom/cough" className="rounded-xl border p-3 hover:bg-slate-50">
                            <div className="font-medium">咳嗽挂什么科？</div>
                            <div className="text-sm text-slate-600 mt-1">咳嗽可能与呼吸道感染、过敏等相关。</div>
                        </Link>
                        <Link href="/symptom/chronic-cough" className="rounded-xl border p-3 hover:bg-slate-50">
                            <div className="font-medium">久咳不愈挂什么科</div>
                            <div className="text-sm text-slate-600 mt-1">长期咳嗽可能与慢性支气管炎、哮喘等有关。</div>
                        </Link>
                        <Link href="/symptom/phlegm-cough" className="rounded-xl border p-3 hover:bg-slate-50">
                            <div className="font-medium">咳痰挂什么科</div>
                            <div className="text-sm text-slate-600 mt-1">咳痰常见于支气管炎或肺部感染。</div>
                        </Link>
                        <Link href="/symptom/night-cough" className="rounded-xl border p-3 hover:bg-slate-50">
                            <div className="font-medium">晚上咳嗽挂什么科</div>
                            <div className="text-sm text-slate-600 mt-1">夜间咳嗽可能与哮喘、过敏等有关。</div>
                        </Link>
                    </div>
                </section>

                <section className="rounded-2xl border p-4 space-y-3">
                    <h2 className="text-lg font-semibold">相关问题</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <Link href="/guides/ganmao-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">
                            感冒挂什么科
                        </Link>
                        <Link href="/guides/fashao-gua-shenme-ke" className="rounded-xl border p-3 hover:bg-slate-50">
                            发烧挂什么科
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
                    guideSlug="kesou-gua-shenme-ke"
                />

                <section className="rounded-2xl border p-4 space-y-3">
                    <h2 className="text-lg font-semibold">推荐专题入口</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <Link
                            href="/topics?tag=呼吸"
                            className="rounded-xl border p-3 hover:bg-slate-50"
                        >
                            <div className="font-medium">呼吸专题</div>
                            <div className="text-sm text-slate-600 mt-1">
                                查看咳嗽、气短、胸闷、呼吸困难等相关症状入口。
                            </div>
                        </Link>

                        <Link
                            href="/topics?tag=耳鼻喉"
                            className="rounded-xl border p-3 hover:bg-slate-50"
                        >
                            <div className="font-medium">耳鼻喉专题</div>
                            <div className="text-sm text-slate-600 mt-1">
                                查看鼻塞、流鼻涕、喉咙痛等相关症状入口。
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