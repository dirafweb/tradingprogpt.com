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
