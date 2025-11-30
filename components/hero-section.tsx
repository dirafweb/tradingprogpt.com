import { Button } from "@/components/ui/button"
import { Star, Users, BookOpen } from "lucide-react"
import Link from "next/link"
import Spline from "@splinetool/react-spline/next"

interface HeroSectionProps {
  lang: string
}

export function HeroSection({ lang }: HeroSectionProps) {
  const content = {
    en: {
      tagline: "AI-Powered Market Learning Tool",
      subtitle:
        "Understand financial markets using real-time data and intelligent insights. Designed for educational purposes to help users improve their market awareness and analytical skills.",
      cta: "Start Exploring",
      rating: "4.5",
      category: "Education & Analysis",
      users: "11,663 conversations",
      poweredBy: "Powered by Xentris.tech, OpenAI & TwelveData",
    },
    es: {
      tagline: "Herramienta de Aprendizaje de Mercados con IA",
      subtitle:
        "Comprende los mercados financieros usando datos en tiempo real e insights inteligentes. Diseñado con fines educativos para ayudar a los usuarios a mejorar su conocimiento del mercado y habilidades analíticas.",
      cta: "Comenzar a Explorar",
      rating: "4.5",
      category: "Educación y Análisis",
      users: "11,663 conversaciones",
      poweredBy: "Desarrollado por Xentris.tech, OpenAI y TwelveData",
    },
  }

  const t = content[lang as keyof typeof content] || content.en

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1B123F] via-[#0D0D0D] to-[#331659] opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - 3D Mockup */}
          <div className="order-2 lg:order-1">
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#1B123F]/30 to-[#331659]/30 backdrop-blur-sm border border-[#331659]/50">
              <Spline scene="https://prod.spline.design/eIeMRxknmeJbGH5X/scene.splinecode" />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            {/* Powered by badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#1B123F]/50 border border-[#331659] mb-6">
              <span className="text-sm text-gray-300">{t.poweredBy}</span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[#8B3BC0] to-white bg-clip-text text-transparent leading-tight">
              {t.tagline}
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">{t.subtitle}</p>

            {/* CTA Button */}
            <div className="mb-8">
              <Button
                asChild
                size="lg"
                className="bg-[#8B3BC0] hover:bg-[#8B3BC0]/80 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="https://chatgpt.com/g/g-Apjq2CgWQ-trading-pro-gpt-trading-signals-insights" target="_blank">
                  {t.cta}
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-semibold">{t.rating}</span>
              </div>

              <div className="hidden sm:block w-px h-6 bg-gray-600" />

              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-[#8B3BC0]" />
                <span>{t.category}</span>
              </div>

              <div className="hidden sm:block w-px h-6 bg-gray-600" />

              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-[#8B3BC0]" />
                <span>{t.users}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-[#8B3BC0]/20 rounded-full blur-xl" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-[#331659]/30 rounded-full blur-xl" />
    </section>
  )
}
