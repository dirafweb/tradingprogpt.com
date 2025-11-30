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
        "This platform is for educational purposes only and does not provide financial advice, trading recommendations, or investment strategies. Trading and investing involve significant risk of loss. Past performance does not guarantee future results. Consult with a licensed financial professional before making financial decisions. Never risk money you cannot afford to lose.",
    },
    es: {
      title: "Aviso Importante de Riesgo",
      disclaimer:
        "Esta plataforma es solo para fines educativos y no proporciona asesoría financiera, recomendaciones de trading ni estrategias de inversión. El trading y la inversión conllevan riesgo significativo de pérdida. El rendimiento pasado no garantiza resultados futuros. Consulta con un profesional financiero autorizado antes de tomar decisiones financieras. Nunca arriesgues dinero que no puedes permitirte perder.",
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
