import Link from "next/link"
import Image from "next/image"
import { Linkedin, Twitter, Mail } from "lucide-react"

interface FooterProps {
  lang: string
}

export function Footer({ lang }: FooterProps) {
  const content = {
    en: {
      developedBy: "Developed by Xentris.tech",
      contact: "Contact",
      legal: "Legal",
      privacy: "Privacy Policy",
      cookies: "Cookie Policy",
      terms: "Terms of Service",
      poweredBy: "Powered by Xentris.tech, OpenAI & TwelveData",
      allRightsReserved: "All rights reserved.",
      riskNotice: "Trading involves significant risk. This is not financial advice.",
    },
    es: {
      developedBy: "Desarrollado por Xentris.tech",
      contact: "Contacto",
      legal: "Legal",
      privacy: "Política de Privacidad",
      cookies: "Política de Cookies",
      terms: "Términos de Servicio",
      poweredBy: "Desarrollado por Xentris.tech, OpenAI y TwelveData",
      allRightsReserved: "Todos los derechos reservados.",
      riskNotice: "El trading involucra riesgos significativos. Esto no es asesoría financiera.",
    },
  }

  const t = content[lang as keyof typeof content] || content.en

  return (
    <footer className="bg-[#1B123F] border-t border-[#331659]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/trading-pro-gpt-logo.png"
                alt="Trading Pro GPT Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div className="text-xl font-bold text-white">Trading Pro GPT</div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">{t.poweredBy}</p>
            <p className="text-sm text-gray-400">{t.developedBy}</p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.contact}</h3>
            <div className="space-y-3">
              <a
                href="mailto:info@xentris.tech"
                className="flex items-center text-gray-300 hover:text-[#8B3BC0] transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                info@xentris.tech
              </a>
              <div className="flex space-x-3">
                <a
                  href="https://linkedin.com/company/xentris"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#8B3BC0] transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com/xentris"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#8B3BC0] transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.legal}</h3>
            <div className="space-y-2">
              <Link
                href={`/${lang}/privacy`}
                className="block text-gray-300 hover:text-[#8B3BC0] transition-colors text-sm"
              >
                {t.privacy}
              </Link>
              <Link
                href={`/${lang}/cookies`}
                className="block text-gray-300 hover:text-[#8B3BC0] transition-colors text-sm"
              >
                {t.cookies}
              </Link>
              <Link
                href={`/${lang}/terms`}
                className="block text-gray-300 hover:text-[#8B3BC0] transition-colors text-sm"
              >
                {t.terms}
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-[#331659] mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2024 Xentris.tech. {t.allRightsReserved}</p>
            <p className="text-gray-400 text-sm text-center md:text-right">{t.riskNotice}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
