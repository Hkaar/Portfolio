import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "My personal online portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter} antialiased dark:bg-base-dark dark:text-base-light fill-base-dark dark:fill-base-light overflow-x-hidden`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
