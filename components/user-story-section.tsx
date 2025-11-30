import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, TrendingUp, Users, Briefcase, Lightbulb } from "lucide-react"

interface UserStorySectionProps {
  lang: string
}

export function UserStorySection({ lang }: UserStorySectionProps) {
  const content = {
    en: {
      title: "Who Is This For?",
      subtitle: "This platform is ideal for learners at all levels",
      audiences: [
        {
          icon: GraduationCap,
          title: "Students",
          description: "Learning about financial markets and wanting to understand how they work.",
        },
        {
          icon: TrendingUp,
          title: "Traders",
          description: "Who want a deeper educational perspective on market analysis and indicators.",
        },
        {
          icon: Briefcase,
          title: "Investors",
          description: "Seeking better understanding of technical and fundamental indicators.",
        },
        {
          icon: Lightbulb,
          title: "Curious Minds",
          description: "Anyone exploring data-driven market behavior and financial concepts.",
        },
        {
          icon: Users,
          title: "AI Enthusiasts",
          description: "People who want to learn using AI instead of complex traditional tools.",
        },
      ],
      message:
        "We know learning about markets can be overwhelming. At Xentris.tech, we're with you every step of the way.",
    },
    es: {
      title: "¿Para Quién Es?",
      subtitle: "Esta plataforma es ideal para estudiantes de todos los niveles",
      audiences: [
        {
          icon: GraduationCap,
          title: "Estudiantes",
          description: "Aprendiendo sobre mercados financieros y queriendo entender cómo funcionan.",
        },
        {
          icon: TrendingUp,
          title: "Traders",
          description: "Que quieren una perspectiva educativa más profunda sobre análisis de mercado e indicadores.",
        },
        {
          icon: Briefcase,
          title: "Inversores",
          description: "Buscando mejor comprensión de indicadores técnicos y fundamentales.",
        },
        {
          icon: Lightbulb,
          title: "Mentes Curiosas",
          description: "Cualquiera que explore comportamiento de mercado basado en datos y conceptos financieros.",
        },
        {
          icon: Users,
          title: "Entusiastas de IA",
          description: "Personas que quieren aprender usando IA en lugar de herramientas tradicionales complejas.",
        },
      ],
      message: "Sabemos que aprender sobre mercados puede ser abrumador. En Xentris.tech estamos contigo en cada paso.",
    },
  }

  const t = content[lang as keyof typeof content] || content.en

  return (
    <section className="py-20 bg-gradient-to-b from-[#1B123F]/20 to-[#0D0D0D]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">{t.title}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.audiences.map((audience, index) => (
              <Card
                key={index}
                className="bg-[#1B123F]/30 border-[#331659] hover:border-[#8B3BC0]/50 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#8B3BC0]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <audience.icon className="h-8 w-8 text-[#8B3BC0]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{audience.title}</h3>
                  <p className="text-gray-300">{audience.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Message from Xentris */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center px-6 py-4 bg-[#1B123F]/50 border border-[#331659] rounded-xl">
              <p className="text-lg text-gray-300 italic">"{t.message}"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
