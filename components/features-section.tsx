import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, BarChart3, Brain, Eye, Database, FileUp } from "lucide-react"

interface FeaturesSectionProps {
  lang: string
}

export function FeaturesSection({ lang }: FeaturesSectionProps) {
  const content = {
    en: {
      title: "What You Can Do With It",
      subtitle: "Educational Use Only",
      features: [
        {
          icon: TrendingUp,
          title: "Explore market trends in real time",
          description: "Understand how price movements form, how volatility changes, and how indicators react.",
        },
        {
          icon: BarChart3,
          title: "Learn how technical indicators work",
          description:
            "RSI, MACD, Bollinger Bands, EMAs, volume, volatility metrics — explained in a clear, educational way.",
        },
        {
          icon: Brain,
          title: "Study market conditions with AI explanations",
          description: "Ask questions in natural language and receive structured educational insights.",
        },
        {
          icon: Eye,
          title: "Visualize charts and patterns",
          description: "See price data represented visually so you can better understand market dynamics.",
        },
        {
          icon: FileUp,
          title: "Upload your own market data",
          description: "Analyze CSV files for learning and research purposes.",
        },
        {
          icon: Database,
          title: "Improve your financial literacy",
          description: "Understand concepts like trends, breakouts, support/resistance, risk principles, and more.",
        },
      ],
    },
    es: {
      title: "Qué Puedes Hacer Con Esta Herramienta",
      subtitle: "Solo Uso Educativo",
      features: [
        {
          icon: TrendingUp,
          title: "Explora tendencias del mercado en tiempo real",
          description:
            "Comprende cómo se forman los movimientos de precios, cómo cambia la volatilidad y cómo reaccionan los indicadores.",
        },
        {
          icon: BarChart3,
          title: "Aprende cómo funcionan los indicadores técnicos",
          description:
            "RSI, MACD, Bandas de Bollinger, EMAs, volumen, métricas de volatilidad — explicados de forma clara y educativa.",
        },
        {
          icon: Brain,
          title: "Estudia las condiciones del mercado con explicaciones IA",
          description: "Haz preguntas en lenguaje natural y recibe insights educativos estructurados.",
        },
        {
          icon: Eye,
          title: "Visualiza gráficos y patrones",
          description:
            "Ve los datos de precios representados visualmente para comprender mejor la dinámica del mercado.",
        },
        {
          icon: FileUp,
          title: "Sube tus propios datos de mercado",
          description: "Analiza archivos CSV con fines de aprendizaje e investigación.",
        },
        {
          icon: Database,
          title: "Mejora tu educación financiera",
          description:
            "Comprende conceptos como tendencias, rupturas, soporte/resistencia, principios de riesgo y más.",
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
