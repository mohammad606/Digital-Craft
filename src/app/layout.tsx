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
    title: "Digital Craft",
    description: "The best place to develop your project's future",
    openGraph: {
        title: "Digital Craft",
        description: "The best place to develop your project's future",
        url: "https://www.jimraptis.com",
        siteName: "Digital Craft",
        images: [
            {
                url: "https://storage.googleapis.com/brandflow-bucket/personal/blog/portfolio-og.jpg",
                width: 1200,
                height: 630,
                alt: "Digital Craft",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        site: "@d__raptis",
        creator: "@d__raptis",
        title: "Digital Craft",
        description: "The best place to develop your project's future",
        images: [
            {
                url: "https://storage.googleapis.com/brandflow-bucket/personal/blog/portfolio-og.jpg",
                width: 1200,
                height: 630,
                alt: "Digital Craft",
            },
        ],
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gray`}
      >
        {children}
      </body>
    </html>
  );
}