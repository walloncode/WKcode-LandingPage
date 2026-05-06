'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import { ArrowRight, Radio } from 'lucide-react'

const WA_LINK =
  'https://wa.me/556884240245?text=Ol%C3%A1!%20Quero%20come%C3%A7ar%20meu%20projeto%20com%20a%20WKCODE.'

const STATS = [
  { value: '+50', label: 'Projetos entregues' },
  { value: '15d', label: 'Prazo máximo' },
  { value: '2sem', label: 'Suporte gratuito' },
]

export default function Hero() {
  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap')
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from('.hero-badge', { y: 16, opacity: 0, duration: 0.5, delay: 0.2 })
        .from('.hero-title span', { y: 48, opacity: 0, duration: 0.7, stagger: 0.04 }, '-=0.25')
        .from('.hero-sub', { y: 24, opacity: 0, duration: 0.6 }, '-=0.4')
        .from('.hero-actions', { y: 20, opacity: 0, duration: 0.5 }, '-=0.4')
        .from('.hero-stat', { y: 16, opacity: 0, duration: 0.4, stagger: 0.1 }, '-=0.3')
        .from('.hero-img-wrap', { x: 60, opacity: 0, duration: 0.9 }, '-=0.9')
    }
    init()
  }, [])

  return (
   <section className="relative z-10 min-h-screen flex items-center overflow-hidden">

      {/* 🔥 BACKGROUND COM BLUR */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/background.jpg"
          alt="Background WKCODE"
          fill
          priority
          className="object-cover scale-105 blur-[2px] opacity-60"
        />

    <div className="absolute inset-0 bg-[#050B18]/50" />
      </div>

      {/* efeitos */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-[#00BFFF] opacity-[0.06] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#0048E4] opacity-[0.05] blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT */}
          <div>
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00BFFF]/40 bg-[#00BFFF]/10 text-[#00BFFF] text-xs font-semibold tracking-widest uppercase mb-6">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              Agência Digital
            </div>

            <h1 className="hero-title text-4xl sm:text-5xl xl:text-[3.5rem] font-semibold leading-[1.1] tracking-tight text-white mb-6">
              {'Desenvolvimento de sites profissionais com prazo, clareza e resultado'
                .split(' ')
                .map((word, i) => (
                  <span key={i} className="inline-block mr-[0.25em]">
                    {word === 'profissionais' ? (
                      <span className="bg-gradient-to-r from-[#00BFFF] to-[#00ffea] bg-clip-text text-transparent">
                        {word}
                      </span>
                    ) : (
                      word
                    )}
                  </span>
                ))}
            </h1>

            <p className="hero-sub text-lg text-white/70 mb-8 max-w-md leading-relaxed">
              Do briefing à entrega em até{' '}
              <strong className="text-white">15 dias</strong>. Transformamos sua ideia em resultado.
            </p>

            {/* BOTÕES */}
            <div className="hero-actions flex flex-col sm:flex-row gap-3 mb-14">
              <a
                href={WA_LINK}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#00BFFF] to-[#0048E4] text-white font-semibold hover:scale-105 transition"
              >
                Começar agora
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#projetos"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-white/25 text-white rounded-full hover:border-[#00BFFF] hover:text-[#00BFFF] transition"
              >
                Ver projetos
              </a>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              {STATS.map((s) => (
                <div key={s.label} className="hero-stat">
                  <p className="text-2xl font-semibold text-white">{s.value}</p>
                  <p className="text-xs text-white/50 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-img-wrap relative">
            <div className="absolute -inset-6 bg-[#00BFFF]/8 rounded-3xl blur-3xl" />

            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
              <Image
                src="/images/hero.jpg"
                alt="WKCODE"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00274A]/80 via-black/20 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5">
                <div className="rounded-xl p-4 flex items-center gap-3 bg-[rgba(0,28,70,0.9)] border border-white/10 backdrop-blur">
                  <div className="w-2 h-2 rounded-full bg-[#00BFFF] animate-pulse" />
                  <div>
                    <p className="text-white text-sm font-medium">Entrega garantida</p>
                    <p className="text-[#00BFFF] text-xs">Prazo definido desde o início</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}