import { Card, CardContent } from "@/components/ui/card"
import { Quote, User } from "lucide-react"

interface UserStorySectionProps {
  lang: string
}

export function UserStorySection({ lang }: UserStorySectionProps) {
  const content = {
    en: {
      title: "Alejandro's Success Story",
      subtitle: "From emotional trading to data-driven success",
      story: {
        name: "Alejandro",
        description: "Latin American trader, 35 years old, living in NY",
        problem:
          "Alejandro was losing opportunities due to emotional decisions and imprecise tools. He struggled with timing the market and often let fear and greed drive his trading decisions.",
        solution:
          "With Trading Pro GPT, he automated part of his trading process, receives clear signals, and makes better decisions. Now he trades with intelligence and confidence, leveraging AI and real-time data analysis.",
        result:
          "Alejandro has significantly improved his trading performance, reduced emotional stress, and built a more consistent approach to the markets.",
      },
      message: "We know trading can be overwhelming. At Xentris.tech, we're with you every step of the way.",
    },
    es: {
      title: "Historia de Éxito de Alejandro",
      subtitle: "Del trading emocional al éxito basado en datos",
      story: {
        name: "Alejandro",
        description: "Trader latinoamericano, 35 años, vive en NY",
        problem:
          "Alejandro perdía oportunidades por decisiones emocionales y herramientas poco precisas. Luchaba con el timing del mercado y a menudo dejaba que el miedo y la codicia dirigieran sus decisiones de trading.",
        solution:
          "Con Trading Pro GPT, automatizó parte de su proceso de trading, recibe señales claras y toma mejores decisiones. Ahora opera con inteligencia y confianza, aprovechando IA y análisis de datos en tiempo real.",
        result:
          "Alejandro ha mejorado significativamente su rendimiento de trading, reducido el estrés emocional y construido un enfoque más consistente hacia los mercados.",
      },
      message: "Sabemos que el trading puede ser abrumador. En Xentris.tech estamos contigo en cada paso.",
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

        <div className="max-w-4xl mx-auto">
          <Card className="bg-[#1B123F]/30 border-[#331659] hover:border-[#8B3BC0]/50 transition-all duration-300">
            <CardContent className="p-8">
              {/* User info */}
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#8B3BC0]/20 rounded-full flex items-center justify-center mr-4">
                  <User className="h-8 w-8 text-[#8B3BC0]" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">{t.story.name}</h3>
                  <p className="text-gray-300">{t.story.description}</p>
                </div>
              </div>

              {/* Story sections */}
              <div className="space-y-6">
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-[#8B3BC0]/30" />
                  <div className="pl-6">
                    <h4 className="text-lg font-semibold text-[#8B3BC0] mb-2">The Challenge</h4>
                    <p className="text-gray-300 leading-relaxed">{t.story.problem}</p>
                  </div>
                </div>

                <div className="relative">
                  <div className="pl-6">
                    <h4 className="text-lg font-semibold text-[#8B3BC0] mb-2">The Solution</h4>
                    <p className="text-gray-300 leading-relaxed">{t.story.solution}</p>
                  </div>
                </div>

                <div className="relative">
                  <div className="pl-6">
                    <h4 className="text-lg font-semibold text-[#8B3BC0] mb-2">The Result</h4>
                    <p className="text-gray-300 leading-relaxed">{t.story.result}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

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
