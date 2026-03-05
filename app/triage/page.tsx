import TriageClient from "./TriageClient";

export const metadata = {
  title: "开始导诊｜挂什么科",
  description: "通过简单问答进行导诊分流（不提供诊断与治疗）。",
};

export default function TriagePage() {
  return (
    <main className="mx-auto max-w-4xl p-6 space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">导诊分流（问答树）</h1>
        <p className="text-slate-600">
          目标：让紧急情况一眼可见；非急症通过最少问题推荐科室。
        </p>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
          免责声明：本工具仅用于导诊分流与就医准备建议，不提供诊断与治疗方案；如出现急症信号请立即急诊或拨打 120。
        </div>
      </header>

      <TriageClient />
    </main>
  );
}