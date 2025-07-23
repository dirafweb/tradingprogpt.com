import { Card, CardContent } from "@/components/ui/card"
import { Zap, BarChart3, Brain, Smartphone, Database, Headphones, Users, Shield, Settings, Globe } from "lucide-react"

interface FeaturesSectionProps {
  lang: string
}

export function FeaturesSection({ lang }: FeaturesSectionProps) {
  const content = {
    en: {
      title: "Powerful Features",
      subtitle: "Everything you need for successful AI-powered trading",
      features: [
        {
          icon: Zap,
          title: "Real-Time Automated Signals",
          description: "Customizable automatic signals that adapt to your trading style and risk preferences.",
        },
        {
          icon: BarChart3,
          title: "Advanced Technical & Fundamental Analysis",
          description: "Comprehensive market analysis combining technical indicators with fundamental data.",
        },
        {
          icon: Brain,
          title: "Integrated AI Strategies",
          description: "Adjustable AI-powered strategies that learn from market patterns and your preferences.",
        },
        {
          icon: Smartphone,
          title: "Intuitive & Responsive Interface",
          description: "User-friendly design that works seamlessly across all devices and platforms.",
        },
        {
          icon: Database,
          title: "TwelveData Live Integration",
          description: "Professional-grade real-time market data from trusted financial data providers.",
        },
        {
          icon: Headphones,
          title: "24/7 Human Support",
          description: "Dedicated support team and easy onboarding to get you started quickly.",
        },
        {
          icon: Users,
          title: "Community & Collaborative Learning",
          description: "Join a community of traders sharing insights and learning together.",
        },
        {
          icon: Settings,
          title: "All Experience Levels",
          description: "Designed for everyone from complete beginners to advanced professional traders.",
        },
        {
          icon: Shield,
          title: "International Security & Privacy",
          description: "Your data is protected under international security and privacy standards.",
        },
        {
          icon: Globe,
          title: "Multi-Market Integration Ready",
          description: "Prepared for integration with additional markets and trading tools as we expand.",
        },
      ],
    },
    es: {
      title: "Características Poderosas",
      subtitle: "Todo lo que necesitas para un trading exitoso con IA",
      features: [
        {
          icon: Zap,
          title: "Señales Automáticas en Tiempo Real",
          description:
            "Señales automáticas personalizables que se adaptan a tu estilo de trading y preferencias de riesgo.",
        },
        {
          icon: BarChart3,
          title: "Análisis Técnico y Fundamental Avanzado",
          description: "Análisis integral del mercado combinando indicadores técnicos con datos fundamentales.",
        },
        {
          icon: Brain,
          title: "Estrategias IA Integradas",
          description:
            "Estrategias impulsadas por IA ajustables que aprenden de patrones del mercado y tus preferencias.",
        },
        {
          icon: Smartphone,
          title: "Interfaz Intuitiva y Responsive",
          description: "Diseño amigable que funciona perfectamente en todos los dispositivos y plataformas.",
        },
        {
          icon: Database,
          title: "Integración en Vivo TwelveData",
          description: "Datos de mercado en tiempo real de grado profesional de proveedores financieros confiables.",
        },
        {
          icon: Headphones,
          title: "Soporte Humano 24/7",
          description: "Equipo de soporte dedicado y onboarding fácil para comenzar rápidamente.",
        },
        {
          icon: Users,
          title: "Comunidad y Aprendizaje Colaborativo",
          description: "Únete a una comunidad de traders compartiendo insights y aprendiendo juntos.",
        },
        {
          icon: Settings,
          title: "Todos los Niveles de Experiencia",
          description: "Diseñado para todos, desde principiantes completos hasta traders profesionales avanzados.",
        },
        {
          icon: Shield,
          title: "Seguridad y Privacidad Internacional",
          description: "Tus datos están protegidos bajo estándares internacionales de seguridad y privacidad.",
        },
        {
          icon: Globe,
          title: "Listo para Integración Multi-Mercado",
          description:
            "Preparado para integración con mercados adicionales y herramientas de trading mientras expandimos.",
        },
      ],
    },
  }

  const t = content[lang as keyof typeof content] || content.en

  return (
    <section id="features" className="py-20 bg-[#0D0D0D]">
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
                <div className="flex items-start mb-4">
                  <div className="p-3 bg-[#8B3BC0]/20 rounded-lg mr-4 flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-[#8B3BC0]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-sm">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
