import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shava Jaya’s Portfolio",
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
        className={`${inter} antialiased bg-base-light dark:bg-base-dark dark:text-base-light fill-base-dark dark:fill-base-light overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
