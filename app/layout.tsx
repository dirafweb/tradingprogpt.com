import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Trading Pro GPT - AI Trading Signals & Insights",
  description:
    "Your AI co-pilot for Stocks, Forex & Crypto. Real-time signals, 360° analysis, and actionable strategies. Powered by Xentris.tech, OpenAI AI, and TwelveData.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Hreflang tags */}
        <link rel="alternate" hrefLang="es" href="https://tradingprogpt.com/es" />
        <link rel="alternate" hrefLang="en" href="https://tradingprogpt.com/en" />
        <link rel="alternate" hrefLang="x-default" href="https://tradingprogpt.com" />

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
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
