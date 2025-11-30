import { Card, CardContent } from "@/components/ui/card"
import { Brain, Shield, Clock, Users, BookOpen, Zap } from "lucide-react"

interface WhySectionProps {
  lang: string
}

export function WhySection({ lang }: WhySectionProps) {
  const content = {
    en: {
      title: "What is Trading Pro GPT?",
      subtitle: "An AI-driven educational assistant that helps you understand market behavior",
      description:
        "Trading Pro GPT is an AI-driven educational assistant that helps you understand market behavior using real-time information, technical indicators, and data-based insights. It is NOT a trading platform, does not provide financial advice, and does not offer buy/sell recommendations. Instead, it helps you learn how markets move, how indicators behave, and how data evolves over time.",
      features: [
        {
          icon: Brain,
          title: "AI-Powered Learning",
          description:
            "Understand complex market concepts in simple terms with AI explanations tailored to your level.",
        },
        {
          icon: Clock,
          title: "Real-Time Data",
          description: "See how markets behave right now with professional-quality data from TwelveData integration.",
        },
        {
          icon: Zap,
          title: "Beginner Friendly",
          description: "No experience required — explanations are clear and intuitive for all learning levels.",
        },
        {
          icon: Users,
          title: "Advanced Insights",
          description: "Ideal for those who want to go deeper into technical analysis and data interpretation.",
        },
        {
          icon: Shield,
          title: "Flexible Access",
          description: "Use it from desktop, mobile, or even upload your own datasets for learning purposes.",
        },
        {
          icon: BookOpen,
          title: "Educational Focus",
          description: "Improve your financial literacy with concepts like trends, patterns, indicators, and more.",
        },
      ],
    },
    es: {
      title: "¿Qué es Trading Pro GPT?",
      subtitle: "Un asistente educativo impulsado por IA que te ayuda a entender el comportamiento del mercado",
      description:
        "Trading Pro GPT es un asistente educativo impulsado por IA que te ayuda a entender el comportamiento del mercado usando información en tiempo real, indicadores técnicos e insights basados en datos. NO es una plataforma de trading, no proporciona asesoría financiera y no ofrece recomendaciones de compra/venta. En cambio, te ayuda a aprender cómo se mueven los mercados, cómo se comportan los indicadores y cómo evolucionan los datos con el tiempo.",
      features: [
        {
          icon: Brain,
          title: "Aprendizaje con IA",
          description:
            "Comprende conceptos complejos del mercado en términos simples con explicaciones de IA adaptadas a tu nivel.",
        },
        {
          icon: Clock,
          title: "Datos en Tiempo Real",
          description: "Ve cómo se comportan los mercados ahora mismo con datos de calidad profesional de TwelveData.",
        },
        {
          icon: Zap,
          title: "Amigable para Principiantes",
          description: "No se requiere experiencia — las explicaciones son claras e intuitivas para todos los niveles.",
        },
        {
          icon: Users,
          title: "Insights Avanzados",
          description: "Ideal para quienes quieren profundizar en análisis técnico e interpretación de datos.",
        },
        {
          icon: Shield,
          title: "Acceso Flexible",
          description: "Úsalo desde escritorio, móvil o incluso sube tus propios datasets para fines de aprendizaje.",
        },
        {
          icon: BookOpen,
          title: "Enfoque Educativo",
          description: "Mejora tu educación financiera con conceptos como tendencias, patrones, indicadores y más.",
        },
      ],
    },
  }

  const t = content[lang as keyof typeof content] || content.en

  return (
    <section className="py-20 bg-gradient-to-b from-[#0D0D0D] to-[#1B123F]/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">{t.title}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">{t.subtitle}</p>
          <p className="text-gray-400 max-w-4xl mx-auto leading-relaxed">{t.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
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
