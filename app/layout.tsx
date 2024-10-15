import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import 'material-symbols';

const inter = localFont({
  src: "./fonts/Inter.ttf",
  variable: "--font-inter",
  weight: "100 900",
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
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased dark:bg-base-dark dark:text-base-light fill-base-dark dark:fill-base-light`}>
        {children}
      </body>
    </html>
  );
}
