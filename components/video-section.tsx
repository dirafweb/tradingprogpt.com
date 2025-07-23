interface VideoSectionProps {
  lang: string
}

export function VideoSection({ lang }: VideoSectionProps) {
  const content = {
    en: {
      title: "See Trading Pro GPT in Action",
      subtitle: "Watch how our AI-powered trading assistant transforms your trading experience",
      description:
        "Discover the power of real-time analysis, automated signals, and intelligent insights that help you make better trading decisions.",
    },
    es: {
      title: "Ve Trading Pro GPT en Acción",
      subtitle: "Mira cómo nuestro asistente de trading con IA transforma tu experiencia de trading",
      description:
        "Descubre el poder del análisis en tiempo real, señales automáticas e insights inteligentes que te ayudan a tomar mejores decisiones de trading.",
    },
  }

  const t = content[lang as keyof typeof content] || content.en

  return (
    <section className="py-20 bg-[#0D0D0D]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">{t.title}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">{t.subtitle}</p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">{t.description}</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#1B123F] to-[#331659] p-2">
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/euwt8HMDmHo"
                title="Trading Pro GPT Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Video stats or highlights */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12 text-gray-400">
          <div className="text-center">
            <div className="text-2xl font-bold text-[#8B3BC0] mb-1">2:30</div>
            <div className="text-sm">{lang === "es" ? "Duración" : "Duration"}</div>
          </div>
          <div className="hidden md:block w-px h-12 bg-gray-600" />
          <div className="text-center">
            <div className="text-2xl font-bold text-[#8B3BC0] mb-1">HD</div>
            <div className="text-sm">{lang === "es" ? "Calidad" : "Quality"}</div>
          </div>
          <div className="hidden md:block w-px h-12 bg-gray-600" />
          <div className="text-center">
            <div className="text-2xl font-bold text-[#8B3BC0] mb-1">Live</div>
            <div className="text-sm">{lang === "es" ? "Demo en Vivo" : "Live Demo"}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
