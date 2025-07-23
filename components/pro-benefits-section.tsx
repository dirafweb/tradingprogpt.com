import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, BarChart3, Infinity, TrendingUp, Database, Target, Brain, Headphones } from "lucide-react"

interface ProBenefitsSectionProps {
  lang: string
}

export function ProBenefitsSection({ lang }: ProBenefitsSectionProps) {
  const content = {
    en: {
      title: "Pro Access Benefits",
      subtitle: "Everything you need for professional trading success",
      badge: "Pro Features",
      benefits: [
        {
          icon: Infinity,
          title: "Complete unlimited access to all features",
          description: "No restrictions, no limits on usage",
        },
        {
          icon: BarChart3,
          title: "Technical, fundamental & institutional analysis",
          description: "Comprehensive market analysis from all angles",
        },
        {
          icon: CheckCircle,
          title: "Unlimited queries",
          description: "Ask as many questions as you need",
        },
        {
          icon: TrendingUp,
          title: "All available indicators",
          description: "Access to complete technical indicator suite",
        },
        {
          icon: Database,
          title: "Real-time data (TwelveData API)",
          description: "Professional-grade live market data",
        },
        {
          icon: Target,
          title: "Personalized trading signals",
          description: "AI-powered signals tailored to your strategy",
        },
        {
          icon: Brain,
          title: "Market sentiment analysis",
          description: "Understand market psychology and trends",
        },
        {
          icon: Headphones,
          title: "Priority 24/7 support",
          description: "Get help whenever you need it",
        },
      ],
    },
    es: {
      title: "Beneficios del Acceso Pro",
      subtitle: "Todo lo que necesitas para el éxito en trading profesional",
      badge: "Funciones Pro",
      benefits: [
        {
          icon: Infinity,
          title: "Acceso completo ilimitado a todas las funciones",
          description: "Sin restricciones, sin límites de uso",
        },
        {
          icon: BarChart3,
          title: "Análisis técnico, fundamental e institucional",
          description: "Análisis integral del mercado desde todos los ángulos",
        },
        {
          icon: CheckCircle,
          title: "Consultas ilimitadas",
          description: "Haz todas las preguntas que necesites",
        },
        {
          icon: TrendingUp,
          title: "Todos los indicadores disponibles",
          description: "Acceso a la suite completa de indicadores técnicos",
        },
        {
          icon: Database,
          title: "Datos en tiempo real (TwelveData API)",
          description: "Datos de mercado en vivo de grado profesional",
        },
        {
          icon: Target,
          title: "Señales de trading personalizadas",
          description: "Señales impulsadas por IA adaptadas a tu estrategia",
        },
        {
          icon: Brain,
          title: "Análisis de sentimiento de mercado",
          description: "Entiende la psicología y tendencias del mercado",
        },
        {
          icon: Headphones,
          title: "Soporte prioritario 24/7",
          description: "Obtén ayuda cuando la necesites",
        },
      ],
    },
  }

  const t = content[lang as keyof typeof content] || content.en

  return (
    <section className="py-20 bg-gradient-to-b from-[#0D0D0D] to-[#1B123F]/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-[#8B3BC0] text-white mb-6 px-4 py-2 text-sm font-semibold">{t.badge}</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">{t.title}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.benefits.map((benefit, index) => (
              <Card
                key={index}
                className="bg-[#1B123F]/30 border-[#331659] hover:border-[#8B3BC0]/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="p-3 bg-[#8B3BC0]/20 rounded-lg mr-4 flex-shrink-0">
                      <benefit.icon className="h-6 w-6 text-[#8B3BC0]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2 leading-tight">{benefit.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
