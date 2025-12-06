import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Zap, Infinity, DollarSign } from "lucide-react"
import Link from "next/link"

interface HowSubscriptionWorksProps {
  lang: string
}

export function HowSubscriptionWorks({ lang }: HowSubscriptionWorksProps) {
  const content = {
    en: {
      title: "How It Works",
      subtitle: "Simple steps to start trading with AI",
      steps: [
        {
          number: "1",
          title: "Choose Your Plan",
          description: "Basic ($100/month) or Enterprise Business ($300/month with everything included)",
          icon: DollarSign,
        },
        {
          number: "2",
          title: "Get Access",
          description: "Instant access to Trading Pro GPT and all features",
          icon: Zap,
        },
        {
          number: "3",
          title: "Start Trading Like a Pro",
          description: "Use AI-powered signals and analysis to make informed decisions",
          icon: Infinity,
        },
      ],
      features: ["Real-time signals", "Professional analysis", "All indicators", "Personalized strategies"],
      finalMessage:
        "Choose the plan that fits your needs: Basic for experienced traders with OpenAI Plus, or Enterprise for a complete all-in-one solution with education included.",
      cta: "Start Now",
    },
    es: {
      title: "Cómo Funciona",
      subtitle: "Pasos simples para comenzar a hacer trading con IA",
      steps: [
        {
          number: "1",
          title: "Elige Tu Plan",
          description: "Básico ($100/mes) o Enterprise Business ($300/mes con todo incluido)",
          icon: DollarSign,
        },
        {
          number: "2",
          title: "Obtén Acceso",
          description: "Acceso instantáneo a Trading Pro GPT y todas las funciones",
          icon: Zap,
        },
        {
          number: "3",
          title: "Comienza a Operar como un Pro",
          description: "Usa señales y análisis impulsados por IA para tomar decisiones informadas",
          icon: Infinity,
        },
      ],
      features: [
        "Señales en tiempo real",
        "Análisis profesional",
        "Todos los indicadores",
        "Estrategias personalizadas",
      ],
      finalMessage:
        "Elige el plan que se adapte a tus necesidades: Básico para traders experimentados con OpenAI Plus, o Enterprise para una solución completa todo-en-uno con educación incluida.",
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
