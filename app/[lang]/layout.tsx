import type React from "react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

const languages = ["en", "es"]

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const { lang } = params

  if (lang === "es") {
    return {
      title: "Trading Pro GPT - Señales de Trading con IA | Prueba Gratis 14 Días",
      description:
        "Tu copiloto IA para Stocks, Forex y Cripto. Señales en tiempo real, consultas ilimitadas, análisis profesional. ¡Prueba 14 días gratis! Por Xentris.tech, OpenAI Plus y TwelveData.",
      alternates: {
        canonical: "https://tradingprogpt.com/es",
        languages: {
          en: "https://tradingprogpt.com/en",
          es: "https://tradingprogpt.com/es",
        },
      },
      openGraph: {
        type: "website",
        locale: "es_ES",
        url: "https://tradingprogpt.com/es",
        title: "Trading Pro GPT - Señales de Trading con IA | Prueba Gratis 14 Días",
        description:
          "Tu copiloto IA para Stocks, Forex y Cripto. Señales en tiempo real, consultas ilimitadas, análisis profesional. ¡Prueba 14 días gratis!",
        siteName: "Trading Pro GPT",
        images: [
          {
            url: "/og-image-es.png",
            width: 1200,
            height: 630,
            alt: "Trading Pro GPT - Señales de Trading con IA",
            type: "image/jpeg",
          },
          {
            url: "/og-image-square-es.png",
            width: 1200,
            height: 1200,
            alt: "Trading Pro GPT - Plataforma de Trading con IA",
            type: "image/jpeg",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        site: "@tradingprogpt",
        creator: "@xentristech",
        title: "Trading Pro GPT - Señales de Trading con IA | Prueba Gratis 14 Días",
        description:
          "Tu copiloto IA para Stocks, Forex y Cripto. Señales en tiempo real, consultas ilimitadas, análisis profesional. ¡Prueba 14 días gratis!",
        images: [
          {
            url: "/twitter-image-es.png",
            width: 1200,
            height: 630,
            alt: "Trading Pro GPT - Señales de Trading con IA",
          },
        ],
      },
      other: {
        "script:ld+json": JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: "https://tradingprogpt.com/es",
          name: "Trading Pro GPT - Señales de Trading con IA",
          description:
            "Tu copiloto IA para Stocks, Forex y Cripto. Señales en tiempo real, consultas ilimitadas, análisis profesional. ¡Prueba 14 días gratis! Por Xentris.tech, OpenAI Plus y TwelveData.",
          inLanguage: "es",
          isPartOf: {
            "@type": "WebSite",
            name: "Trading Pro GPT",
            url: "https://tradingprogpt.com",
          },
          about: {
            "@type": "SoftwareApplication",
            name: "Trading Pro GPT",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Web Browser",
            offers: {
              "@type": "Offer",
              price: "50",
              priceCurrency: "USD",
              priceValidUntil: "2025-12-31",
              availability: "https://schema.org/InStock",
            },
          },
        }),
      },
    }
  }

  return {
    title: "Trading Pro GPT - AI Trading Signals & Insights | 14-Day Free Trial",
    description:
      "Your AI co-pilot for Stocks, Forex & Crypto. Real-time signals, unlimited queries, professional analysis. Try 14 days free! Powered by Xentris.tech, OpenAI Plus & TwelveData.",
    alternates: {
      canonical: "https://tradingprogpt.com/en",
      languages: {
        en: "https://tradingprogpt.com/en",
        es: "https://tradingprogpt.com/es",
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://tradingprogpt.com/en",
      title: "Trading Pro GPT - AI Trading Signals & Insights | 14-Day Free Trial",
      description:
        "Your AI co-pilot for Stocks, Forex & Crypto. Real-time signals, unlimited queries, professional analysis. Try 14 days free!",
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
      title: "Trading Pro GPT - AI Trading Signals & Insights | 14-Day Free Trial",
      description:
        "Your AI co-pilot for Stocks, Forex & Crypto. Real-time signals, unlimited queries, professional analysis. Try 14 days free!",
      images: [
        {
          url: "/twitter-image-en.png",
          width: 1200,
          height: 630,
          alt: "Trading Pro GPT - AI Trading Signals & Insights",
        },
      ],
    },
    other: {
      "script:ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        url: "https://tradingprogpt.com/en",
        name: "Trading Pro GPT - AI Trading Signals & Insights",
        description:
          "Your AI co-pilot for Stocks, Forex & Crypto. Real-time signals, unlimited queries, professional analysis. Try 14 days free! Powered by Xentris.tech, OpenAI Plus & TwelveData.",
        inLanguage: "en",
        isPartOf: {
          "@type": "WebSite",
          name: "Trading Pro GPT",
          url: "https://tradingprogpt.com",
        },
        about: {
          "@type": "SoftwareApplication",
          name: "Trading Pro GPT",
          applicationCategory: "FinanceApplication",
          operatingSystem: "Web Browser",
          offers: {
            "@type": "Offer",
            price: "50",
            priceCurrency: "USD",
            priceValidUntil: "2025-12-31",
            availability: "https://schema.org/InStock",
          },
        },
      }),
    },
  }
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  if (!languages.includes(params.lang)) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      <Header lang={params.lang} />
      <main>{children}</main>
      <Footer lang={params.lang} />
      <CookieBanner lang={params.lang} />
    </div>
  )
}
