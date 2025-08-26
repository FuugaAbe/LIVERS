import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingEntryButton } from "@/components/layout/FloatingEntryButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "StarMusic Livers - 音楽ライバー募集",
  description: "音楽アーティストの夢を追いかけるライバーのためのコミュニティ。プロの環境とサポート体制で、あなたの才能を世界に届けます。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${inter.variable} ${notoSansJP.variable} antialiased`}
      >
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
        <FloatingEntryButton />
      </body>
    </html>
  );
}
