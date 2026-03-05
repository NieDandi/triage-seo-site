import Link from "next/link";
import { departments } from "../../data/departments";

export const metadata = {
  title: "科室目录｜挂什么科",
  description: "按科室查看常见问题、急诊提示与相关症状入口（仅导诊分流）。",
};

export default function DepartmentsIndex() {
  return (
    <main className="mx-auto max-w-4xl p-6 space-y-4">
      <h1 className="text-3xl font-semibold">科室目录</h1>
      <p className="text-slate-600">
        进入科室页可查看常见症状入口与急诊提示（仅导诊分流）。
      </p>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {departments.map((d) => (
          <li key={d.slug} className="rounded-xl border p-4">
            <Link className="text-lg font-medium underline" href={`/department/${d.slug}`}>
              {d.name}
            </Link>
            <div className="text-sm text-slate-600 mt-1">{d.intro}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}