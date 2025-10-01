import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FAQSectionProps {
  lang: string
}

export function FAQSection({ lang }: FAQSectionProps) {
  const content = {
    en: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about Trading Pro GPT",
      faqs: [
        {
          question: "What is Trading Pro GPT?",
          answer:
            "Trading Pro GPT is a real-time trading signals and analysis solution, developed by Xentris.tech using OpenAI AI and TwelveData data. It provides comprehensive market analysis, automated signals, and AI-powered strategies for Stocks, Forex, and Crypto markets.",
        },
        {
          question: "What markets does it cover?",
          answer:
            "Trading Pro GPT covers three major markets: Stocks (equities), Forex (foreign exchange), and Cryptocurrency. Our AI analyzes real-time data from all these markets to provide comprehensive trading insights.",
        },
        {
          question: "Do I need prior experience in trading or AI?",
          answer:
            "No prior experience is required. Trading Pro GPT is designed for all levels, from complete beginners to advanced traders. Our intuitive interface and comprehensive onboarding process make it easy for anyone to start trading with AI assistance.",
        },
        {
          question: "How do the signals work?",
          answer:
            "Our signals are generated through advanced AI analysis of technical indicators, fundamental data, market sentiment, and real-time price movements. The AI processes vast amounts of data to identify trading opportunities and present them as clear, actionable signals.",
        },
        {
          question: "Can I customize my strategies?",
          answer:
            "Yes, Trading Pro GPT offers customizable strategies that adapt to your risk tolerance, trading style, and market preferences. You can adjust parameters and settings to align with your personal trading approach.",
        },
        {
          question: "How reliable are the signals?",
          answer:
            "Our signals are based on professional-grade data from TwelveData and advanced AI analysis. While no trading system can guarantee profits, our AI-powered approach helps eliminate emotional bias and provides data-driven insights for better decision-making.",
        },
        {
          question: "How much does the tool cost?",
          answer:
            "Trading Pro GPT costs $50 USD per month. For the complete professional solution, you'll also need OpenAI Plus ($20 USD/month), making the total $70 USD per month for unlimited access to all features and professional-grade trading tools.",
        },
        {
          question: "What personal data is collected?",
          answer:
            "We collect minimal personal data necessary for service operation, following international privacy standards. This includes basic account information and trading preferences. We never share your personal data with third parties without consent.",
        },
        {
          question: "How does Trading Pro GPT protect my privacy?",
          answer:
            "We implement international security and privacy standards to protect your data. All information is encrypted, securely stored, and processed according to GDPR and other international privacy regulations.",
        },
        {
          question: "Is trading safe?",
          answer:
            "Trading involves inherent risks and potential for significant capital loss. Trading Pro GPT is a tool to assist decision-making but does not eliminate market risks. Always trade responsibly and never invest more than you can afford to lose.",
        },
        {
          question: "Can I access it from mobile and desktop?",
          answer:
            "Yes, Trading Pro GPT is accessible through ChatGPT on all devices including mobile phones, tablets, and desktop computers. The interface is responsive and optimized for all screen sizes.",
        },
        {
          question: "Why do I need both OpenAI Plus and Trading Pro GPT?",
          answer:
            "OpenAI Plus ($20/month) provides the AI engine with unlimited responses and speed. Trading Pro GPT ($50/month) adds specialized trading features, real-time data, personalized signals, and professional analysis. Together they create a complete professional trading solution for $70/month total.",
        },
        {
          question: "What is included in the 14-day free trial?",
          answer:
            "The 14-day trial includes complete unlimited access to all Trading Pro GPT features: real-time signals, professional analysis, unlimited queries, all indicators, and priority support. No restrictions during the trial period.",
        },
        {
          question: "How much does the complete solution cost?",
          answer:
            "The complete professional solution costs $70 USD per month total: $20 USD for OpenAI Plus plus $50 USD for Trading Pro GPT. This gives you unlimited access to all features and professional-grade trading tools.",
        },
      ],
    },
    es: {
      title: "Preguntas Frecuentes",
      subtitle: "Todo lo que necesitas saber sobre Trading Pro GPT",
      faqs: [
        {
          question: "¿Qué es Trading Pro GPT?",
          answer:
            "Trading Pro GPT es una solución de señales y análisis de trading en tiempo real, desarrollada por Xentris.tech usando IA de OpenAI y datos de TwelveData. Proporciona análisis integral del mercado, señales automáticas y estrategias impulsadas por IA para mercados de Acciones, Forex y Cripto.",
        },
        {
          question: "¿Qué mercados cubre?",
          answer:
            "Trading Pro GPT cubre tres mercados principales: Acciones, Forex y Criptomonedas. Nuestra IA analiza datos en tiempo real de todos estos mercados para proporcionar insights integrales de trading.",
        },
        {
          question: "¿Necesito experiencia previa en trading o IA?",
          answer:
            "No se requiere experiencia previa. Trading Pro GPT está diseñado para todos los niveles, desde principiantes completos hasta traders avanzados. Nuestra interfaz intuitiva y proceso de onboarding integral facilitan que cualquiera comience a hacer trading con asistencia IA.",
        },
        {
          question: "¿Cómo funcionan las señales?",
          answer:
            "Nuestras señales se generan a través de análisis IA avanzado de indicadores técnicos, datos fundamentales, sentimiento del mercado y movimientos de precios en tiempo real. La IA procesa grandes cantidades de datos para identificar oportunidades de trading y presentarlas como señales claras y accionables.",
        },
        {
          question: "¿Puedo personalizar mis estrategias?",
          answer:
            "Sí, Trading Pro GPT ofrece estrategias personalizables que se adaptan a tu tolerancia al riesgo, estilo de trading y preferencias de mercado. Puedes ajustar parámetros y configuraciones para alinearte con tu enfoque personal de trading.",
        },
        {
          question: "¿Qué tan seguras son las señales?",
          answer:
            "Nuestras señales se basan en datos de grado profesional de TwelveData y análisis IA avanzado. Aunque ningún sistema de trading puede garantizar ganancias, nuestro enfoque impulsado por IA ayuda a eliminar el sesgo emocional y proporciona insights basados en datos para mejor toma de decisiones.",
        },
        {
          question: "¿Cuánto cuesta la herramienta?",
          answer:
            "Trading Pro GPT cuesta $50 USD por mes. Para la solución profesional completa, también necesitarás OpenAI Plus ($20 USD/mes), haciendo un total de $70 USD por mes para acceso ilimitado a todas las funciones y herramientas de trading de grado profesional.",
        },
        {
          question: "¿Qué datos personales se recopilan?",
          answer:
            "Recopilamos datos personales mínimos necesarios para la operación del servicio, siguiendo estándares internacionales de privacidad. Esto incluye información básica de cuenta y preferencias de trading. Nunca compartimos tus datos personales con terceros sin consentimiento.",
        },
        {
          question: "¿Cómo protege Trading Pro GPT mi privacidad?",
          answer:
            "Implementamos estándares internacionales de seguridad y privacidad para proteger tus datos. Toda la información está encriptada, almacenada de forma segura y procesada según GDPR y otras regulaciones internacionales de privacidad.",
        },
        {
          question: "¿Es seguro el trading?",
          answer:
            "El trading involucra riesgos inherentes y potencial de pérdida significativa de capital. Trading Pro GPT es una herramienta para asistir en la toma de decisiones pero no elimina los riesgos del mercado. Siempre opera responsablemente y nunca inviertas más de lo que puedes permitirte perder.",
        },
        {
          question: "¿Puedo acceder desde móvil y escritorio?",
          answer:
            "Sí, Trading Pro GPT es accesible a través de ChatGPT en todos los dispositivos incluyendo teléfonos móviles, tablets y computadoras de escritorio. La interfaz es responsive y optimizada para todos los tamaños de pantalla.",
        },
        {
          question: "¿Por qué necesito tanto OpenAI Plus como Trading Pro GPT?",
          answer:
            "OpenAI Plus ($20/mes) proporciona el motor IA con respuestas ilimitadas y velocidad. Trading Pro GPT ($50/mes) añade funciones especializadas de trading, datos en tiempo real, señales personalizadas y análisis profesional. Juntos crean una solución completa de trading profesional por $70/mes en total.",
        },
        {
          question: "¿Qué incluye la prueba gratuita de 14 días?",
          answer:
            "La prueba de 14 días incluye acceso completo ilimitado a todas las funciones de Trading Pro GPT: señales en tiempo real, análisis profesional, consultas ilimitadas, todos los indicadores y soporte prioritario. Sin restricciones durante el período de prueba.",
        },
        {
          question: "¿Cuánto cuesta la solución completa?",
          answer:
            "La solución profesional completa cuesta $70 USD por mes en total: $20 USD por OpenAI Plus más $50 USD por Trading Pro GPT. Esto te da acceso ilimitado a todas las funciones y herramientas de trading de grado profesional.",
        },
      ],
    },
  }

  const t = content[lang as keyof typeof content] || content.en

  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url: `https://tradingprogpt.com/${lang}#faq`,
    name: t.title,
    description: t.subtitle,
    inLanguage: lang,
    mainEntity: t.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <section id="faq" className="py-20 bg-gradient-to-b from-[#0D0D0D] to-[#1B123F]/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">{t.title}</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t.subtitle}</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {t.faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-[#1B123F]/30 border-[#331659] rounded-lg px-6 hover:border-[#8B3BC0]/50 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left text-white hover:text-[#8B3BC0] py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pb-6 leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* FAQ Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  )
}
