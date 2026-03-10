import type { Metadata } from "next";
import Link from "next/link";
import GuideMoreLinks from "../GuideMoreLinks";

export const metadata: Metadata = {
    title: "感冒挂什么科",
    description:
        "感冒一般优先看全科、呼吸内科或耳鼻喉科；若伴持续高热、呼吸困难等危险信号，应尽快就医或急诊。",
    alternates: {
        canonical: "/guides/ganmao-gua-shenme-ke",
    },
};

export default function GuideGanmaoPage() {
    const aiSummary =
        "感冒通常优先考虑全科医学科、呼吸内科或耳鼻喉科。如果只是普通上呼吸道症状，可先从全科或呼吸方向就诊；若以鼻塞、流涕、咽痛为主，也可看耳鼻喉科。若伴持续高热、呼吸困难、胸痛、意识异常等危险信号，应尽快线下就医或优先急诊。";

    const webPageJsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "感冒挂什么科",
        description: aiSummary,
        url: "https://triage-seo-site.vercel.app/guides/ganmao-gua-shenme-ke",
    };

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "感冒一般挂什么科？",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "普通感冒一般可先看全科医学科、呼吸内科或耳鼻喉科，具体取决于主要症状表现。",
                },
            },
            {
                "@type": "Question",
                name: "感冒什么时候需要急诊？",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "如果伴持续高热、呼吸困难、胸痛、意识改变或症状快速加重，应尽快线下就医，必要时急诊。",
                },
            },
            {
                "@type": "Question",
                name: "感冒去耳鼻喉科还是呼吸内科？",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "如果以咽痛、鼻塞、流鼻涕为主，可优先耳鼻喉科；如果以咳嗽、咳痰、气短等呼吸道症状为主，可优先呼吸内科。",
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
            href: "/symptom/sore-throat",
            title: "喉咙痛挂什么科？",
            summary: "喉咙痛常见于咽炎、扁桃体炎或上呼吸道感染。",
        },
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
                    <h1 className="text-3xl font-semibold">感冒挂什么科</h1>
                    <p className="text-slate-600">
                        结合常见症状方向，快速判断感冒一般挂什么科，以及什么时候应该尽快就医。
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
                        <Link
                            href="/guides"
                            className="rounded-xl border px-4 py-2 text-sm hover:bg-slate-50"
                        >
                            返回导诊指南
                        </Link>
                        <Link
                            href="/symptoms"
                            className="rounded-xl border px-4 py-2 text-sm hover:bg-slate-50"
                        >
                            症状目录
                        </Link>
                        <Link
                            href="/triage"
                            className="rounded-xl border border-cyan-600 bg-cyan-600 px-4 py-2 text-sm text-white hover:bg-cyan-700"
                        >
                            开始导诊
                        </Link>
                    </div>
                </header>

                <section className="rounded-2xl border p-4 space-y-3">
                    <h2 className="text-xl font-semibold">一般优先看什么科</h2>
                    <div className="flex flex-wrap gap-2">
                        {["全科医学科", "呼吸内科", "耳鼻喉科"].map((dept) => (
                            <span
                                key={dept}
                                className="rounded-full border border-cyan-600 bg-cyan-50 px-3 py-1 text-sm text-cyan-900"
                            >
                                {dept}
                            </span>
                        ))}
                    </div>
                    <div className="text-sm text-slate-700 leading-7">
                        普通感冒通常以上呼吸道症状为主，例如鼻塞、流鼻涕、咽痛、咳嗽、低热、乏力等。
                        如果你不确定应该挂哪个科，可优先从全科医学科进入；如果以咳嗽、咳痰、胸闷等为主，
                        更偏向呼吸内科；如果以鼻塞、咽痛、流涕、耳鼻喉不适为主，也可以优先看耳鼻喉科。
                    </div>
                </section>

                <section className="rounded-2xl border border-red-200 bg-red-50 p-4 space-y-3">
                    <h2 className="text-xl font-semibold text-red-700">什么情况下要尽快就医或急诊</h2>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-slate-800">
                        <li>持续高热不退，或发热明显加重。</li>
                        <li>出现呼吸困难、胸痛、喘不过气。</li>
                        <li>意识改变、明显嗜睡、精神状态差。</li>
                        <li>老人、婴幼儿、孕妇或基础病患者症状明显加重。</li>
                        <li>症状持续时间长，或短期内快速恶化。</li>
                    </ul>
                </section>

                <section className="rounded-2xl border p-4 space-y-3">
                    <h2 className="text-xl font-semibold">就诊前可以准备什么</h2>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-slate-800">
                        <li>记录发热天数、最高体温及退热情况。</li>
                        <li>整理主要症状：鼻塞、流鼻涕、咽痛、咳嗽、痰色、胸闷等。</li>
                        <li>带上近期用药记录，例如退烧药、感冒药、止咳药。</li>
                        <li>如果家中有人近期感染，也可一并说明。</li>
                    </ul>
                </section>

                <section className="rounded-2xl border p-4 space-y-3">
                    <h2 className="text-xl font-semibold">相关症状入口</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <Link
                            href="/symptom/cough"
                            className="rounded-xl border p-3 hover:bg-slate-50"
                        >
                            <div className="font-medium">咳嗽挂什么科？</div>
                            <div className="text-sm text-slate-600 mt-1">
                                咳嗽常见于感冒、支气管炎、肺炎等呼吸系统问题。
                            </div>
                        </Link>

                        <Link
                            href="/symptom/sore-throat"
                            className="rounded-xl border p-3 hover:bg-slate-50"
                        >
                            <div className="font-medium">喉咙痛挂什么科？</div>
                            <div className="text-sm text-slate-600 mt-1">
                                喉咙痛常见于咽炎、扁桃体炎或上呼吸道感染。
                            </div>
                        </Link>

                        <Link
                            href="/symptom/runny-nose"
                            className="rounded-xl border p-3 hover:bg-slate-50"
                        >
                            <div className="font-medium">流鼻涕挂什么科？</div>
                            <div className="text-sm text-slate-600 mt-1">
                                流鼻涕常见于感冒、鼻炎或过敏。
                            </div>
                        </Link>

                        <Link
                            href="/symptom/nasal-congestion"
                            className="rounded-xl border p-3 hover:bg-slate-50"
                        >
                            <div className="font-medium">鼻塞挂什么科？</div>
                            <div className="text-sm text-slate-600 mt-1">
                                鼻塞常见于鼻炎、鼻窦炎或感冒。
                            </div>
                        </Link>
                    </div>
                </section>

                <section className="rounded-2xl border p-4 space-y-3">
                    <h2 className="text-xl font-semibold">常见问答</h2>

                    <div className="space-y-3">
                        <div className="rounded-xl bg-slate-50 p-3">
                            <div className="font-medium">感冒一般挂什么科？</div>
                            <div className="text-sm text-slate-700 mt-1">
                                普通感冒一般可先看全科医学科、呼吸内科或耳鼻喉科，具体取决于主要症状表现。
                            </div>
                        </div>

                        <div className="rounded-xl bg-slate-50 p-3">
                            <div className="font-medium">感冒什么时候需要急诊？</div>
                            <div className="text-sm text-slate-700 mt-1">
                                如果伴持续高热、呼吸困难、胸痛、意识改变或症状快速加重，应尽快线下就医，必要时急诊。
                            </div>
                        </div>

                        <div className="rounded-xl bg-slate-50 p-3">
                            <div className="font-medium">感冒去耳鼻喉科还是呼吸内科？</div>
                            <div className="text-sm text-slate-700 mt-1">
                                如果以咽痛、鼻塞、流鼻涕为主，可优先耳鼻喉科；如果以咳嗽、咳痰、气短等为主，可优先呼吸内科。
                            </div>
                        </div>
                    </div>
                </section>

                <section className="rounded-2xl border p-4 space-y-3">
                    <h2 className="text-lg font-semibold">相关问题</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                        <Link
                            href="/guides/fashao-gua-shenme-ke"
                            className="rounded-xl border p-3 hover:bg-slate-50"
                        >
                            发烧挂什么科
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
                            href="/guides/xiongmen-gua-shenme-ke"
                            className="rounded-xl border p-3 hover:bg-slate-50"
                        >
                            胸闷挂什么科
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