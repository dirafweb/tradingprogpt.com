import { AlertTriangle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface RiskDisclaimerProps {
  lang: string
}

export function RiskDisclaimer({ lang }: RiskDisclaimerProps) {
  const content = {
    en: {
      title: "Important Risk Disclaimer",
      disclaimer:
        "Trading involves significant risk of capital loss. This tool is not financial advice. Past results do not guarantee future returns. Consult with a professional before trading. Never invest more than you can afford to lose.",
    },
    es: {
      title: "Aviso Importante de Riesgo",
      disclaimer:
        "El trading conlleva riesgos significativos de pérdida de capital. Esta herramienta no constituye asesoría financiera. Los resultados pasados no garantizan rendimientos futuros. Consulta con un profesional antes de operar. Nunca inviertas más de lo que puedes permitirte perder.",
    },
  }

  const t = content[lang as keyof typeof content] || content.en

  return (
    <section className="py-12 bg-[#1B123F]/20">
      <div className="container mx-auto px-4">
        <Alert className="max-w-4xl mx-auto bg-yellow-500/10 border-yellow-500/30">
          <AlertTriangle className="h-5 w-5 text-yellow-500" />
          <AlertDescription className="text-yellow-200 font-medium">
            <strong className="block mb-2">{t.title}</strong>
            {t.disclaimer}
          </AlertDescription>
        </Alert>
      </div>
    </section>
  )
}
