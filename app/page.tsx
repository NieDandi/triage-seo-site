import Link from "next/link";
import { symptoms } from "../data/symptoms";

export const metadata = {
  title: "智能导诊｜不知道挂哪个科？",
  description: "通过简单问答和症状页，帮助你选择合适科室（仅导诊分流，不提供诊断与治疗）。",
};

export default function Home() {
  const hot = symptoms.slice(0, 10);

  return (
    <main className="mx-auto max-w-4xl p-6 space-y-6">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold">智能导诊：不知道挂哪个科？</h1>
        <p className="text-slate-600">
          通过结构化导诊分流，帮你更快找到合适科室，并提示何时需要急诊（不提供诊断与治疗）。
        </p>

        <div className="rounded-lg border p-3 text-sm text-slate-600">
          免责声明：本站仅用于导诊分流与就医准备建议，不提供诊断与治疗方案；
          如症状严重或出现急症信号，请立即前往急诊或拨打急救电话。
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link className="rounded-lg border px-4 py-2" href="/triage">
            开始导诊
          </Link>
          <Link className="rounded-lg border px-4 py-2" href="/symptoms">
            查看全部症状
          </Link>
        </div>
      </header>

      <section className="rounded-xl border p-4 space-y-3">
        <h2 className="text-xl font-semibold">热门问题</h2>
        <ul className="list-disc pl-5 space-y-1">
          {hot.map((s) => (
            <li key={s.slug}>
              <Link className="underline" href={`/symptom/${s.slug}`}>
                {s.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <footer className="text-xs text-slate-500">
        提示：不同医院科室命名可能略有差异，结果仅供导诊参考。
      </footer>
    </main>
  );
}