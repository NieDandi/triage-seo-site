// app/symptom/[slug]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { symptoms } from "../../../data/symptoms";
import { departments } from "../../../data/departments";

export function generateStaticParams() {
    return symptoms.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const item = symptoms.find((x) => x.slug === slug);
    if (!item) return { title: "页面不存在" };

    return {
        title: item.title,
        description: item.summary,
        alternates: { canonical: `/symptom/${item.slug}` },
    };
}

type GuideItem = {
    slug: string;
    title: string;
    summary: string;
};

const allGuides: GuideItem[] = [
    {
        slug: "ganmao-gua-shenme-ke",
        title: "感冒挂什么科",
        summary: "普通感冒一般可先看全科医学科、呼吸内科或耳鼻喉科。",
    },
    {
        slug: "fashao-gua-shenme-ke",
        title: "发烧挂什么科",
        summary: "发热通常可先看感染科、全科医学科或综合内科。",
    },
    {
        slug: "kesou-gua-shenme-ke",
        title: "咳嗽挂什么科",
        summary: "咳嗽一般优先看呼吸内科，也可结合耳鼻喉科方向判断。",
    },
    {
        slug: "toutong-gua-shenme-ke",
        title: "头痛挂什么科",
        summary: "头痛通常优先考虑神经内科，危险信号明显时应尽快就医。",
    },
    {
        slug: "weitong-gua-shenme-ke",
        title: "胃痛挂什么科",
        summary: "胃痛通常优先看消化内科，若持续剧烈腹痛应尽快就医。",
    },
    {
        slug: "xiongmen-gua-shenme-ke",
        title: "胸闷挂什么科",
        summary: "胸闷通常优先考虑心内科或呼吸内科。",
    },
    {
        slug: "touyun-gua-shenme-ke",
        title: "头晕挂什么科",
        summary: "头晕通常优先看神经内科，也可能涉及耳鼻喉科或心内科。",
    },
    {
        slug: "shimian-gua-shenme-ke",
        title: "失眠挂什么科",
        summary: "失眠通常优先考虑精神科、心理科或神经内科。",
    },
];

function getRelatedGuides(item: (typeof symptoms)[number]) {
    const text = `${item.title} ${(item.tags ?? []).join(" ")} ${item.summary}`;

    const hasAny = (keywords: string[]) => keywords.some((k) => text.includes(k));

    const result: GuideItem[] = [];

    if (hasAny(["感冒", "鼻塞", "流鼻涕", "咽痛", "喉咙痛"])) {
        result.push(allGuides.find((g) => g.slug === "ganmao-gua-shenme-ke")!);
    }

    if (hasAny(["发烧", "发热", "高热"])) {
        result.push(allGuides.find((g) => g.slug === "fashao-gua-shenme-ke")!);
    }

    if (hasAny(["咳嗽", "咳痰", "干咳", "久咳", "夜间咳嗽", "喘鸣"])) {
        result.push(allGuides.find((g) => g.slug === "kesou-gua-shenme-ke")!);
    }

    if (hasAny(["头痛", "偏头痛"])) {
        result.push(allGuides.find((g) => g.slug === "toutong-gua-shenme-ke")!);
    }

    if (hasAny(["胃痛", "胃胀", "反酸", "烧心", "腹痛", "腹胀", "恶心", "呕吐"])) {
        result.push(allGuides.find((g) => g.slug === "weitong-gua-shenme-ke")!);
    }

    if (hasAny(["胸闷", "胸痛", "心慌", "呼吸困难", "胸口压迫感", "气短"])) {
        result.push(allGuides.find((g) => g.slug === "xiongmen-gua-shenme-ke")!);
    }

    if (hasAny(["头晕", "眩晕", "耳鸣", "眼前发黑", "站不稳"])) {
        result.push(allGuides.find((g) => g.slug === "touyun-gua-shenme-ke")!);
    }

    if (hasAny(["失眠", "睡不着", "早醒", "焦虑", "抑郁", "情绪低落"])) {
        result.push(allGuides.find((g) => g.slug === "shimian-gua-shenme-ke")!);
    }

    if (result.length === 0) {
        if ((item.tags ?? []).some((t) => ["呼吸", "耳鼻喉"].includes(t))) {
            result.push(allGuides.find((g) => g.slug === "kesou-gua-shenme-ke")!);
        }
        if ((item.tags ?? []).some((t) => ["消化"].includes(t))) {
            result.push(allGuides.find((g) => g.slug === "weitong-gua-shenme-ke")!);
        }
        if ((item.tags ?? []).some((t) => ["神经"].includes(t))) {
            result.push(allGuides.find((g) => g.slug === "touyun-gua-shenme-ke")!);
        }
        if ((item.tags ?? []).some((t) => ["心理"].includes(t))) {
            result.push(allGuides.find((g) => g.slug === "shimian-gua-shenme-ke")!);
        }
        if ((item.tags ?? []).some((t) => ["心脏"].includes(t))) {
            result.push(allGuides.find((g) => g.slug === "xiongmen-gua-shenme-ke")!);
        }
    }

    return Array.from(new Map(result.map((g) => [g.slug, g])).values()).slice(0, 4);
}

