import Link from "next/link";
import { uniqueSymptoms } from "../../data/symptoms";

export const metadata = {
  title: "专题目录｜按标签找症状",
  description: "按专题（标签）聚合症状列表，方便快速找到挂号科室与就诊提示。",
};

function getAllTags() {
  const set = new Set<string>();
  for (const s of uniqueSymptoms()) {
    for (const t of s.tags ?? []) set.add(t);
  }
  return Array.from(set).sort((a, b) => a.localeCompare(b, "zh-Hans-CN"));
}

export default function TopicsPage() {
  const tags = getAllTags();

  return (
    <main className="mx-auto max-w-5xl p-6 space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">专题目录（按标签）</h1>
        <p className="text-slate-600">
          选择一个专题（标签），查看该专题下的症状入口页（仅导诊分流）。
        </p>
      </header>

      <section className="rounded-2xl border p-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <Link
              key={t}
              href={`/topic/${encodeURIComponent(t)}`}
              className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm hover:bg-slate-50"
            >
              {t}
            </Link>
          ))}
        </div>
      </section>

      <footer className="text-xs text-slate-500">
        免责声明：本工具仅用于导诊分流与就医准备建议，不提供诊断与治疗方案。
      </footer>
    </main>
  );
}