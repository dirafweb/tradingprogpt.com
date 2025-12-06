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
          question: "Does this tool give financial advice?",
          answer:
            "No. Trading Pro GPT is strictly an educational tool. It does not give financial, investment, or trading advice. It helps you understand market concepts and data for learning purposes only.",
        },
        {
          question: "Can it tell me what to buy or sell?",
          answer:
            "No. The platform provides educational analysis only. It does not provide trading signals or actionable recommendations. All content is for learning and research purposes.",
        },
        {
          question: "Is this safe to use?",
          answer:
            "Yes. It uses publicly available market data for learning and educational purposes. We implement international security and privacy standards to protect your data.",
        },
        {
          question: "Do I need experience?",
          answer:
            "Not at all — the platform is designed to explain concepts clearly for all levels, from complete beginners to those seeking advanced understanding.",
        },
        {
          question: "What markets does it cover?",
          answer:
            "Trading Pro GPT covers educational content for Stocks, Forex, and Cryptocurrency markets. You can learn about indicators, patterns, and market dynamics across all three.",
        },
        {
          question: "What are the pricing options?",
          answer:
            "We offer two plans: Basic Plan at $100 USD/month (ChatGPT Enterprise GPT for Forex & Crypto, requires your own OpenAI Plus subscription at $20/month), and Enterprise Business at $300 USD/month (includes OpenAI Enterprise and professional education for all markets) for complete access.",
        },
        {
          question: "What's included in the Basic Plan ($100/month)?",
          answer:
            "The Basic Plan (ChatGPT Enterprise GPT - Forex & Crypto Actions) includes full access to Trading Pro GPT educational features for Forex and Cryptocurrency markets, real-time data visualization, indicator explanations, and standard support. Requires a separate OpenAI Plus subscription ($20/month). Total: $120/month.",
        },
        {
          question: "What's included in the Enterprise Business Plan ($300/month)?",
          answer:
            "The Enterprise Business Plan includes: OpenAI Enterprise access (no separate subscription needed), all educational features for Stocks, Forex & Crypto, professional learning modules and resources, advanced data analysis tools, and priority 24/7 support.",
        },
        {
          question: "Can I access it from mobile and desktop?",
          answer:
            "Yes, Trading Pro GPT is accessible through ChatGPT on all devices including mobile phones, tablets, and desktop computers. The interface is responsive and optimized for all screen sizes.",
        },
        {
          question: "What personal data is collected?",
          answer:
            "We collect minimal personal data necessary for service operation, following international privacy standards. This includes basic account information. We never share your personal data with third parties without consent.",
        },
      ],
    },
    es: {
      title: "Preguntas Frecuentes",
      subtitle: "Todo lo que necesitas saber sobre Trading Pro GPT",
      faqs: [
        {
          question: "¿Esta herramienta da asesoría financiera?",
          answer:
            "No. Trading Pro GPT es estrictamente una herramienta educativa. No da asesoría financiera, de inversión o de trading. Te ayuda a entender conceptos de mercado y datos solo con fines de aprendizaje.",
        },
        {
          question: "¿Puede decirme qué comprar o vender?",
          answer:
            "No. La plataforma proporciona análisis educativo únicamente. No proporciona señales de trading ni recomendaciones accionables. Todo el contenido es para fines de aprendizaje e investigación.",
        },
        {
          question: "¿Es seguro usar?",
          answer:
            "Sí. Utiliza datos de mercado disponibles públicamente para fines de aprendizaje y educación. Implementamos estándares internacionales de seguridad y privacidad para proteger tus datos.",
        },
        {
          question: "¿Necesito experiencia?",
          answer:
            "Para nada — la plataforma está diseñada para explicar conceptos claramente para todos los niveles, desde principiantes completos hasta quienes buscan comprensión avanzada.",
        },
        {
          question: "¿Qué mercados cubre?",
          answer:
            "Trading Pro GPT cubre contenido educativo para mercados de Acciones, Forex y Criptomonedas. Puedes aprender sobre indicadores, patrones y dinámica del mercado en los tres.",
        },
        {
          question: "¿Cuáles son las opciones de precios?",
          answer:
            "Ofrecemos dos planes: Plan Básico a $100 USD/mes (ChatGPT Enterprise GPT para Forex y Crypto, requiere tu propia suscripción de OpenAI Plus a $20/mes), y Enterprise Business a $300 USD/mes (incluye OpenAI Enterprise y educación profesional para todos los mercados) para acceso completo.",
        },
        {
          question: "¿Qué incluye el Plan Básico ($100/mes)?",
          answer:
            "El Plan Básico (ChatGPT Enterprise GPT - Acciones Forex y Crypto) incluye acceso completo a las funciones educativas de Trading Pro GPT para mercados Forex y Criptomonedas, visualización de datos en tiempo real, explicaciones de indicadores y soporte estándar. Requiere suscripción separada de OpenAI Plus ($20/mes). Total: $120/mes.",
        },
        {
          question: "¿Qué incluye el Plan Enterprise Business ($300/mes)?",
          answer:
            "El Plan Enterprise Business incluye: acceso a OpenAI Enterprise (sin suscripción separada necesaria), todas las funciones educativas para Acciones, Forex y Crypto, módulos y recursos de aprendizaje profesional, herramientas avanzadas de análisis de datos y soporte prioritario 24/7.",
        },
        {
          question: "¿Puedo acceder desde móvil y escritorio?",
          answer:
            "Sí, Trading Pro GPT es accesible a través de ChatGPT en todos los dispositivos incluyendo teléfonos móviles, tablets y computadoras de escritorio. La interfaz es responsive y optimizada para todos los tamaños de pantalla.",
        },
        {
          question: "¿Qué datos personales se recopilan?",
          answer:
            "Recopilamos datos personales mínimos necesarios para la operación del servicio, siguiendo estándares internacionales de privacidad. Esto incluye información básica de cuenta. Nunca compartimos tus datos personales con terceros sin consentimiento.",
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