export default async function SymptomDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const item = symptoms.find((x) => x.slug === slug);
    if (!item) return notFound();

    const deptNames = Array.from(
        new Set([...(item.recommended ?? []), ...(item.alternatives ?? [])])
    );

    const relatedDepts = departments
        .filter((d) => deptNames.includes(d.name))
        .slice(0, 6);

    const relatedSymptoms = symptoms
        .filter((s) => s.slug !== item.slug)
        .map((s) => {
            const sameTags = (s.tags ?? []).filter((t: string) =>
                (item.tags ?? []).includes(t)
            ).length;

            const sameDept =
                (s.recommended ?? []).some((d: string) =>
                    (item.recommended ?? []).includes(d)
                ) || false;

            return {
                ...s,
                score: sameTags * 3 + (sameDept ? 2 : 0),
            };
        })
        .filter((s) => s.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 12);

    const relatedGuides = getRelatedGuides(item);

    const aiSummary = `${item.title}：通常建议优先挂${(item.recommended ?? []).join(
        "、"
    )}${(item.alternatives ?? []).length ? `；也可考虑${(item.alternatives ?? []).join("、")}` : ""}。${(item.redFlags ?? []).length
        ? `如出现${(item.redFlags ?? []).join("、")}等危险信号，请优先急诊或尽快就医。`
        : "如症状严重或快速加重，请尽快就医。"
        }本页面仅用于导诊分流与就诊准备，不提供诊断与治疗方案。`;

    const symptomJsonLd = {
        "@context": "https://schema.org",
        "@type": "MedicalSymptom",
        name: item.title,
        description: item.summary,
        url: `/symptom/${item.slug}`,
        possibleTreatment: (item.prep ?? []).slice(0, 5),
    };

    const faqJsonLd =
        Array.isArray(item.faqs) && item.faqs.length > 0
            ? {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: item.faqs.map((f: any) => ({
                    "@type": "Question",
                    name: f.q,
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: f.a,
                    },
                })),
            }
            : null;

    const webPageJsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: item.title,
        description: aiSummary,
        url: `/symptom/${item.slug}`,
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(symptomJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
            />
            {faqJsonLd ? (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
                />
            ) : null}

            <main className="mx-auto max-w-4xl p-6 space-y-6">
                <header className="space-y-2">
                    <h1 className="text-3xl font-semibold">{item.title}</h1>
                    <p className="text-slate-600">{item.summary}</p>

                    <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 space-y-2">
                        <div className="text-sm font-semibold text-emerald-900">
                            快速结论（可直接引用）
                        </div>
                        <div className="text-sm text-slate-800 leading-6">{aiSummary}</div>
                        <div className="text-xs text-slate-600">
                            提示：如出现胸痛、呼吸困难、意识改变、持续高热等，请优先急诊或尽快就医。
                        </div>
                    </section>

                    {Array.isArray(item.redFlags) && item.redFlags.length > 0 ? (
                        <div className="rounded-2xl border border-red-200 bg-red-50 p-4">
                            <div className="text-lg font-semibold text-red-700">
                                何时需要急诊（重点）
                            </div>
                            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-slate-800">
                                {item.redFlags.map((x: string) => (
                                    <li key={x}>{x}</li>
                                ))}
                            </ul>
                        </div>
                    ) : null}

                    <div className="flex flex-wrap gap-2 pt-1">
                        <Link
                            href="/triage"
                            className="inline-flex items-center justify-center rounded-xl border border-cyan-600 bg-cyan-600 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-700"
                        >
                            开始导诊
                        </Link>
                        <Link
                            href="/symptoms"
                            className="inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm hover:bg-slate-50"
                        >
                            返回症状目录
                        </Link>
                        <Link
                            href="/departments"
                            className="inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm hover:bg-slate-50"
                        >
                            查看科室目录
                        </Link>
                    </div>
                </header>

                {relatedGuides.length > 0 ? (
                    <section className="rounded-2xl border p-4 space-y-3">
                        <h2 className="text-xl font-semibold">相关导诊指南</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {relatedGuides.map((g) => (
                                <Link
                                    key={g.slug}
                                    href={`/guides/${g.slug}`}
                                    className="rounded-xl border p-3 hover:bg-slate-50"
                                >
                                    <div className="font-medium">{g.title}</div>
                                    <div className="text-sm text-slate-600 mt-1">{g.summary}</div>
                                </Link>
                            ))}
                        </div>
                    </section>
                ) : null}

                <section className="rounded-2xl border p-4 space-y-3">
                    <h2 className="text-xl font-semibold">建议挂什么科</h2>

                    <div className="flex flex-wrap gap-2">
                        {(item.recommended ?? []).map((d: string) => (
                            <span
                                key={d}
                                className="rounded-full border border-cyan-600 bg-cyan-50 text-cyan-900 px-3 py-1 text-sm"
                            >
                                {d}
                            </span>
                        ))}
                        {(item.alternatives ?? []).map((d: string) => (
                            <span
                                key={d}
                                className="rounded-full border border-slate-200 bg-white text-slate-700 px-3 py-1 text-sm"
                            >
                                {d}
                            </span>
                        ))}
                    </div>

                    {relatedDepts.length > 0 ? (
                        <div className="pt-2">
                            <div className="text-sm text-slate-600 mb-2">科室页面（内链）</div>
                            <div className="flex flex-wrap gap-2">
                                {relatedDepts.map((d) => (
                                    <Link
                                        key={d.slug}
                                        href={`/department/${d.slug}`}
                                        className="rounded-xl border px-3 py-2 text-sm hover:bg-slate-50"
                                    >
                                        {d.name}导诊
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ) : null}
                </section>

                {Array.isArray(item.prep) && item.prep.length > 0 ? (
                    <section className="rounded-2xl border p-4 space-y-2">
                        <h2 className="text-lg font-semibold">就诊准备</h2>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-800">
                            {item.prep.map((x: string) => (
                                <li key={x}>{x}</li>
                            ))}
                        </ul>
                    </section>
                ) : null}

                {Array.isArray(item.faqs) && item.faqs.length > 0 ? (
                    <section className="rounded-2xl border p-4 space-y-3">
                        <h2 className="text-lg font-semibold">常见问答</h2>
                        <div className="space-y-3">
                            {item.faqs.map((f: any) => (
                                <div key={f.q} className="rounded-xl bg-slate-50 p-3">
                                    <div className="font-medium">{f.q}</div>
                                    <div className="text-sm text-slate-700 mt-1">{f.a}</div>
                                </div>
                            ))}
                        </div>
                    </section>
                ) : null}

                {relatedSymptoms.length > 0 ? (
                    <section className="rounded-2xl border p-4 space-y-3">
                        <h2 className="text-lg font-semibold">相关症状（同类问题推荐）</h2>                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {relatedSymptoms.map((s) => (
                                <Link
                                    key={s.slug}
                                    href={`/symptom/${s.slug}`}
                                    className="rounded-xl border p-3 hover:bg-slate-50"
                                >
                                    <div className="font-medium">{s.title}</div>
                                    <div className="text-sm text-slate-600 mt-1">{s.summary}</div>
                                </Link>
                            ))}
                        </div>
                    </section>
                ) : null}

                <footer className="text-xs text-slate-500">
                    免责声明：本页面仅用于导诊分流与就医准备建议，不提供诊断与治疗方案。
                </footer>
            </main>
        </>
    );
}