import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Coins, BarChart3, Gem, FileText, ExternalLink } from "lucide-react"
import Link from "next/link"

interface SupportedAssetsSectionProps {
  lang: string
}

export function SupportedAssetsSection({ lang }: SupportedAssetsSectionProps) {
  const content = {
    en: {
      title: "Which markets can I analyze with Trading Pro GPT?",
      subtitle: "Comprehensive coverage across all major financial markets",
      description:
        "Forex (over 1,400 pairs), 2,213 cryptocurrencies, 13 commodities, 15 indices, 6 metals, 6 bonds, and more than 35,000 stocks from around the world.",
      viewDatabase: "Check out the full list in our Airtable database",
      buttonText: "View Complete Database",
      assets: [
        {
          icon: TrendingUp,
          name: "Forex",
          count: "1,400+ pairs",
          description: "Major, minor, and exotic currency pairs",
        },
        {
          icon: Coins,
          name: "Cryptocurrencies",
          count: "2,213 coins",
          description: "Bitcoin, Ethereum, altcoins, and DeFi tokens",
        },
        {
          icon: BarChart3,
          name: "Stocks",
          count: "35,000+ stocks",
          description: "Global equities from major exchanges worldwide",
        },
        {
          icon: Gem,
          name: "Commodities & Metals",
          count: "19 assets",
          description: "Gold, silver, oil, agricultural products",
        },
        {
          icon: FileText,
          name: "Indices & Bonds",
          count: "21 instruments",
          description: "Major stock indices and government bonds",
        },
      ],
    },
    es: {
      title: "¿Qué mercados puedo analizar con Trading Pro GPT?",
      subtitle: "Cobertura integral en todos los principales mercados financieros",
      description:
        "Forex (más de 1,400 pares), 2,213 criptomonedas, 13 commodities, 15 índices, 6 metales, 6 bonos y más de 35,000 acciones de todo el mundo.",
      viewDatabase: "Consulta el listado completo en nuestra base de datos de Airtable",
      buttonText: "Ver Base de Datos Completa",
      assets: [
        {
          icon: TrendingUp,
          name: "Forex",
          count: "1,400+ pares",
          description: "Pares de divisas mayores, menores y exóticos",
        },
        {
          icon: Coins,
          name: "Criptomonedas",
          count: "2,213 monedas",
          description: "Bitcoin, Ethereum, altcoins y tokens DeFi",
        },
        {
          icon: BarChart3,
          name: "Acciones",
          count: "35,000+ acciones",
          description: "Acciones globales de las principales bolsas mundiales",
        },
        {
          icon: Gem,
          name: "Commodities y Metales",
          count: "19 activos",
          description: "Oro, plata, petróleo, productos agrícolas",
        },
        {
          icon: FileText,
          name: "Índices y Bonos",
          count: "21 instrumentos",
          description: "Principales índices bursátiles y bonos gubernamentales",
        },
      ],
    },
  }

  const t = content[lang as keyof typeof content] || content.en

  return (
    <section className="py-20 bg-[#0D0D0D]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">{t.title}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">{t.subtitle}</p>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">{t.description}</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {t.assets.map((asset, index) => (
              <Card
                key={index}
                className="bg-[#1B123F]/30 border-[#331659] hover:border-[#8B3BC0]/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#8B3BC0]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <asset.icon className="h-8 w-8 text-[#8B3BC0]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{asset.name}</h3>
                  <Badge className="bg-[#8B3BC0] text-white mb-3 px-3 py-1">{asset.count}</Badge>
                  <p className="text-gray-300 text-sm leading-relaxed">{asset.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-300 mb-6">{t.viewDatabase}</p>
            <Button
              asChild
              size="lg"
              className="bg-[#8B3BC0] hover:bg-[#8B3BC0]/80 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="https://airtable.com/appEPODi9NwKZZ1X0/shrGFMFSRpxw0MHy4" target="_blank">
                <ExternalLink className="h-5 w-5 mr-3" />
                {t.buttonText}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
