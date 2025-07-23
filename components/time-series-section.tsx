import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, BarChart3 } from "lucide-react"

interface TimeSeriesSectionProps {
  lang: string
}

export function TimeSeriesSection({ lang }: TimeSeriesSectionProps) {
  const content = {
    en: {
      title: "Time Series Intervals",
      subtitle: "Analyze markets across multiple timeframes for comprehensive insights",
      description: "We support time series intervals in:",
      intervals: ["1min", "5min", "15min", "30min", "45min", "1h", "2h", "4h", "5h", "1day", "1week", "1month"],
      categories: [
        {
          title: "Intraday",
          intervals: ["1min", "5min", "15min", "30min", "45min"],
          description: "Short-term scalping and day trading",
        },
        {
          title: "Hourly",
          intervals: ["1h", "2h", "4h", "5h"],
          description: "Swing trading and medium-term analysis",
        },
        {
          title: "Long-term",
          intervals: ["1day", "1week", "1month"],
          description: "Position trading and trend analysis",
        },
      ],
    },
    es: {
      title: "Intervalos de Series Temporales",
      subtitle: "Analiza mercados en múltiples marcos temporales para insights integrales",
      description: "Soportamos series temporales en:",
      intervals: ["1min", "5min", "15min", "30min", "45min", "1h", "2h", "4h", "5h", "1día", "1semana", "1mes"],
      categories: [
        {
          title: "Intradía",
          intervals: ["1min", "5min", "15min", "30min", "45min"],
          description: "Scalping a corto plazo y day trading",
        },
        {
          title: "Por Horas",
          intervals: ["1h", "2h", "4h", "5h"],
          description: "Swing trading y análisis a medio plazo",
        },
        {
          title: "Largo Plazo",
          intervals: ["1día", "1semana", "1mes"],
          description: "Trading de posición y análisis de tendencias",
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
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">{t.subtitle}</p>
          <p className="text-lg text-[#8B3BC0] font-semibold">{t.description}</p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* All intervals display */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {t.intervals.map((interval, index) => (
              <Badge
                key={index}
                className="bg-[#1B123F] border border-[#331659] text-white px-4 py-2 text-sm font-medium hover:border-[#8B3BC0] transition-colors"
              >
                <Clock className="h-4 w-4 mr-2" />
                {interval}
              </Badge>
            ))}
          </div>

          {/* Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.categories.map((category, index) => (
              <Card
                key={index}
                className="bg-[#1B123F]/30 border-[#331659] hover:border-[#8B3BC0]/50 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-[#8B3BC0]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-6 w-6 text-[#8B3BC0]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{category.title}</h3>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {category.intervals.map((interval, idx) => (
                      <Badge key={idx} className="bg-[#8B3BC0]/20 text-[#8B3BC0] text-xs px-2 py-1">
                        {interval}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
