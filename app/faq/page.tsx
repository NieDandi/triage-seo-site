import type { Metadata } from "next";
import Link from "next/link";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "导诊问答 FAQ｜挂什么科",
  description: "常见症状导诊问答，如咳嗽看什么科、头痛挂什么科、胃痛先看哪个科。",
};

export default function FAQPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-bold">导诊问答 FAQ</h1>
      <div className="space-y-4">
        {faqs.map((item) => (
          <Link
            key={item.slug}
            href={`/faq/${item.slug}`}
            className="block rounded-xl border p-4 hover:bg-neutral-50"
          >
            <h2 className="mb-2 text-lg font-semibold">{item.question}</h2>
            <p className="text-sm text-neutral-700">{item.shortAnswer}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}