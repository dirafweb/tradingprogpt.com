import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  BarChart3,
  Infinity,
  TrendingUp,
  Database,
  Target,
  Brain,
  Headphones,
  GraduationCap,
  Zap,
} from "lucide-react"

interface ProBenefitsSectionProps {
  lang: string
}

export function ProBenefitsSection({ lang }: ProBenefitsSectionProps) {
  const content = {
    en: {
      title: "Trading Pro GPT Features",
      subtitle: "Powerful features available in all plans",
      badge: "All Plans Include",
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
          title: "Customer support",
          description: "Get help when you need it",
        },
      ],
      enterpriseTitle: "Enterprise Business Exclusive",
      enterpriseBadge: "Enterprise Only",
      enterpriseFeatures: [
        {
          icon: Zap,
          title: "OpenAI Plus included",
          description: "No separate subscription needed - everything in one package",
        },
        {
          icon: GraduationCap,
          title: "Professional education & training",
          description: "Complete educational resources and expert guidance to master trading",
        },
        {
          icon: Headphones,
          title: "Priority 24/7 support",
          description: "Dedicated priority support whenever you need it",
        },
      ],
    },
    es: {
      title: "Funciones de Trading Pro GPT",
      subtitle: "Funciones potentes disponibles en todos los planes",
      badge: "Todos los Planes Incluyen",
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
          title: "Soporte al cliente",
          description: "Obtén ayuda cuando la necesites",
        },
      ],
      enterpriseTitle: "Exclusivo Enterprise Business",
      enterpriseBadge: "Solo Enterprise",
      enterpriseFeatures: [
        {
          icon: Zap,
          title: "OpenAI Plus incluido",
          description: "Sin suscripción separada necesaria - todo en un paquete",
        },
        {
          icon: GraduationCap,
          title: "Educación y formación profesional",
          description: "Recursos educativos completos y guía experta para dominar el trading",
        },
        {
          icon: Headphones,
          title: "Soporte prioritario 24/7",
          description: "Soporte prioritario dedicado cuando lo necesites",
        },
      ],
    },
  }

  const t = content[lang as keyof typeof content] || content.en

  return (
    <section className="py-20 bg-gradient-to-b from-[#0D0D0D] to-[#1B123F]/20">
      <div className="container mx-auto px-4">
        {/* All Plans Features */}
        <div className="text-center mb-16">
          <Badge className="bg-[#331659] text-white mb-6 px-4 py-2 text-sm font-semibold">{t.badge}</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">{t.title}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.benefits.map((benefit, index) => (
              <Card
                key={index}
                className="bg-[#1B123F]/30 border-[#331659] hover:border-[#8B3BC0]/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="p-3 bg-[#331659]/50 rounded-lg mr-4 flex-shrink-0">
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

        {/* Enterprise-Only Features */}
        <div className="text-center mb-12">
          <Badge className="bg-[#8B3BC0] text-white mb-6 px-4 py-2 text-sm font-semibold">{t.enterpriseBadge}</Badge>
          <h3 className="text-2xl md:text-4xl font-bold mb-4 text-white">{t.enterpriseTitle}</h3>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.enterpriseFeatures.map((feature, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-[#1B123F] to-[#331659] border-[#8B3BC0]/50 hover:border-[#8B3BC0] transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#8B3BC0]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-[#8B3BC0]" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
