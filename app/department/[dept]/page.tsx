import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { departments } from "../../../data/departments";
import { uniqueSymptoms } from "../../../data/symptoms";

export function generateStaticParams() {
  return departments.map((d) => ({ dept: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ dept: string }>;
}): Promise<Metadata> {
  const { dept } = await params;
  const d = departments.find((x) => x.slug === dept);
  if (!d) return { title: "页面不存在" };

  return {
    title: `${d.name}挂什么科｜科室导诊`,
    description: d.intro,
    alternates: { canonical: `/department/${d.slug}` },
  };
}

export default async function DepartmentPage({
  params,
}: {
  params: Promise<{ dept: string }>;
}) {
  const { dept } = await params;
  const d = departments.find((x) => x.slug === dept);
  if (!d) return notFound();

  const symptoms = uniqueSymptoms();

  const related = symptoms
    .filter((s) => s.tags.some((t: string) => d.tags.includes(t)))
    .slice(0, 30);

  const primaryTag = d.tags[0] ?? "";

  return (
    <main className="mx-auto max-w-4xl p-6 space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">{d.name}</h1>
        <p className="text-slate-600">{d.intro}</p>

        <div className="rounded-xl border border-red-200 bg-red-50 p-4">
          <div className="text-lg font-semibold text-red-700">何时需要急诊（重点）</div>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-slate-800">
            {d.redFlags.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          <Link
            className="inline-flex items-center justify-center rounded-xl border border-cyan-600 bg-cyan-600 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-700"
            href="/triage"
          >
            开始导诊
          </Link>

          <Link
            className="inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm hover:bg-slate-50"
            href="/departments"
          >
            返回科室目录
          </Link>

          <Link
            className="inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm hover:bg-slate-50"
            href="/symptoms"
          >
            症状目录
          </Link>

          {primaryTag ? (
            <Link
              className="inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm hover:bg-slate-50"
              href={`/symptoms?tag=${encodeURIComponent(primaryTag)}`}
            >
              查看本科室相关症状（按标签）
            </Link>
          ) : null}
        </div>
      </header>

      <section className="rounded-2xl border p-4 space-y-3">
        <h2 className="text-xl font-semibold">常见入口</h2>
        <ul className="list-disc pl-5 space-y-1">
          {d.commonSymptoms.map((c) => (
            <li key={c.href}>
              <Link className="underline" href={c.href}>
                {c.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border p-4 space-y-3">
        <h2 className="text-xl font-semibold">相关症状</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {related.map((s) => (
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

      <footer className="text-xs text-slate-500">
        免责声明：本页面仅用于导诊分流与就医准备建议，不提供诊断与治疗方案。
      </footer>
    </main>
  );
}