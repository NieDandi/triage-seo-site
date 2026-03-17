import type { Metadata } from "next";
import Link from "next/link";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "导诊问答 FAQ｜挂什么科",
  description:
    "收录常见症状导诊问答，如咳嗽看什么科、头痛挂什么科、胃痛先看哪个科，帮助快速找到合适就诊方向。",
  alternates: {
    canonical: "/faq",
  },
};

function FAQListJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "导诊问答 FAQ",
    description: "常见症状挂什么科的导诊问答列表",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function FAQListPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <FAQListJsonLd />

      <header className="mb-8">
        <h1 className="mb-3 text-3xl font-bold tracking-tight">导诊问答 FAQ</h1>
        <p className="max-w-3xl leading-7 text-neutral-700">
          这里整理了常见“挂什么科”的问题。页面仅用于导诊分流参考，不替代医生面诊。
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        {faqs.map((item) => (
          <Link
            key={item.slug}
            href={`/faq/${item.slug}`}
            className="rounded-2xl border bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:bg-neutral-50"
          >
            <h2 className="mb-2 text-lg font-semibold">{item.question}</h2>
            <p className="line-clamp-3 text-sm leading-6 text-neutral-700">
              {item.shortAnswer}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}