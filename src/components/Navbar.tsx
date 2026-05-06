'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#investimento', label: 'Investimento' },
  { href: '#faq', label: 'FAQ' },
]

const WA_LINK =
  'https://wa.me/556884240245?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20WKCODE.'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(0,30,65,0.85)] backdrop-blur-xl border-b border-white/10 shadow-[0_2px_20px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between">

        {/* LOGO AJUSTADO */}
        <a href="#" className="flex items-center">
          <div className="rounded-xl overflow-hidden ring-1 ring-white/10">
            <Image
              src="/images/logo.png"
              alt="WKCODE"
              className="h-14 w-auto"
              width={220}
              height={55}
              priority
            />
          </div>
        </a>

        {/* MENU DESKTOP */}
        <ul className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-white/65 hover:text-white transition-colors duration-200 relative group"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-[#00BFFF] to-[#0048E4] group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + MENU MOBILE */}
        <div className="flex items-center gap-3">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2 btn-gradient rounded-full text-sm transition-all duration-300"
          >
            Começar agora
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <button
            className="lg:hidden flex items-center justify-center w-9 h-9 text-white"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* MENU MOBILE */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-[rgba(0,30,65,0.95)] backdrop-blur-xl border-b border-white/10`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="block text-sm font-medium py-1 text-white/75 hover:text-white transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}

          <li className="pt-2">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-5 py-3 btn-gradient rounded-full text-sm"
            >
              Começar agora
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}