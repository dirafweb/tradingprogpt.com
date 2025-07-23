import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, LogIn, Target, BarChart3, Brain, TrendingUp } from "lucide-react"

interface HowItWorksSectionProps {
  lang: string
}

export function HowItWorksSection({ lang }: HowItWorksSectionProps) {
  const content = {
    en: {
      title: "How It Works",
      subtitle: "Get started with Trading Pro GPT in 5 simple steps",
      steps: [
        {
          icon: LogIn,
          title: "Access Trading Pro GPT",
          description: "Click the link and start your AI-powered trading journey instantly.",
        },
        {
          icon: Target,
          title: "Choose Your Market",
          description: "Select from Stocks, Forex, or Crypto markets based on your trading preferences.",
        },
        {
          icon: BarChart3,
          title: "Receive Personalized Analysis",
          description: "Get real-time signals, comprehensive analysis, and personalized trading strategies.",
        },
        {
          icon: Brain,
          title: "Make Data-Driven Decisions",
          description: "Eliminate emotional trading with AI-powered insights and objective market analysis.",
        },
        {
          icon: TrendingUp,
          title: "Optimize Your Results",
          description: "Continuously improve your trading performance with AI assistance and daily learning.",
        },
      ],
    },
    es: {
      title: "Cómo Funciona",
      subtitle: "Comienza con Trading Pro GPT en 5 pasos simples",
      steps: [
        {
          icon: LogIn,
          title: "Ingresa a Trading Pro GPT",
          description: "Haz clic en el enlace y comienza tu viaje de trading con IA al instante.",
        },
        {
          icon: Target,
          title: "Elige tu Mercado",
          description: "Selecciona entre mercados de Acciones, Forex o Cripto según tus preferencias de trading.",
        },
        {
          icon: BarChart3,
          title: "Recibe Análisis Personalizado",
          description: "Obtén señales en tiempo real, análisis integral y estrategias de trading personalizadas.",
        },
        {
          icon: Brain,
          title: "Toma Decisiones Basadas en Datos",
          description: "Elimina el trading emocional con insights de IA y análisis objetivo del mercado.",
        },
        {
          icon: TrendingUp,
          title: "Optimiza tus Resultados",
          description: "Mejora continuamente tu rendimiento de trading con asistencia IA y aprendizaje diario.",
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
