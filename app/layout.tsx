import type { Metadata } from "next";
import { Unbounded } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
    variable: "--font-unbounded",
    subsets: ["latin", "cyrillic"],
    weight: ["400", "500", "600"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Кварта — обжарка кофе в Минске",
    description:
        "Обжариваем по четвергам, доставляем по пятницам. Кофе небольшими партиями — разовый заказ или подписка.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="ru" className={`${unbounded.variable} h-full antialiased`}>
        <body className="min-h-full flex flex-col">
        {children}
        </body>
        </html>
    );
}