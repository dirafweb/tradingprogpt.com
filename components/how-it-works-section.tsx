import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, MessageSquare, Database, BookOpen, BarChart3 } from "lucide-react"

interface HowItWorksSectionProps {
  lang: string
}

export function HowItWorksSection({ lang }: HowItWorksSectionProps) {
  const content = {
    en: {
      title: "How It Works",
      subtitle: "Learn about markets in 4 simple steps",
      steps: [
        {
          icon: MessageSquare,
          title: "Ask in natural language",
          description:
            '"Explain the trend on EUR/USD" • "What does RSI tell me in this scenario?" • "How does volatility affect price movement?"',
        },
        {
          icon: Database,
          title: "AI analyzes real-time data",
          description: "The system retrieves up-to-date market information and provides educational insights.",
        },
        {
          icon: BookOpen,
          title: "Learn from explanations",
          description: "Clear, structured, and beginner-friendly breakdowns of market concepts.",
        },
        {
          icon: BarChart3,
          title: "Visual references",
          description: "Charts, indicators, and illustrations to help you understand concepts visually.",
        },
      ],
    },
    es: {
      title: "Cómo Funciona",
      subtitle: "Aprende sobre los mercados en 4 pasos simples",
      steps: [
        {
          icon: MessageSquare,
          title: "Pregunta en lenguaje natural",
          description:
            '"Explica la tendencia en EUR/USD" • "¿Qué me dice el RSI en este escenario?" • "¿Cómo afecta la volatilidad al movimiento del precio?"',
        },
        {
          icon: Database,
          title: "La IA analiza datos en tiempo real",
          description: "El sistema obtiene información actualizada del mercado y proporciona insights educativos.",
        },
        {
          icon: BookOpen,
          title: "Aprende de las explicaciones",
          description: "Desgloses claros, estructurados y amigables para principiantes de conceptos del mercado.",
        },
        {
          icon: BarChart3,
          title: "Referencias visuales",
          description: "Gráficos, indicadores e ilustraciones para ayudarte a comprender conceptos visualmente.",
        },
      ],
    },
  }

  const t = content[lang as keyof typeof content] || content.en

  return (
    <section id="how-it-works" className="py-20 bg-[#0D0D0D]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">{t.title}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {t.steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center mb-12 last:mb-0">
              <Card className="bg-[#1B123F]/30 border-[#331659] w-full md:w-2/3 hover:border-[#8B3BC0]/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-[#8B3BC0] rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center mb-3">
                        <step.icon className="h-6 w-6 text-[#8B3BC0] mr-3" />
                        <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {index < t.steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center w-1/3">
                  <ArrowRight className="h-8 w-8 text-[#8B3BC0] mx-8" />
                </div>
              )}

              {index < t.steps.length - 1 && (
                <div className="md:hidden flex items-center justify-center my-6">
                  <ArrowRight className="h-8 w-8 text-[#8B3BC0] rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
