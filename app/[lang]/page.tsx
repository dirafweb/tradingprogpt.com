import type { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"
import { SpecialOfferSection } from "@/components/special-offer-section"
import { VideoSection } from "@/components/video-section"
import { WhySection } from "@/components/why-section"
import { DualAccessSection } from "@/components/dual-access-section"
import { HowSubscriptionWorks } from "@/components/how-subscription-works"
import { ProBenefitsSection } from "@/components/pro-benefits-section"
import { SuggestedPromptsSection } from "@/components/suggested-prompts-section"
import { SupportedAssetsSection } from "@/components/supported-assets-section"
import { TimeSeriesSection } from "@/components/time-series-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { UserStorySection } from "@/components/user-story-section"
import { FeaturesSection } from "@/components/features-section"
import { FAQSection } from "@/components/faq-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { RiskDisclaimer } from "@/components/risk-disclaimer"

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const { lang } = params

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: `https://tradingprogpt.com/${lang}`,
    name:
      lang === "es"
        ? "Trading Pro GPT - Señales de Trading con IA | Página Principal"
        : "Trading Pro GPT - AI Trading Signals & Insights | Home Page",
    description:
      lang === "es"
        ? "Página principal de Trading Pro GPT. Tu copiloto IA para trading con señales en tiempo real, análisis profesional y acceso a más de 35,000 activos financieros."
        : "Trading Pro GPT home page. Your AI co-pilot for trading with real-time signals, professional analysis, and access to over 35,000 financial assets.",
    inLanguage: lang,
    mainEntity: {
      "@type": "SoftwareApplication",
      name: "Trading Pro GPT",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web Browser",
      description:
        lang === "es"
          ? "Aplicación de trading con IA que proporciona señales en tiempo real y análisis profesional"
          : "AI-powered trading application providing real-time signals and professional analysis",
      offers: {
        "@type": "Offer",
        price: "30",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    },
  }

  return {
    other: {
      "script:ld+json": JSON.stringify(webPageSchema),
    },
  }
}

export default function LandingPage({ params }: { params: { lang: string } }) {
  return (
    <>
      <HeroSection lang={params.lang} />
      <SpecialOfferSection lang={params.lang} />
      <VideoSection lang={params.lang} />
      <WhySection lang={params.lang} />
      <DualAccessSection lang={params.lang} />
      <HowSubscriptionWorks lang={params.lang} />
      <ProBenefitsSection lang={params.lang} />
      <SuggestedPromptsSection lang={params.lang} />
      <SupportedAssetsSection lang={params.lang} />
      <TimeSeriesSection lang={params.lang} />
      <HowItWorksSection lang={params.lang} />
      <UserStorySection lang={params.lang} />
      <FeaturesSection lang={params.lang} />
      <FAQSection lang={params.lang} />
      <FinalCTASection lang={params.lang} />
      <RiskDisclaimer lang={params.lang} />
    </>
  )
}
