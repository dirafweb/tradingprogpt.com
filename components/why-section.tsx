import { Card, CardContent } from "@/components/ui/card"
import { Brain, Shield, Clock, Users, TrendingUp, Zap } from "lucide-react"

interface WhySectionProps {
  lang: string
}

export function WhySection({ lang }: WhySectionProps) {
  const content = {
    en: {
      title: "Why Trading Pro GPT?",
      subtitle: "Discover what makes us different from traditional trading tools",
      features: [
        {
          icon: Brain,
          title: "AI-Powered 360° Analysis",
          description:
            "Automatic signals with technical, fundamental, sentiment analysis and AI strategies that eliminate emotional bias from your decisions.",
        },
        {
          icon: Clock,
          title: "Real-Time Information",
          description:
            "Professional-quality data with TwelveData integration, ensuring you always have the most current market information.",
        },
        {
          icon: Zap,
          title: "Easy & Intuitive",
          description:
            "User-friendly interface designed for traders of all levels, from beginners to advanced professionals.",
        },
        {
          icon: Users,
          title: "Human Support",
          description:
            "Complete onboarding, dedicated support, and an active community of traders to help you succeed.",
        },
        {
          icon: Shield,
          title: "Expert Development",
          description:
            "100% developed by AI and trading experts from Xentris.tech, OpenAI, and TwelveData partnerships.",
        },
        {
          icon: TrendingUp,
          title: "Proven Results",
          description:
            "Trusted by thousands of traders worldwide who have improved their decision-making and reduced risks.",
        },
      ],
    },
    es: {
      title: "¿Por qué Trading Pro GPT?",
      subtitle: "Descubre qué nos hace diferentes de las herramientas de trading tradicionales",
      features: [
        {
          icon: Brain,
          title: "Análisis 360° con IA",
          description:
            "Señales automáticas con análisis técnico, fundamental, de sentimiento y estrategias IA que eliminan el sesgo emocional de tus decisiones.",
        },
        {
          icon: Clock,
          title: "Información en Tiempo Real",
          description:
            "Datos de calidad profesional con integración TwelveData, asegurando que siempre tengas la información de mercado más actual.",
        },
        {
          icon: Zap,
          title: "Fácil e Intuitiva",
          description:
            "Interfaz amigable diseñada para traders de todos los niveles, desde principiantes hasta profesionales avanzados.",
        },
        {
          icon: Users,
          title: "Soporte Humano",
          description:
            "Onboarding completo, soporte dedicado y una comunidad activa de traders para ayudarte a tener éxito.",
        },
        {
          icon: Shield,
          title: "Desarrollo Experto",
          description:
            "100% desarrollado por expertos en IA y trading de Xentris.tech, con alianzas OpenAI y TwelveData.",
        },
        {
          icon: TrendingUp,
          title: "Resultados Comprobados",
          description:
            "Confiado por miles de traders en todo el mundo que han mejorado su toma de decisiones y reducido riesgos.",
        },
      ],
    },
  }

  const t = content[lang as keyof typeof content] || content.en

  return (
    <section className="py-20 bg-gradient-to-b from-[#0D0D0D] to-[#1B123F]/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">{t.title}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.features.map((feature, index) => (
            <Card
              key={index}
              className="bg-[#1B123F]/30 border-[#331659] hover:border-[#8B3BC0]/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-[#8B3BC0]/20 rounded-lg mr-4">
                    <feature.icon className="h-6 w-6 text-[#8B3BC0]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
