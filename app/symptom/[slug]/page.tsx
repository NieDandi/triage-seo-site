import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { symptoms } from "../../../data/symptoms";
import { departments } from "../../../data/departments";

export function generateStaticParams() {
  // 让 Next 预生成所有症状页（本地 dev 也会更稳定）
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

export default async function SymptomDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = symptoms.find((x) => x.slug === slug);
  if (!item) return notFound();

  // —— 相关科室（按科室名匹配 departments.name）
  const deptNames = Array.from(
    new Set([...(item.recommended ?? []), ...(item.alternatives ?? [])])
  );

  const relatedDepts = departments.filter((d) => deptNames.includes(d.name)).slice(0, 6);

  // —— 相关症状：同标签
  const relatedSymptoms = symptoms
    .filter((s) => s.slug !== item.slug)
    .filter((s) => s.tags?.some((t: string) => item.tags?.includes(t)))
    .slice(0, 12);

  // —— JSON-LD：MedicalSymptom + FAQPage（如果有）
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(symptomJsonLd) }}
      />
      {faqJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      ) : null}

      <main className="mx-auto max-w-4xl p-6 space-y-6">
        {/* 顶部标题 */}
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold">{item.title}</h1>
          <p className="text-slate-600">{item.summary}</p>

          {/* 重要：红色急诊提示 */}
          {Array.isArray(item.redFlags) && item.redFlags.length > 0 ? (
            <div className="rounded-2xl border border-red-200 bg-red-50 p-4">
              <div className="text-lg font-semibold text-red-700">何时需要急诊（重点）</div>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-slate-800">
                {item.redFlags.map((x: string) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {/* 主按钮 */}
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

        {/* 推荐科室 */}
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

        {/* 就诊准备 */}
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

        {/* 常见问答 */}
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

        {/* 相关症状（同标签内链） */}
        {relatedSymptoms.length > 0 ? (
          <section className="rounded-2xl border p-4 space-y-3">
            <h2 className="text-lg font-semibold">相关症状（推荐继续看）</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
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