import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://omnitrix.com'),
  title: "OmniTrix - The On-Chain Brain of the Real World",
  description: "Where IoT meets intelligence to make supply chains self-driving. Autonomous on-chain intelligence platform connecting AI agents, IoT, and blockchain technology.",
  keywords: ["IoT", "blockchain", "AI", "supply chain", "autonomous", "on-chain", "intelligence"],
  authors: [{ name: "OmniTrix" }],
  creator: "OmniTrix",
  publisher: "OmniTrix",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://omnitrix.com",
    siteName: "OmniTrix",
    title: "OmniTrix - The On-Chain Brain of the Real World",
    description: "Where IoT meets intelligence to make supply chains self-driving. Autonomous on-chain intelligence platform connecting AI agents, IoT, and blockchain technology.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OmniTrix - The On-Chain Brain of the Real World",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OmniTrix - The On-Chain Brain of the Real World",
    description: "Where IoT meets intelligence to make supply chains self-driving.",
    images: ["/og-image.png"],
    creator: "@omnitrix",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo.svg" />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#00E7FF" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
