import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { faqs } from "@/data/faqs";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return faqs.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const faq = faqs.find((item) => item.slug === slug);

  if (!faq) {
    return {
      title: "页面不存在",
    };
  }

  return {
    title: `${faq.question}｜挂什么科`,
    description: faq.shortAnswer,
  };
}

export default async function FAQDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const faq = faqs.find((item) => item.slug === slug);

  if (!faq) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <nav className="mb-6 text-sm text-neutral-600">
        <Link href="/" className="hover:underline">
          首页
        </Link>
        {" / "}
        <Link href="/faq" className="hover:underline">
          FAQ
        </Link>
        {" / "}
        <span>{faq.question}</span>
      </nav>

      <h1 className="mb-4 text-3xl font-bold">{faq.question}</h1>

      <div className="rounded-xl border p-5">
        <p className="leading-7 text-neutral-800">
          <strong>快速回答：</strong>
          {faq.shortAnswer}
        </p>
      </div>
    </main>
  );
}