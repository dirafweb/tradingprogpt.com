import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const { lang } = params

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: `https://tradingprogpt.com/${lang}/cookies`,
    name: lang === "es" ? "Política de Cookies - Trading Pro GPT" : "Cookie Policy - Trading Pro GPT",
    description:
      lang === "es"
        ? "Política de cookies de Trading Pro GPT. Información sobre cómo utilizamos las cookies en nuestro sitio web."
        : "Trading Pro GPT cookie policy. Information about how we use cookies on our website.",
    inLanguage: lang,
    isPartOf: {
      "@type": "WebSite",
      name: "Trading Pro GPT",
      url: "https://tradingprogpt.com",
    },
  }

  return {
    title: lang === "es" ? "Política de Cookies - Trading Pro GPT" : "Cookie Policy - Trading Pro GPT",
    description:
      lang === "es"
        ? "Política de cookies de Trading Pro GPT. Información sobre cómo utilizamos las cookies en nuestro sitio web."
        : "Trading Pro GPT cookie policy. Information about how we use cookies on our website.",
    other: {
      "script:ld+json": JSON.stringify(webPageSchema),
    },
  }
}

export default function CookiesPage({ params }: { params: { lang: string } }) {
  const content = {
    en: {
      title: "Cookie Policy",
      lastUpdated: "Last updated: December 2024",
      sections: [
        {
          title: "What Are Cookies",
          content:
            "Cookies are small text files stored on your device when you visit our website. They help us provide a better user experience and analyze site usage patterns.",
        },
        {
          title: "Types of Cookies We Use",
          content:
            "We use essential cookies for site functionality, analytics cookies to understand user behavior, and preference cookies to remember your settings like language selection.",
        },
        {
          title: "Essential Cookies",
          content:
            "These cookies are necessary for the website to function properly. They enable basic features like page navigation, language selection, and security features.",
        },
        {
          title: "Analytics Cookies",
          content:
            "We use analytics cookies to understand how visitors interact with our website. This helps us improve our services and user experience.",
        },
        {
          title: "Managing Cookies",
          content:
            "You can control cookies through your browser settings. However, disabling certain cookies may affect website functionality and your user experience.",
        },
        {
          title: "Contact Us",
          content: "If you have questions about our cookie policy, please contact us at info@xentris.tech.",
        },
      ],
    },
    es: {
      title: "Política de Cookies",
      lastUpdated: "Última actualización: Diciembre 2024",
      sections: [
        {
          title: "Qué son las Cookies",
          content:
            "Las cookies son pequeños archivos de texto almacenados en tu dispositivo cuando visitas nuestro sitio web. Nos ayudan a proporcionar una mejor experiencia de usuario y analizar patrones de uso del sitio.",
        },
        {
          title: "Tipos de Cookies que Usamos",
          content:
            "Usamos cookies esenciales para la funcionalidad del sitio, cookies de análisis para entender el comportamiento del usuario, y cookies de preferencias para recordar tus configuraciones como la selección de idioma.",
        },
        {
          title: "Cookies Esenciales",
          content:
            "Estas cookies son necesarias para que el sitio web funcione correctamente. Habilitan características básicas como navegación de páginas, selección de idioma y características de seguridad.",
        },
        {
          title: "Cookies de Análisis",
          content:
            "Usamos cookies de análisis para entender cómo los visitantes interactúan con nuestro sitio web. Esto nos ayuda a mejorar nuestros servicios y experiencia de usuario.",
        },
        {
          title: "Gestión de Cookies",
          content:
            "Puedes controlar las cookies a través de la configuración de tu navegador. Sin embargo, deshabilitar ciertas cookies puede afectar la funcionalidad del sitio web y tu experiencia de usuario.",
        },
        {
          title: "Contáctanos",
          content: "Si tienes preguntas sobre nuestra política de cookies, por favor contáctanos en info@xentris.tech.",
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
