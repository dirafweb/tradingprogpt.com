import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Rocket, TrendingUp, Zap } from "lucide-react"
import Link from "next/link"

interface FinalCTASectionProps {
  lang: string
}

export function FinalCTASection({ lang }: FinalCTASectionProps) {
  const content = {
    en: {
      emoji: "🚀",
      title: "Take your trading to the next level",
      question:
        "Did you know that the most successful traders use tools that allow them to react quickly, with confidence and without doubts?",
      description:
        "At Trading Pro GPT we combine the best artificial intelligence with real-time analysis so you're always one step ahead.",
      motivation: "Become the trader you've always wanted to be.",
      cta: "Start today and experience the difference.",
      buttonText: "Start Trading Like a Pro",
      features: ["React faster", "Trade with confidence", "Stay ahead"],
    },
    es: {
      emoji: "🚀",
      title: "Lleva tu trading al siguiente nivel",
      question:
        "¿Sabías que los traders más exitosos usan herramientas que les permiten reaccionar rápido, con confianza y sin dudas?",
      description:
        "En Trading Pro GPT combinamos la mejor inteligencia artificial con análisis en tiempo real para que siempre vayas un paso adelante.",
      motivation: "Conviértete en el trader que siempre quisiste ser.",
      cta: "Empieza hoy y vive la diferencia.",
      buttonText: "Comenzar a Operar como un Pro",
      features: ["Reacciona más rápido", "Opera con confianza", "Mantente adelante"],
    },
  }

  const t = content[lang as keyof typeof content] || content.en

  return (
    <section className="py-20 bg-gradient-to-br from-[#1B123F] via-[#331659] to-[#8B3BC0]/20">
      <div className="container mx-auto px-4">
        <Card className="max-w-5xl mx-auto bg-gradient-to-br from-[#0D0D0D]/90 to-[#1B123F]/90 border-[#8B3BC0]/50 shadow-2xl backdrop-blur-sm">
          <CardContent className="p-8 md:p-16 text-center">
            {/* Emoji and title */}
            <div className="text-6xl mb-6">{t.emoji}</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white leading-tight">{t.title}</h2>

            {/* Question */}
            <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed max-w-4xl mx-auto">{t.question}</p>

            {/* Description */}
            <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">{t.description}</p>

            {/* Features */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
              {t.features.map((feature, index) => {
                const icons = [Zap, TrendingUp, Rocket]
                const Icon = icons[index]
                return (
                  <div
                    key={index}
                    className="flex items-center bg-[#8B3BC0]/20 px-4 py-2 rounded-full border border-[#8B3BC0]/30"
                  >
                    <Icon className="h-5 w-5 text-[#8B3BC0] mr-2" />
                    <span className="text-white font-medium">{feature}</span>
                  </div>
                )
              })}
            </div>

            {/* Motivation */}
            <p className="text-2xl font-bold text-[#8B3BC0] mb-4">{t.motivation}</p>

            {/* CTA */}
            <p className="text-xl text-gray-300 mb-8">{t.cta}</p>

            {/* Button */}
            <Button
              asChild
              size="lg"
              className="bg-[#8B3BC0] hover:bg-[#8B3BC0]/80 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Link href="https://chatgpt.com/g/g-Apjq2CgWQ-trading-pro-gpt-trading-signals-insights" target="_blank">
                <Rocket className="h-6 w-6 mr-3" />
                {t.buttonText}
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
