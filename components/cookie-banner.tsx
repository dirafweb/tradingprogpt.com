"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Cookie } from "lucide-react"

interface CookieBannerProps {
  lang: string
}

export function CookieBanner({ lang }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false)

  const content = {
    en: {
      title: "Cookie Notice",
      message:
        "We use cookies to enhance your experience and analyze site usage. By continuing to use our site, you consent to our use of cookies.",
      accept: "Accept All",
      decline: "Decline",
      learnMore: "Learn More",
    },
    es: {
      title: "Aviso de Cookies",
      message:
        "Utilizamos cookies para mejorar tu experiencia y analizar el uso del sitio. Al continuar usando nuestro sitio, consientes nuestro uso de cookies.",
      accept: "Aceptar Todo",
      decline: "Rechazar",
      learnMore: "Más Información",
    },
  }

  const t = content[lang as keyof typeof content] || content.en

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#1B123F] border-t border-[#331659] p-4 shadow-lg">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="h-6 w-6 text-[#8B3BC0] flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-white font-semibold mb-1">{t.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{t.message}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={handleDecline}
              className="border-[#331659] text-gray-300 hover:bg-[#331659] hover:text-white bg-transparent"
            >
              {t.decline}
            </Button>
            <Button size="sm" onClick={handleAccept} className="bg-[#8B3BC0] hover:bg-[#8B3BC0]/80 text-white">
              {t.accept}
            </Button>
            <Button variant="ghost" size="sm" asChild className="text-gray-400 hover:text-white">
              <a href={`/${lang}/cookies`}>{t.learnMore}</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
