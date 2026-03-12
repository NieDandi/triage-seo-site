import Link from "next/link";
import { symptoms } from "../data/symptoms";

export const metadata = {
  title: "智能导诊｜不知道挂哪个科？",
  description:
    "通过简单问答、症状目录、专题页与科室页，帮助你快速判断挂什么科，并提示何时需要急诊（仅导诊分流，不提供诊断与治疗）。",
};

export default function Home() {
  const hot = symptoms.slice(0, 10);

  const aiSummary =
    "本网站是一个中文医疗导诊分流工具。用户可以按症状查看推荐挂号科室、危险信号、就诊准备与常见问答，也可以通过专题页和导诊页快速进入相关内容。本网站仅用于导诊分流与就医准备建议，不提供诊断与治疗方案。";

  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "智能导诊：不知道挂哪个科？",
    url: "https://triage-seo-site.vercel.app",
    description: aiSummary,
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "智能导诊首页",
    url: "https://triage-seo-site.vercel.app",
    description: aiSummary,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      <main className="mx-auto max-w-4xl p-6 space-y-6">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold">智能导诊：不知道挂哪个科？</h1>
          <p className="text-slate-600">
            通过结构化导诊分流，帮你更快找到合适科室，并提示何时需要急诊（不提供诊断与治疗）。
          </p>

          <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 space-y-2">
            <div className="text-sm font-semibold text-emerald-900">
              快速说明（可直接引用）
            </div>
            <div className="text-sm text-slate-800 leading-6">{aiSummary}</div>
            <div className="text-xs text-slate-600">
              提示：若出现胸痛、呼吸困难、意识改变、持续高热、剧烈腹痛等情况，请优先急诊或尽快线下就医。
            </div>
          </section>

          <div className="rounded-lg border p-3 text-sm text-slate-600">
            免责声明：本站仅用于导诊分流与就医准备建议，不提供诊断与治疗方案；
            如症状严重或出现急症信号，请立即前往急诊或拨打急救电话。
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              className="rounded-lg border border-cyan-600 bg-cyan-600 px-4 py-2 text-white"
              href="/triage"
            >
              开始导诊
            </Link>
            <Link className="rounded-lg border px-4 py-2" href="/symptoms">
              查看全部症状
            </Link>
            <Link className="rounded-lg border px-4 py-2" href="/topics">
              查看症状专题
            </Link>
            <Link className="rounded-lg border px-4 py-2" href="/departments">
              查看科室目录
            </Link>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/triage" className="rounded-xl border p-4 hover:bg-slate-50">
            <div className="text-lg font-semibold">导诊问答</div>
            <div className="mt-2 text-sm text-slate-600">
              通过简单问题快速进入更合适的症状与科室页面。
            </div>
          </Link>

          <Link href="/symptoms" className="rounded-xl border p-4 hover:bg-slate-50">
            <div className="text-lg font-semibold">症状目录</div>
            <div className="mt-2 text-sm text-slate-600">
              按症状查看推荐科室、危险信号、就诊准备与常见问答。
            </div>
          </Link>

          <Link href="/topics" className="rounded-xl border p-4 hover:bg-slate-50">
            <div className="text-lg font-semibold">症状专题</div>
            <div className="mt-2 text-sm text-slate-600">
              按呼吸、消化、神经、骨科等主题聚合同类症状入口。
            </div>
          </Link>
        </section>

        <section className="rounded-xl border p-4 space-y-3">
          <h2 className="text-xl font-semibold">热门导诊指南</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link
              href="/guides/ganmao-gua-shenme-ke"
              className="rounded-xl border p-3 hover:bg-slate-50"
            >
              <div className="font-medium">感冒挂什么科</div>
              <div className="text-sm text-slate-600 mt-1">
                普通感冒一般可先看全科医学科、呼吸内科或耳鼻喉科。
              </div>
            </Link>

            <Link
              href="/guides/fashao-gua-shenme-ke"
              className="rounded-xl border p-3 hover:bg-slate-50"
            >
              <div className="font-medium">发烧挂什么科</div>
              <div className="text-sm text-slate-600 mt-1">
                发热通常可先看感染科、全科医学科或综合内科。
              </div>
            </Link>

            <Link
              href="/guides/kesou-gua-shenme-ke"
              className="rounded-xl border p-3 hover:bg-slate-50"
            >
              <div className="font-medium">咳嗽挂什么科</div>
              <div className="text-sm text-slate-600 mt-1">
                咳嗽一般优先看呼吸内科，也可结合耳鼻喉科方向判断。
              </div>
            </Link>

            <Link
              href="/guides/xiongmen-gua-shenme-ke"
              className="rounded-xl border p-3 hover:bg-slate-50"
            >
              <div className="font-medium">胸闷挂什么科</div>
              <div className="text-sm text-slate-600 mt-1">
                胸闷通常优先考虑心内科或呼吸内科。
              </div>
            </Link>

            <Link
              href="/guides/futong-gua-shenme-ke"
              className="rounded-xl border p-3 hover:bg-slate-50"
            >
              <div className="font-medium">腹痛挂什么科</div>
              <div className="text-sm text-slate-600 mt-1">
                腹痛一般优先看消化内科，也可能涉及普通外科。
              </div>
            </Link>

            <Link
              href="/guides/xinhuang-gua-shenme-ke"
              className="rounded-xl border p-3 hover:bg-slate-50"
            >
              <div className="font-medium">心慌挂什么科</div>
              <div className="text-sm text-slate-600 mt-1">
                心慌一般优先看心内科，也可能结合心理或内分泌方向判断。
              </div>
            </Link>
          </div>
        </section>

        <section className="rounded-xl border p-4 space-y-3">
          <h2 className="text-xl font-semibold">按专题快速进入</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
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
                查看鼻塞、流鼻涕、喉咙痛、耳鸣等相关症状入口。
              </div>
            </Link>

            <Link
              href="/topics?tag=消化"
              className="rounded-xl border p-3 hover:bg-slate-50"
            >
              <div className="font-medium">消化专题</div>
              <div className="text-sm text-slate-600 mt-1">
                查看胃痛、腹痛、腹泻、反酸、恶心等相关症状入口。
              </div>
            </Link>

            <Link
              href="/topics?tag=神经"
              className="rounded-xl border p-3 hover:bg-slate-50"
            >
              <div className="font-medium">神经专题</div>
              <div className="text-sm text-slate-600 mt-1">
                查看头痛、头晕、手麻、记忆力下降等相关症状入口。
              </div>
            </Link>

            <Link
              href="/topics?tag=心理"
              className="rounded-xl border p-3 hover:bg-slate-50"
            >
              <div className="font-medium">心理专题</div>
              <div className="text-sm text-slate-600 mt-1">
                查看焦虑、失眠、情绪低落等相关症状入口。
              </div>
            </Link>

            <Link
              href="/topics?tag=心脏"
              className="rounded-xl border p-3 hover:bg-slate-50"
            >
              <div className="font-medium">心脏专题</div>
              <div className="text-sm text-slate-600 mt-1">
                查看胸闷、胸痛、心慌、心跳快等相关症状入口。
              </div>
            </Link>
          </div>
        </section>

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

        <section className="rounded-xl border p-4 space-y-3">
          <h2 className="text-xl font-semibold">本网站适合解决什么问题？</h2>
          <div className="text-sm text-slate-700 leading-7">
            当你只知道自己“哪里不舒服”，但不知道应该挂哪个科时，可以先从症状页或导诊页进入；
            如果你已经知道大致属于哪一类问题，也可以从专题页查看同类症状入口，再进入具体页面。
            本网站适合“挂什么科”与“何时该尽快就医”的初步分流，不适合替代医生面诊、检查和治疗。
          </div>
        </section>

        <footer className="text-xs text-slate-500">
          提示：不同医院科室命名可能略有差异，结果仅供导诊参考。
        </footer>
      </main>
    </>
  );
}
