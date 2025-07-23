"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, MessageSquare } from "lucide-react"
import { useState } from "react"

interface SuggestedPromptsSectionProps {
  lang: string
}

export function SuggestedPromptsSection({ lang }: SuggestedPromptsSectionProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const content = {
    en: {
      title: "Try These Suggested Prompts",
      subtitle: "Test our GPT with these professional trading analysis examples",
      intro: "Try asking our GPT these prompts:",
      copyButton: "Copy",
      copiedButton: "Copied!",
      prompts: [
        "What is the overall sentiment for the EURUSD currency pair using ten-minute candles for the past ten hours?",
        "What is the overall sentiment for the BTCUSD currency pair using sixty-minute candles for the past sixty hours?",
        "What is the overall sentiment for the XAUUSD currency pair using daily candles for the past sixty days?",
        "What is the overall sentiment for the USDJPY currency pair using weekly candles for the past sixty weeks?",
        "What is the overall sentiment for the USDCAD currency pair using monthly candles for the past sixty months?",
      ],
    },
    es: {
      title: "Prueba Estos Prompts Sugeridos",
      subtitle: "Prueba nuestro GPT con estos ejemplos de análisis de trading profesional",
      intro: "Prueba preguntando a nuestro GPT:",
      copyButton: "Copiar",
      copiedButton: "¡Copiado!",
      prompts: [
        "¿Cuál es el sentimiento general del par EURUSD usando velas de diez minutos durante las últimas diez horas?",
        "¿Cuál es el sentimiento general de BTCUSD usando velas de sesenta minutos durante las últimas sesenta horas?",
        "¿Cuál es el sentimiento general de XAUUSD usando velas diarias durante los últimos sesenta días?",
        "¿Cuál es el sentimiento general de USDJPY usando velas semanales durante las últimas sesenta semanas?",
        "¿Cuál es el sentimiento general de USDCAD usando velas mensuales durante los últimos sesenta meses?",
      ],
    },
  }

  const t = content[lang as keyof typeof content] || content.en

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-[#1B123F]/20 to-[#0D0D0D]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">{t.title}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">{t.subtitle}</p>
          <p className="text-lg text-[#8B3BC0] font-semibold">{t.intro}</p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {t.prompts.map((prompt, index) => (
            <Card
              key={index}
              className="bg-[#1B123F]/30 border-[#331659] hover:border-[#8B3BC0]/50 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="p-2 bg-[#8B3BC0]/20 rounded-lg flex-shrink-0">
                      <MessageSquare className="h-5 w-5 text-[#8B3BC0]" />
                    </div>
                    <p className="text-gray-300 leading-relaxed flex-1">{prompt}</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(prompt, index)}
                    className="border-[#331659] text-gray-300 hover:bg-[#8B3BC0]/20 hover:border-[#8B3BC0] hover:text-white flex-shrink-0"
                  >
                    <Copy className="h-4 w-4 mr-2" />
                    {copiedIndex === index ? t.copiedButton : t.copyButton}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
