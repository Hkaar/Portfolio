import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import 'material-symbols';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

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
      <body className={`${inter} antialiased dark:bg-base-dark dark:text-base-light fill-base-dark dark:fill-base-light`}>
        {children}
      </body>
    </html>
  );
}
