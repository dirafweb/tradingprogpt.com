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
      subtitle: "Select the option that best fits your learning needs",
      basicPlan: {
        badge: "Basic Plan",
        price: "$100 USD/month",
        title: "ChatGPT Enterprise GPT",
        subtitle: "Forex & Crypto Actions",
        description: "Educational tool for Forex and Cryptocurrency markets",
        features: [
          "Full access to Trading Pro GPT",
          "Forex market education",
          "Cryptocurrency learning tools",
          "Technical indicators explained",
          "Standard support",
        ],
        note: "No additional subscriptions needed",
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
          "Forex & Crypto + Stocks education",
          "All technical indicators",
          "Priority 24/7 support",
        ],
        note: "No additional subscriptions needed",
        cta: "Get Enterprise",
      },
    },
    es: {
      title: "Elige Tu Plan",
      subtitle: "Selecciona la opción que mejor se adapte a tus necesidades de aprendizaje",
      basicPlan: {
        badge: "Plan Básico",
        price: "$100 USD/mes",
        title: "ChatGPT Enterprise GPT",
        subtitle: "Acciones Forex y Crypto",
        description: "Herramienta educativa para mercados Forex y Criptomonedas",
        features: [
          "Acceso completo a Trading Pro GPT",
          "Educación en mercado Forex",
          "Herramientas de aprendizaje Crypto",
          "Indicadores técnicos explicados",
          "Soporte estándar",
        ],
        note: "No necesitas suscripciones adicionales",
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
          "Forex & Crypto + Acciones educación",
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
                <h3 className="text-2xl font-bold text-white mb-1">{t.basicPlan.title}</h3>
                <p className="text-[#8B3BC0] font-semibold mb-2">{t.basicPlan.subtitle}</p>
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
                  <p className="text-sm text-gray-300">{t.basicPlan.note}</p>
                </div>

                <Button asChild className="w-full bg-[#331659] hover:bg-[#331659]/80 text-white">
                  <Link href="https://buy.stripe.com/8x25kDa6UfMe56obQPgbm01" target="_blank">
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
                  <Link href="https://buy.stripe.com/8x23cvena8jM8iAg75gbm00" target="_blank">
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
