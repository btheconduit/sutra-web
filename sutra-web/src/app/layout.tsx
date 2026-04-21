import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeInit } from "./components/ThemeInit";
import { SWRegister } from "./components/SWRegister";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Sutra",
  description: "A Sanskrit lookup tool for Vedanta study",
  metadataBase: new URL("https://sutra.so"),
  manifest: "/manifest.json",
  openGraph: {
    title: "Sutra",
    description: "A Sanskrit lookup tool for Vedanta study",
    url: "https://sutra.so",
    siteName: "Sutra",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sutra — A Sanskrit lookup tool for Vedanta study",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sutra",
    description: "A Sanskrit lookup tool for Vedanta study",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0c0e" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="h-full flex flex-col">
        <ThemeInit />
        <SWRegister />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
