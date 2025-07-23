import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsPage({ params }: { params: { lang: string } }) {
  const content = {
    en: {
      title: "Terms of Service",
      lastUpdated: "Last updated: December 2024",
      sections: [
        {
          title: "Acceptance of Terms",
          content:
            "By accessing and using Trading Pro GPT, you accept and agree to be bound by the terms and provision of this agreement.",
        },
        {
          title: "Service Description",
          content:
            "Trading Pro GPT provides AI-powered trading signals and market analysis. Our service is for informational purposes only and does not constitute financial advice.",
        },
        {
          title: "Risk Disclaimer",
          content:
            "Trading involves significant risk of capital loss. Past performance does not guarantee future results. You should never invest money you cannot afford to lose.",
        },
        {
          title: "User Responsibilities",
          content:
            "Users are responsible for their own trading decisions and must comply with all applicable laws and regulations in their jurisdiction.",
        },
        {
          title: "Limitation of Liability",
          content:
            "Xentris.tech and its partners are not liable for any trading losses or damages resulting from the use of our service.",
        },
        {
          title: "Intellectual Property",
          content:
            "All content, algorithms, and intellectual property remain the property of Xentris.tech and its partners including OpenAI and TwelveData.",
        },
        {
          title: "Termination",
          content:
            "We reserve the right to terminate or suspend access to our service at any time for violations of these terms.",
        },
        {
          title: "Contact Information",
          content: "For questions about these terms, contact us at contacto@xentris.tech.",
        },
      ],
    },
    es: {
      title: "Términos de Servicio",
      lastUpdated: "Última actualización: Diciembre 2024",
      sections: [
        {
          title: "Aceptación de Términos",
          content:
            "Al acceder y usar Trading Pro GPT, aceptas y acuerdas estar sujeto a los términos y disposiciones de este acuerdo.",
        },
        {
          title: "Descripción del Servicio",
          content:
            "Trading Pro GPT proporciona señales de trading y análisis de mercado impulsados por IA. Nuestro servicio es solo para fines informativos y no constituye asesoría financiera.",
        },
        {
          title: "Aviso de Riesgo",
          content:
            "El trading involucra riesgo significativo de pérdida de capital. El rendimiento pasado no garantiza resultados futuros. Nunca debes invertir dinero que no puedes permitirte perder.",
        },
        {
          title: "Responsabilidades del Usuario",
          content:
            "Los usuarios son responsables de sus propias decisiones de trading y deben cumplir con todas las leyes y regulaciones aplicables en su jurisdicción.",
        },
        {
          title: "Limitación de Responsabilidad",
          content:
            "Xentris.tech y sus socios no son responsables de ninguna pérdida de trading o daños resultantes del uso de nuestro servicio.",
        },
        {
          title: "Propiedad Intelectual",
          content:
            "Todo el contenido, algoritmos y propiedad intelectual permanecen como propiedad de Xentris.tech y sus socios incluyendo OpenAI y TwelveData.",
        },
        {
          title: "Terminación",
          content:
            "Nos reservamos el derecho de terminar o suspender el acceso a nuestro servicio en cualquier momento por violaciones de estos términos.",
        },
        {
          title: "Información de Contacto",
          content: "Para preguntas sobre estos términos, contáctanos en contacto@xentris.tech.",
        },
      ],
    },
  }

  const t = content[params.lang as keyof typeof content] || content.en

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{t.title}</h1>
          <p className="text-gray-400">{t.lastUpdated}</p>
        </div>

        <div className="space-y-6">
          {t.sections.map((section, index) => (
            <Card key={index} className="bg-[#1B123F]/30 border-[#331659]">
              <CardHeader>
                <CardTitle className="text-white text-xl">{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">{section.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
