import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://triage-seo-site.vercel.app"),
  title: {
    default: "智能导诊｜不知道挂哪个科？",
    template: "%s｜智能导诊",
  },
  description:
    "通过症状页、专题页、科室页、导诊指南与导诊问答，帮助用户快速判断挂什么科，并提示何时需要急诊（仅用于导诊分流，不提供诊断与治疗）。",
  applicationName: "智能导诊",
  keywords: [
    "挂什么科",
    "症状导诊",
    "智能导诊",
    "症状目录",
    "症状专题",
    "导诊指南",
    "科室选择",
    "呼吸内科",
    "消化内科",
    "神经内科",
    "骨科",
    "皮肤科",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "PJcW5eG8rYh91D8xg3xmTR2cOAEUjblq-j5wTl4CcDE",
  },
  openGraph: {
    title: "智能导诊｜不知道挂哪个科？",
    description:
      "通过症状页、专题页、科室页、导诊指南与导诊问答，帮助用户快速判断挂什么科，并提示何时需要急诊。",
    url: "https://triage-seo-site.vercel.app",
    siteName: "智能导诊",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "智能导诊｜不知道挂哪个科？",
    description:
      "通过症状页、专题页、科室页、导诊指南与导诊问答，帮助用户快速判断挂什么科，并提示何时需要急诊。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "智能导诊",
    url: "https://triage-seo-site.vercel.app",
    description:
      "通过症状页、专题页、科室页、导诊指南与导诊问答，帮助用户快速判断挂什么科，并提示何时需要急诊（仅用于导诊分流，不提供诊断与治疗）。",
    inLanguage: "zh-CN",
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "智能导诊",
    url: "https://triage-seo-site.vercel.app",
    description:
      "中文医疗导诊分流工具，提供症状页、专题页、科室页、导诊指南与导诊问答。",
  };

  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />

        <div className="min-h-screen">
          <header className="border-b bg-white/95 backdrop-blur">
            <div className="mx-auto max-w-6xl px-4 py-4">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="space-y-1">
                  <Link href="/" className="text-xl font-semibold hover:text-cyan-700">
                    智能导诊
                  </Link>
                  <div className="text-sm text-slate-600">
                    症状、专题、指南、科室与导诊工具的一体化入口
                  </div>
                </div>

                <nav className="flex flex-wrap gap-2">
                  <Link
                    href="/"
                    className="rounded-lg border px-3 py-2 text-sm hover:bg-slate-50"
                  >
                    首页
                  </Link>
                  <Link
                    href="/guides"
                    className="rounded-lg border px-3 py-2 text-sm hover:bg-slate-50"
                  >
                    导诊指南
                  </Link>
                  <Link
                    href="/topics"
                    className="rounded-lg border px-3 py-2 text-sm hover:bg-slate-50"
                  >
                    症状专题
                  </Link>
                  <Link
                    href="/symptoms"
                    className="rounded-lg border px-3 py-2 text-sm hover:bg-slate-50"
                  >
                    症状目录
                  </Link>
                  <Link
                    href="/departments"
                    className="rounded-lg border px-3 py-2 text-sm hover:bg-slate-50"
                  >
                    科室目录
                  </Link>
                  <Link
                    href="/triage"
                    className="rounded-lg border border-cyan-600 bg-cyan-600 px-3 py-2 text-sm text-white hover:bg-cyan-700"
                  >
                    开始导诊
                  </Link>
                </nav>
              </div>
            </div>
          </header>

          {children}
        </div>
      </body>
    </html>
  );
}