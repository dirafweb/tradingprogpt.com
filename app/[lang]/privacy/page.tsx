import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const { lang } = params

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: `https://tradingprogpt.com/${lang}/privacy`,
    name: lang === "es" ? "Política de Privacidad - Trading Pro GPT" : "Privacy Policy - Trading Pro GPT",
    description:
      lang === "es"
        ? "Política de privacidad de Trading Pro GPT. Información sobre cómo recopilamos, usamos y protegemos tus datos personales."
        : "Trading Pro GPT privacy policy. Information about how we collect, use, and protect your personal data.",
    inLanguage: lang,
    isPartOf: {
      "@type": "WebSite",
      name: "Trading Pro GPT",
      url: "https://tradingprogpt.com",
    },
  }

  return {
    title: lang === "es" ? "Política de Privacidad - Trading Pro GPT" : "Privacy Policy - Trading Pro GPT",
    description:
      lang === "es"
        ? "Política de privacidad de Trading Pro GPT. Información sobre cómo recopilamos, usamos y protegemos tus datos personales."
        : "Trading Pro GPT privacy policy. Information about how we collect, use, and protect your personal data.",
    other: {
      "script:ld+json": JSON.stringify(webPageSchema),
    },
  }
}

export default function PrivacyPage({ params }: { params: { lang: string } }) {
  const content = {
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: December 2024",
      sections: [
        {
          title: "Information We Collect",
          content:
            "We collect minimal personal information necessary for service operation, including basic account information and trading preferences. We do not collect sensitive financial data or personal trading positions.",
        },
        {
          title: "How We Use Your Information",
          content:
            "Your information is used solely to provide and improve our trading analysis services. We use data to personalize your experience and provide relevant market insights.",
        },
        {
          title: "Data Protection",
          content:
            "All personal data is encrypted and stored securely following international standards including GDPR compliance. We implement industry-standard security measures to protect your information.",
        },
        {
          title: "Third-Party Services",
          content:
            "We integrate with OpenAI for AI processing and TwelveData for market data. These services have their own privacy policies and security measures.",
        },
        {
          title: "Your Rights",
          content:
            "You have the right to access, modify, or delete your personal data. Contact us at contacto@xentris.tech for any privacy-related requests.",
        },
        {
          title: "Contact Information",
          content:
            "For privacy concerns or questions, contact us at contacto@xentris.tech. We are committed to protecting your privacy and will respond to all inquiries promptly.",
        },
      ],
    },
    es: {
      title: "Política de Privacidad",
      lastUpdated: "Última actualización: Diciembre 2024",
      sections: [
        {
          title: "Información que Recopilamos",
          content:
            "Recopilamos información personal mínima necesaria para la operación del servicio, incluyendo información básica de cuenta y preferencias de trading. No recopilamos datos financieros sensibles o posiciones de trading personales.",
        },
        {
          title: "Cómo Usamos tu Información",
          content:
            "Tu información se usa únicamente para proporcionar y mejorar nuestros servicios de análisis de trading. Usamos los datos para personalizar tu experiencia y proporcionar insights de mercado relevantes.",
        },
        {
          title: "Protección de Datos",
          content:
            "Todos los datos personales están encriptados y almacenados de forma segura siguiendo estándares internacionales incluyendo cumplimiento GDPR. Implementamos medidas de seguridad estándar de la industria para proteger tu información.",
        },
        {
          title: "Servicios de Terceros",
          content:
            "Nos integramos con OpenAI para procesamiento IA y TwelveData para datos de mercado. Estos servicios tienen sus propias políticas de privacidad y medidas de seguridad.",
        },
        {
          title: "Tus Derechos",
          content:
            "Tienes derecho a acceder, modificar o eliminar tus datos personales. Contáctanos en contacto@xentris.tech para cualquier solicitud relacionada con privacidad.",
        },
        {
          title: "Información de Contacto",
          content:
            "Para preocupaciones o preguntas sobre privacidad, contáctanos en contacto@xentris.tech. Estamos comprometidos a proteger tu privacidad y responderemos a todas las consultas prontamente.",
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
