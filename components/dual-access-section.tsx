import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface DualAccessSectionProps {
  lang: string
}

export function DualAccessSection({ lang }: DualAccessSectionProps) {
  const content = {
    en: {
      title: "Choose Your Plan",
      subtitle: "Select the option that best fits your trading needs",
      basicPlan: {
        badge: "Basic Plan",
        price: "$50 USD/month",
        title: "Trading Pro GPT",
        description: "For traders who already have OpenAI Plus",
        features: [
          "Full access to Trading Pro GPT",
          "Real-time signals & analysis",
          "All technical indicators",
          "Personalized strategies",
          "Standard support",
        ],
        note: "Requires separate OpenAI Plus subscription ($20/month)",
        totalNote: "Total with OpenAI Plus: $70/month",
        cta: "Get Basic Plan",
      },
      enterprisePlan: {
        badge: "Enterprise Business",
        popular: "Most Popular",
        price: "$300 USD/month",
        title: "Complete Solution",
        description: "Everything included in one package",
        features: [
          "OpenAI Enterprise included",
          "Full access to Trading Pro GPT",
          "Professional education & training",
          "Real-time signals & analysis",
          "All technical indicators",
          "Priority 24/7 support",
        ],
        note: "No additional subscriptions needed",
        cta: "Get Enterprise",
      },
    },
    es: {
      title: "Elige Tu Plan",
      subtitle: "Selecciona la opción que mejor se adapte a tus necesidades de trading",
      basicPlan: {
        badge: "Plan Básico",
        price: "$50 USD/mes",
        title: "Trading Pro GPT",
        description: "Para traders que ya tienen OpenAI Plus",
        features: [
          "Acceso completo a Trading Pro GPT",
          "Señales y análisis en tiempo real",
          "Todos los indicadores técnicos",
          "Estrategias personalizadas",
          "Soporte estándar",
        ],
        note: "Requiere suscripción separada de OpenAI Plus ($20/mes)",
        totalNote: "Total con OpenAI Plus: $70/mes",
        cta: "Obtener Plan Básico",
      },
      enterprisePlan: {
        badge: "Enterprise Business",
        popular: "Más Popular",
        price: "$300 USD/mes",
        title: "Solución Completa",
        description: "Todo incluido en un solo paquete",
        features: [
          "OpenAI Enterprise incluido",
          "Acceso completo a Trading Pro GPT",
          "Educación y formación profesional",
          "Señales y análisis en tiempo real",
          "Todos los indicadores técnicos",
          "Soporte prioritario 24/7",
        ],
        note: "No necesitas suscripciones adicionales",
        cta: "Obtener Enterprise",
      },
    },
  }

  const t = content[lang as keyof typeof content] || content.en

  return (
    <section className="py-20 bg-gradient-to-b from-[#1B123F]/20 to-[#0D0D0D]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">{t.title}</h2>
          <p className="text-xl text-[#8B3BC0] font-semibold">{t.subtitle}</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Basic Plan */}
            <Card className="bg-[#1B123F]/50 border-[#331659] hover:border-[#8B3BC0]/50 transition-all duration-300">
              <CardContent className="p-8">
                <Badge className="bg-[#331659] text-white mb-4">{t.basicPlan.badge}</Badge>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{t.basicPlan.price}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{t.basicPlan.title}</h3>
                <p className="text-gray-400 mb-6">{t.basicPlan.description}</p>

                <ul className="space-y-3 mb-6">
                  {t.basicPlan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <Check className="h-5 w-5 text-[#8B3BC0] mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="bg-[#0D0D0D]/50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-400">{t.basicPlan.note}</p>
                  <p className="text-sm text-[#8B3BC0] font-semibold mt-1">{t.basicPlan.totalNote}</p>
                </div>

                <Button asChild className="w-full bg-[#331659] hover:bg-[#331659]/80 text-white">
                  <Link
                    href="https://chatgpt.com/g/g-Apjq2CgWQ-trading-pro-gpt-trading-signals-insights"
                    target="_blank"
                  >
                    {t.basicPlan.cta}
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-gradient-to-br from-[#1B123F] to-[#331659] border-[#8B3BC0] shadow-2xl shadow-[#8B3BC0]/20 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-[#8B3BC0] text-white px-4 py-1">{t.enterprisePlan.popular}</Badge>
              </div>
              <CardContent className="p-8 pt-10">
                <Badge className="bg-[#8B3BC0] text-white mb-4">{t.enterprisePlan.badge}</Badge>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{t.enterprisePlan.price}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{t.enterprisePlan.title}</h3>
                <p className="text-gray-300 mb-6">{t.enterprisePlan.description}</p>

                <ul className="space-y-3 mb-6">
                  {t.enterprisePlan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-white">
                      <Check className="h-5 w-5 text-[#8B3BC0] mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="bg-[#0D0D0D]/30 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-300">{t.enterprisePlan.note}</p>
                </div>

                <Button asChild className="w-full bg-[#8B3BC0] hover:bg-[#8B3BC0]/80 text-white font-bold">
                  <Link
                    href="https://chatgpt.com/g/g-Apjq2CgWQ-trading-pro-gpt-trading-signals-insights"
                    target="_blank"
                  >
                    {t.enterprisePlan.cta}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
