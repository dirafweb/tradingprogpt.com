import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Zap, Gift } from "lucide-react"
import Link from "next/link"

interface SpecialOfferSectionProps {
  lang: string
}

export function SpecialOfferSection({ lang }: SpecialOfferSectionProps) {
  const content = {
    en: {
      badge: "Limited Time Offer",
      title: "Enjoy complete unlimited access for 5 days!",
      subtitle: "Try all Trading Pro GPT features without restrictions.",
      description: "If you like it, continue with the Pro plan for unlimited access.",
      cta: "Start Free Trial",
      features: ["Complete unlimited access", "All trading features", "Real-time signals", "No restrictions"],
    },
    es: {
      badge: "Oferta por Tiempo Limitado",
      title: "¡Disfruta acceso completo sin límites durante 5 días!",
      subtitle: "Prueba todas las funciones de Trading Pro GPT sin restricciones.",
      description: "Si te gusta, continúa en el plan Pro con acceso ilimitado.",
      cta: "Comenzar Prueba Gratis",
      features: [
        "Acceso completo ilimitado",
        "Todas las funciones de trading",
        "Señales en tiempo real",
        "Sin restricciones",
      ],
    },
  }

  const t = content[lang as keyof typeof content] || content.en

  return (
    <section className="py-16 bg-gradient-to-r from-[#8B3BC0]/10 via-[#1B123F]/20 to-[#331659]/10">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto bg-gradient-to-br from-[#1B123F] to-[#331659] border-[#8B3BC0]/50 shadow-2xl">
          <CardContent className="p-8 md:p-12 text-center">
            {/* Badge */}
            <Badge className="bg-[#8B3BC0] text-white mb-6 px-4 py-2 text-sm font-semibold">
              <Gift className="h-4 w-4 mr-2" />
              {t.badge}
            </Badge>

            {/* Main title */}
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white leading-tight">{t.title}</h2>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-4 font-medium">{t.subtitle}</p>

            {/* Description */}
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">{t.description}</p>

            {/* Features grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {t.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-3 bg-[#8B3BC0]/20 rounded-lg border border-[#8B3BC0]/30"
                >
                  <Zap className="h-4 w-4 text-[#8B3BC0] mr-2" />
                  <span className="text-white text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button
              asChild
              size="lg"
              className="bg-[#8B3BC0] hover:bg-[#8B3BC0]/80 text-white px-12 py-4 text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Link href="https://chatgpt.com/g/g-Apjq2CgWQ-trading-pro-gpt-trading-signals-insights" target="_blank">
                <Clock className="h-5 w-5 mr-3" />
                {t.cta}
              </Link>
            </Button>

            {/* Timer or urgency element */}
            <div className="mt-6 flex items-center justify-center text-gray-400">
              <Clock className="h-4 w-4 mr-2" />
              <span className="text-sm">
                5 {lang === "es" ? "días completos" : "full days"} •{" "}
                {lang === "es" ? "Sin compromisos" : "No commitments"}
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
