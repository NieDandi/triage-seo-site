import Link from "next/link";

type LinkItem = {
  href: string;
  title: string;
  summary: string;
};

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
    </>
  );
}