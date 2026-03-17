import Link from "next/link";

type LinkItem = {
  href: string;
  title: string;
  summary: string;
};

const allFaqLinks: (LinkItem & { keyword: string })[] = [
  {
    href: "/faq/kesou-xian-kan-nage-ke",
    title: "咳嗽先看哪个科？",
    summary: "咳嗽一般优先考虑呼吸内科。",
    keyword: "kesou",
  },
  {
    href: "/faq/kesou-gua-huxineike-ma",
    title: "咳嗽挂呼吸内科吗？",
    summary: "大多数咳嗽可以先挂呼吸内科。",
    keyword: "kesou",
  },
  {
    href: "/faq/toutong-kan-shenme-ke",
    title: "头痛看什么科？",
    summary: "头痛多数建议先看神经内科。",
    keyword: "toutong",
  },
  {
    href: "/faq/weitong-kan-xiaohua-neike-ma",
    title: "胃痛看消化内科吗？",
    summary: "胃痛多数建议看消化内科。",
    keyword: "weitong",
  },
  {
    href: "/faq/xiongtong-gua-shenme-ke",
    title: "胸痛挂什么科？",
    summary: "胸痛建议优先考虑心内科。",
    keyword: "xiongtong",
  },
  {
    href: "/faq/xiongmen-kan-shenme-ke",
    title: "胸闷看什么科？",
    summary: "胸闷可先看心内科或呼吸内科。",
    keyword: "xiongmen",
  },
  {
    href: "/faq/xinhuang-gua-xinneike-ma",
    title: "心慌挂心内科吗？",
    summary: "心慌通常可以挂心内科。",
    keyword: "xinhuang",
  },
  {
    href: "/faq/touyun-kan-shenme-ke",
    title: "头晕看什么科？",
    summary: "头晕通常建议先看神经内科。",
    keyword: "touyun",
  },
  {
    href: "/faq/houlongtong-kan-shenme-ke",
    title: "喉咙痛看什么科？",
    summary: "喉咙痛一般可以看耳鼻喉科。",
    keyword: "houlongtong",
  },
  {
    href: "/faq/fashao-kesou-kan-shenme-ke",
    title: "发烧咳嗽看什么科？",
    summary: "发烧伴咳嗽通常建议看内科或呼吸内科。",
    keyword: "fashao",
  },
];

function getKeywordFromGuideSlug(guideSlug?: string) {
  if (!guideSlug) return "";

  const keywordMap = [
    "kesou",
    "toutong",
    "weitong",
    "xiongtong",
    "xiongmen",
    "xinhuang",
    "touyun",
    "houlongtong",
    "fashao",
    "futong",
    "fansuan",
    "liubiti",
    "bisai",
    "huxikunnan",
    "piantoutong",
    "shimian",
    "jiaolv",
    "yiyu",
  ];

  return keywordMap.find((item) => guideSlug.includes(item)) || "";
}

export default function GuideMoreLinks({
  symptoms,
  topics,
  guideSlug,
}: {
  symptoms: LinkItem[];
  topics: LinkItem[];
  guideSlug?: string;
}) {
  const keyword = getKeywordFromGuideSlug(guideSlug);

  const faqLinks = keyword
    ? allFaqLinks.filter((item) => item.keyword === keyword)
    : allFaqLinks.slice(0, 4);

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

      {faqLinks.length > 0 ? (
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
      ) : null}
    </>
  );
}