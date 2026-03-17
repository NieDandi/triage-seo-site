import Link from "next/link";

type LinkItem = {
  href: string;
  title: string;
  summary: string;
};

const faqLinks: LinkItem[] = [
  {
    href: "/faq/kesou-xian-kan-nage-ke",
    title: "咳嗽先看哪个科？",
    summary: "咳嗽一般优先考虑呼吸内科；伴随咽痛、流鼻涕时也可结合耳鼻喉科或全科判断。",
  },
  {
    href: "/faq/kesou-gua-huxineike-ma",
    title: "咳嗽挂呼吸内科吗？",
    summary: "大多数咳嗽可以先挂呼吸内科，尤其是持续咳嗽、有痰或伴随气喘时。",
  },
  {
    href: "/faq/toutong-kan-shenme-ke",
    title: "头痛看什么科？",
    summary: "头痛多数建议先看神经内科；若伴随发热、鼻塞等，也可能与感染有关。",
  },
  {
    href: "/faq/weitong-kan-xiaohua-neike-ma",
    title: "胃痛看消化内科吗？",
    summary: "胃痛多数情况下可以先看消化内科，尤其是伴随反酸、恶心等症状时。",
  },
];

export default function GuideMoreLinks({
  symptoms,
  topics,
}: {
  symptoms: LinkItem[];
  topics: LinkItem[];
}) {
  return (
    <>
      {symptoms.length > 0 ? (
        <section className="rounded-2xl border p-4 space-y-3">
          <h2 className="text-lg font-semibold">推荐症状入口</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {symptoms.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl border p-3 hover:bg-slate-50"
              >
                <div className="font-medium">{item.title}</div>
                <div className="text-sm text-slate-600 mt-1">{item.summary}</div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {topics.length > 0 ? (
        <section className="rounded-2xl border p-4 space-y-3">
          <h2 className="text-lg font-semibold">推荐专题入口</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {topics.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl border p-3 hover:bg-slate-50"
              >
                <div className="font-medium">{item.title}</div>
                <div className="text-sm text-slate-600 mt-1">{item.summary}</div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <section className="rounded-2xl border p-4 space-y-3">
        <h2 className="text-lg font-semibold">相关常见问题</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {faqLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl border p-3 hover:bg-slate-50"
            >
              <div className="font-medium">{item.title}</div>
              <div className="text-sm text-slate-600 mt-1">{item.summary}</div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}