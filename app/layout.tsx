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
  title: "Кварта — обжарка кофе в Минске",
  description:
      "Обжариваем по четвергам, доставляем по пятницам. Кофе небольшими партиями — разовый заказ или подписка.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
        lang="ru"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
