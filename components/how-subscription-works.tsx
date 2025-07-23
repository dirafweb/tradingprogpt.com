import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Zap, Target, Infinity } from "lucide-react"
import Link from "next/link"

interface HowSubscriptionWorksProps {
  lang: string
}

export function HowSubscriptionWorks({ lang }: HowSubscriptionWorksProps) {
  const content = {
    en: {
      title: "How It Works",
      subtitle: "Simple steps to professional trading",
      steps: [
        {
          number: "1",
          title: "Activate OpenAI Plus",
          description: "AI engine, $20/month",
          icon: Zap,
        },
        {
          number: "2",
          title: "Subscribe to Trading Pro GPT",
          description: "All trading features, $30/month",
          icon: Target,
        },
        {
          number: "3",
          title: "Access from one application:",
          description: "Everything integrated seamlessly",
          icon: Infinity,
        },
      ],
      features: ["Instant responses", "Professional analysis", "Advanced tools", "No limits or blocks"],
      finalMessage:
        "This is how our system works: you have the most advanced AI and we connect it to the real world of trading so you can operate like the professionals.",
      cta: "Start Now",
    },
    es: {
      title: "Cómo Funciona",
      subtitle: "Pasos simples hacia el trading profesional",
      steps: [
        {
          number: "1",
          title: "Activa OpenAI Plus",
          description: "Motor IA, $20/mes",
          icon: Zap,
        },
        {
          number: "2",
          title: "Suscríbete a Trading Pro GPT",
          description: "Todas las funciones de trading, $30/mes",
          icon: Target,
        },
        {
          number: "3",
          title: "Accede desde una sola aplicación:",
          description: "Todo integrado perfectamente",
          icon: Infinity,
        },
      ],
      features: [
        "Respuestas instantáneas",
        "Análisis profesional",
        "Herramientas avanzadas",
        "Sin límites ni bloqueos",
      ],
      finalMessage:
        "Así funciona nuestro sistema: tienes la IA más avanzada y nosotros la conectamos al mundo real del trading para que operes como los profesionales.",
      cta: "Comenzar Ahora",
    },
  }

  const t = content[lang as keyof typeof content] || content.en

  return (
    <section className="py-20 bg-[#0D0D0D]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">{t.title}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Steps */}
          <div className="space-y-8 mb-12">
            {t.steps.map((step, index) => (
              <div key={index}>
                <Card className="bg-[#1B123F]/30 border-[#331659] hover:border-[#8B3BC0]/50 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row items-start md:items-center">
                      <div className="flex items-center mb-4 md:mb-0 md:mr-6">
                        <div className="w-12 h-12 bg-[#8B3BC0] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                          {step.number}
                        </div>
                        <step.icon className="h-8 w-8 text-[#8B3BC0]" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                        <p className="text-gray-300">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {index < t.steps.length - 1 && (
                  <div className="flex justify-center my-6">
                    <ArrowRight className="h-8 w-8 text-[#8B3BC0]" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Features grid */}
          <Card className="bg-gradient-to-br from-[#1B123F] to-[#331659] border-[#8B3BC0]/50 mb-12">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {t.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#8B3BC0] mr-3 flex-shrink-0" />
                    <span className="text-white font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Final message */}
          <div className="text-center">
            <div className="bg-[#1B123F]/50 border border-[#331659] rounded-2xl p-8 mb-8">
              <p className="text-lg text-gray-300 leading-relaxed italic max-w-3xl mx-auto">"{t.finalMessage}"</p>
            </div>

            <Button
              asChild
              size="lg"
              className="bg-[#8B3BC0] hover:bg-[#8B3BC0]/80 text-white px-12 py-4 text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="https://chatgpt.com/g/g-Apjq2CgWQ-trading-pro-gpt-trading-signals-insights" target="_blank">
                {t.cta}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
