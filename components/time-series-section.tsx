import { BarChart3 } from "lucide-react"

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
          {/* Minimalist intervals display */}
          <div className="mb-16">
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-2 mb-8">
              {t.intervals.slice(0, 9).map((interval, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-[#8B3BC0]/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8B3BC0]/0 to-[#8B3BC0]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative p-4 text-center">
                    <div className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                      {interval}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Long-term intervals with different styling */}
            <div className="flex justify-center gap-4">
              {t.intervals.slice(9).map((interval, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#8B3BC0]/20 to-[#331659]/30 backdrop-blur-sm border border-[#8B3BC0]/30 hover:border-[#8B3BC0]/70 transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#8B3BC0]/10 to-[#8B3BC0]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative px-6 py-3 text-center">
                    <div className="text-base font-semibold text-white group-hover:text-white transition-colors">
                      {interval}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Simplified categories with modern cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.categories.map((category, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-[#8B3BC0]/50 transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B3BC0]/0 via-[#8B3BC0]/5 to-[#8B3BC0]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#8B3BC0]/20 to-[#8B3BC0]/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="h-8 w-8 text-[#8B3BC0]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#8B3BC0] transition-colors duration-300">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {category.intervals.map((interval, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium text-[#8B3BC0] bg-[#8B3BC0]/10 rounded-full border border-[#8B3BC0]/20 group-hover:bg-[#8B3BC0]/20 group-hover:border-[#8B3BC0]/40 transition-all duration-300"
                      >
                        {interval}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
