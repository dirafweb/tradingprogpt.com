"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LanguageSelector } from "@/components/language-selector"
import { Menu, X } from "lucide-react"

interface HeaderProps {
  lang: string
}

export function Header({ lang }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const content = {
    en: {
      goToApp: "Go to App",
      features: "Features",
      howItWorks: "How It Works",
      faq: "FAQ",
    },
    es: {
      goToApp: "Ir a la aplicación",
      features: "Características",
      howItWorks: "Cómo funciona",
      faq: "Preguntas frecuentes",
    },
  }

  const t = content[lang as keyof typeof content] || content.en

  return (
    <header className="sticky top-0 z-50 bg-[#0D0D0D]/95 backdrop-blur-sm border-b border-[#331659]/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo placeholder - User will upload SVG later */}
          <Link href={`/${lang}`} className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#8B3BC0] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">X</span>
            </div>
            <div className="text-xl font-bold text-white">Trading Pro GPT</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href={`/${lang}#features`} className="text-gray-300 hover:text-[#8B3BC0] transition-colors">
              {t.features}
            </Link>
            <Link href={`/${lang}#how-it-works`} className="text-gray-300 hover:text-[#8B3BC0] transition-colors">
              {t.howItWorks}
            </Link>
            <Link href={`/${lang}#faq`} className="text-gray-300 hover:text-[#8B3BC0] transition-colors">
              {t.faq}
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <LanguageSelector currentLang={lang} />
            <Button asChild className="bg-[#8B3BC0] hover:bg-[#8B3BC0]/80 text-white hidden md:inline-flex">
              <Link href="https://chatgpt.com/g/g-Apjq2CgWQ-trading-pro-gpt-trading-signals-insights" target="_blank">
                {t.goToApp}
              </Link>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#331659]/20">
            <nav className="flex flex-col space-y-4 mt-4">
              <Link href={`/${lang}#features`} className="text-gray-300 hover:text-[#8B3BC0] transition-colors">
                {t.features}
              </Link>
              <Link href={`/${lang}#how-it-works`} className="text-gray-300 hover:text-[#8B3BC0] transition-colors">
                {t.howItWorks}
              </Link>
              <Link href={`/${lang}#faq`} className="text-gray-300 hover:text-[#8B3BC0] transition-colors">
                {t.faq}
              </Link>
              <Button asChild className="bg-[#8B3BC0] hover:bg-[#8B3BC0]/80 text-white w-full">
                <Link href="https://chatgpt.com/g/g-Apjq2CgWQ-trading-pro-gpt-trading-signals-insights" target="_blank">
                  {t.goToApp}
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
