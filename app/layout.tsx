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
  title: "智能导诊：不知道挂哪科？",
  description:
    "根据症状推荐挂号科室，并提示急诊危险信号与就诊准备（仅用于医疗导诊分流）。",

  // Google Search Console 验证
  verification: {
    google: "PJcW5eG8rYh91D8xg3xmTR2cOAEUjblq-j5wTl4CcDE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}