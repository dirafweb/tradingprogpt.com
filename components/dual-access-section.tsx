import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Zap, Target, Shield, Clock } from "lucide-react"

interface DualAccessSectionProps {
  lang: string
}

export function DualAccessSection({ lang }: DualAccessSectionProps) {
  const content = {
    en: {
      title: "Why do you need both accesses?",
      subtitle: "The winning formula:",
      openaiTitle: "OpenAI Plus",
      openaiPrice: "$20 USD/month",
      openaiDescription: "Your AI engine: speed, power and unlimited responses.",
      tradingTitle: "Trading Pro GPT",
      tradingPrice: "$30 USD/month",
      tradingDescription:
        "Your trading expert: personalized signals, real-time data, technical/fundamental analysis, adapted strategies and priority support.",
      resultTitle: "The result?",
      benefits: ["Safer decisions", "Less stress", "More clarity", "Optimal reaction time"],
      totalPrice: "$50 USD/month",
      totalDescription: "Complete professional trading solution",
    },
    es: {
      title: "¿Por qué necesitas ambos accesos?",
      subtitle: "La fórmula ganadora:",
      openaiTitle: "OpenAI Plus",
      openaiPrice: "$20 USD/mes",
      openaiDescription: "Tu motor de IA: velocidad, potencia y respuestas ilimitadas.",
      tradingTitle: "Trading Pro GPT",
      tradingPrice: "$30 USD/mes",
      tradingDescription:
        "Tu experto de trading: señales personalizadas, datos en tiempo real, análisis técnico/fundamental, estrategias adaptadas y soporte prioritario.",
      resultTitle: "¿El resultado?",
      benefits: ["Decisiones más seguras", "Menos estrés", "Más claridad", "Tiempo de reacción óptimo"],
      totalPrice: "$50 USD/mes",
      totalDescription: "Solución completa de trading profesional",
    },
  }

  const t = content[lang as keyof typeof content] || content.en

  return (
    <section className="py-20 bg-gradient-to-b from-[#1B123F]/20 to-[#0D0D0D]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">{t.title}</h2>
          <p className="text-2xl text-[#8B3BC0] font-semibold">{t.subtitle}</p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Two services comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* OpenAI Plus */}
            <Card className="bg-[#1B123F]/30 border-[#331659] hover:border-[#8B3BC0]/50 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{t.openaiTitle}</h3>
                <Badge className="bg-green-500 text-white mb-4 text-lg px-4 py-2">{t.openaiPrice}</Badge>
                <p className="text-gray-300 leading-relaxed">{t.openaiDescription}</p>
              </CardContent>
            </Card>

            {/* Trading Pro GPT */}
            <Card className="bg-[#1B123F]/30 border-[#331659] hover:border-[#8B3BC0]/50 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#8B3BC0]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-[#8B3BC0]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{t.tradingTitle}</h3>
                <Badge className="bg-[#8B3BC0] text-white mb-4 text-lg px-4 py-2">{t.tradingPrice}</Badge>
                <p className="text-gray-300 leading-relaxed">{t.tradingDescription}</p>
              </CardContent>
            </Card>
          </div>

          {/* Plus symbol */}
          <div className="flex justify-center mb-12">
            <div className="w-16 h-16 bg-[#8B3BC0] rounded-full flex items-center justify-center">
              <Plus className="h-8 w-8 text-white" />
            </div>
          </div>

          {/* Results section */}
          <Card className="bg-gradient-to-br from-[#1B123F] to-[#331659] border-[#8B3BC0]/50 shadow-2xl">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-3xl font-bold text-white mb-8">{t.resultTitle}</h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {t.benefits.map((benefit, index) => {
                  const icons = [Shield, Clock, Target, Zap]
                  const Icon = icons[index]
                  return (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-[#8B3BC0]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Icon className="h-6 w-6 text-[#8B3BC0]" />
                      </div>
                      <p className="text-white font-semibold">{benefit}</p>
                    </div>
                  )
                })}
              </div>

              <div className="border-t border-[#8B3BC0]/30 pt-8">
                <Badge className="bg-[#8B3BC0] text-white mb-4 text-2xl px-6 py-3">{t.totalPrice}</Badge>
                <p className="text-xl text-gray-300">{t.totalDescription}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
