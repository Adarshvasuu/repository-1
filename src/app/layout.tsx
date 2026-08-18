import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Adarsh Vasu — AI Engineer & Full Stack Developer",
  description: "Building intelligent systems at the intersection of ML, distributed systems, and human-centered design.",
  keywords: ["AI Engineer", "Full Stack Developer", "Machine Learning", "Next.js", "React", "TypeScript", "Portfolio"],
  authors: [{ name: "Adarsh Vasu" }],
  creator: "Adarsh Vasu",
  publisher: "Adarsh Vasu",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adarshvasu.dev",
    title: "Adarsh Vasu — AI Engineer & Full Stack Developer",
    description: "Building intelligent systems at the intersection of ML, distributed systems, and human-centered design.",
    siteName: "Adarsh Vasu Portfolio",
    images: [
      {
        url: "https://picsum.photos/seed/adarsh-og/1200/630",
        width: 1200,
        height: 630,
        alt: "Adarsh Vasu — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adarsh Vasu — AI Engineer & Full Stack Developer",
    description: "Building intelligent systems at the intersection of ML, distributed systems, and human-centered design.",
    images: ["https://picsum.photos/seed/adarsh-og/1200/630"],
    creator: "@adarshvasu",
  },
  verification: {
    google: "google-site-verification-code",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf9fc" },
    { media: "(prefers-color-scheme: dark)", color: "#08060b" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://picsum.photos" />
      </head>
      <body className="min-h-screen bg-bg text-ink antialiased">
        <div id="cursor-follower" className="cursor-follower" aria-hidden="true" />
        <div id="scroll-progress" className="scroll-progress" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}