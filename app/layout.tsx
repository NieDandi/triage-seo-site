import type { Metadata } from "next";
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
    "通过症状页、专题页、科室页与导诊问答，帮助用户快速判断挂什么科，并提示何时需要急诊（仅用于导诊分流，不提供诊断与治疗）。",
  applicationName: "智能导诊",
  keywords: [
    "挂什么科",
    "症状导诊",
    "智能导诊",
    "症状目录",
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
      "通过症状页、专题页、科室页与导诊问答，帮助用户快速判断挂什么科，并提示何时需要急诊。",
    url: "https://triage-seo-site.vercel.app",
    siteName: "智能导诊",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "智能导诊｜不知道挂哪个科？",
    description:
      "通过症状页、专题页、科室页与导诊问答，帮助用户快速判断挂什么科，并提示何时需要急诊。",
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
      "通过症状页、专题页、科室页与导诊问答，帮助用户快速判断挂什么科，并提示何时需要急诊（仅用于导诊分流，不提供诊断与治疗）。",
    inLanguage: "zh-CN",
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "智能导诊",
    url: "https://triage-seo-site.vercel.app",
    description:
      "中文医疗导诊分流工具，提供症状页、专题页、科室页与导诊问答。",
  };

  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}