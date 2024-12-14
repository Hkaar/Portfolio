import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const notoSans = Noto_Sans({
  subsets: ['latin'],
  display: "swap",
})

const WEBSITE_URL = "https://hkaar.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(WEBSITE_URL),
  title: {
    default: "Shava Jaya's Portfolio",
    template: "%s | Shava Jaya Portfolio"
  },
  description: "Shava Jaya is a skilled full stack developer creating innovative web solutions. Explore my projects, skills, and professional journey.",
  applicationName: "Shava Jaya Portfolio",
  keywords: [
    "Shava Jaya",
    "portfolio",
    "full stack developer",
    "web developer",
    "React",
    "Next.js",
    "software engineer"
  ],
  authors: [{ name: "Shava Jaya" }],
  creator: "Shava Jaya",
  publisher: "Shava Jaya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: WEBSITE_URL,
    siteName: "Shava Jaya Portfolio",
    title: "Shava Jaya's Portfolio",
    description: "Discover the professional portfolio of Shava Jaya, a full stack developer specializing in modern web technologies.",
    images: [
      {
        url: "/images/preview.png",
        width: 1200,
        height: 630,
        alt: "Shava Jaya - Full Stack Developer Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Shava Jaya's Portfolio",
    description: "Explore the professional portfolio of a skilled full stack developer.",
    images: ["/images/preview.png"]
  },
  alternates: {
    canonical: WEBSITE_URL
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${notoSans.className} antialiased bg-body-light text-text-light dark:bg-body-dark dark:text-text-dark fill-text-light dark:fill-text-dark overflow-x-hidden`}
      >
        {children}
        <Toaster richColors position="bottom-left" />
      </body>
    </html>
  );
}
