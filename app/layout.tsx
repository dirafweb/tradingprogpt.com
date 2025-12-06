import type React from "react"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

import { Inter, Source_Serif_4, JetBrains_Mono } from "next/font/google"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-serif",
})
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Trading Pro GPT - AI Trading Signals & Insights | Enterprise Business",
  description:
    "Your AI co-pilot for Stocks, Forex & Crypto. Real-time signals, 360° analysis, and actionable strategies. Powered by Xentris.tech, OpenAI AI, and TwelveData.",
  metadataBase: new URL("https://tradingprogpt.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tradingprogpt.com",
    title: "Trading Pro GPT - AI Trading Signals & Insights | Enterprise Business",
    description:
      "Your AI co-pilot for Stocks, Forex & Crypto. Real-time signals, 360° analysis, and actionable strategies. Powered by Xentris.tech, OpenAI AI, and TwelveData.",
    siteName: "Trading Pro GPT",
    images: [
      {
        url: "/og-image-en.png",
        width: 1200,
        height: 630,
        alt: "Trading Pro GPT - AI Trading Signals & Insights",
        type: "image/jpeg",
      },
      {
        url: "/og-image-square-en.png",
        width: 1200,
        height: 1200,
        alt: "Trading Pro GPT - AI Trading Platform",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tradingprogpt",
    creator: "@xentristech",
    title: "Trading Pro GPT - AI Trading Signals & Insights | Enterprise Business",
    description:
      "Your AI co-pilot for Stocks, Forex & Crypto. Real-time signals, unlimited queries, professional analysis.",
    images: [
      {
        url: "/twitter-image-en.png",
        width: 1200,
        height: 630,
        alt: "Trading Pro GPT - AI Trading Signals & Insights",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "rHX8wKlluJ-AaLiDah-bu8hBSspBh2VJx7aX7Jm905Q",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17766628449"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17766628449');
            `,
          }}
        />

        {/* Hreflang tags */}
        <link rel="alternate" hrefLang="es" href="https://tradingprogpt.com/es" />
        <link rel="alternate" hrefLang="en" href="https://tradingprogpt.com/en" />
        <link rel="alternate" hrefLang="x-default" href="https://tradingprogpt.com" />

        {/* Google Site Verification */}
        <meta name="google-site-verification" content="rHX8wKlluJ-AaLiDah-bu8hBSspBh2VJx7aX7Jm905Q" />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Xentris.tech",
              url: "https://xentris.tech",
              logo: "https://tradingprogpt.com/logo-xentris.svg",
              sameAs: ["https://linkedin.com/company/xentris", "https://twitter.com/xentris"],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Trading Pro GPT",
              url: "https://tradingprogpt.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://tradingprogpt.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${sourceSerif.variable} ${jetbrainsMono.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
