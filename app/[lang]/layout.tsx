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
      title: "Trading Pro GPT - Señales de Trading con IA | Prueba Gratis 5 Días",
      description:
        "Tu copiloto IA para Stocks, Forex y Cripto. Señales en tiempo real, consultas ilimitadas, análisis profesional. ¡Prueba 5 días gratis! Por Xentris.tech, OpenAI Plus y TwelveData.",
      alternates: {
        canonical: "https://tradingprogpt.com/es",
        languages: {
          en: "https://tradingprogpt.com/en",
          es: "https://tradingprogpt.com/es",
        },
      },
    }
  }

  return {
    title: "Trading Pro GPT - AI Trading Signals & Insights | 5-Day Free Trial",
    description:
      "Your AI co-pilot for Stocks, Forex & Crypto. Real-time signals, unlimited queries, professional analysis. Try 5 days free! Powered by Xentris.tech, OpenAI Plus & TwelveData.",
    alternates: {
      canonical: "https://tradingprogpt.com/en",
      languages: {
        en: "https://tradingprogpt.com/en",
        es: "https://tradingprogpt.com/es",
      },
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
