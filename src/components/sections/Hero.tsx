'use client'
import { useEffect, useRef, useState } from 'react'
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
  const logoWrapRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap')
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from('.hero-badge', { y: 16, opacity: 0, duration: 0.5, delay: 0.2 })
        .from('.hero-title span', { y: 48, opacity: 0, duration: 0.7, stagger: 0.04 }, '-=0.25')
        .from('.hero-sub', { y: 24, opacity: 0, duration: 0.6 }, '-=0.4')
        .from('.hero-actions', { y: 20, opacity: 0, duration: 0.5 }, '-=0.4')
        .from('.hero-stat', { y: 16, opacity: 0, duration: 0.4, stagger: 0.1 }, '-=0.3')
        .from('.hero-img-wrap', { x: 60, opacity: 0, scale: 0.85, duration: 1.1 }, '-=0.9')

      gsap.to('.hero-logo-float', {
        y: -18,
        duration: 3,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      })
    }
    init()
  }, [])

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = logoWrapRef.current
    const inner = logoRef.current
    if (!el || !inner) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const rotX = ((y - cy) / cy) * -12
    const rotY = ((x - cx) / cx) * 12
    inner.style.transform = `perspective(1100px) rotateX(${rotX}deg) rotateY(${rotY}deg)`
  }

  const handleMouseLeave = () => {
    if (logoRef.current) {
      logoRef.current.style.transform = 'perspective(1100px) rotateX(0deg) rotateY(0deg)'
    }
  }

  const parallaxY = scrollY * 0.25
  const parallaxRotate = scrollY * 0.04
  const parallaxScale = Math.max(0.85, 1 - scrollY * 0.0006)

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

          {/* RIGHT — Logo 3D com parallax */}
          <div
            ref={logoWrapRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="hero-img-wrap relative flex items-center justify-center min-h-[480px] lg:min-h-[560px]"
            style={{ perspective: '1100px' }}
          >
            {/* Glow rings */}
            <div
              className="absolute inset-0 rounded-full bg-[#00BFFF]/15 blur-3xl"
              style={{
                transform: `translateY(${parallaxY * 0.5}px) scale(${1 + scrollY * 0.0008})`,
              }}
            />
            <div
              className="absolute inset-10 rounded-full bg-[#0048E4]/20 blur-2xl"
              style={{ transform: `translateY(${parallaxY * 0.3}px)` }}
            />

            {/* Anel orbital */}
            <div
              className="absolute w-[420px] h-[420px] lg:w-[520px] lg:h-[520px] rounded-full border border-[#00BFFF]/20 pointer-events-none"
              style={{
                transform: `rotate(${parallaxRotate * 2}deg) scale(${parallaxScale})`,
              }}
            />
            <div
              className="absolute w-[340px] h-[340px] lg:w-[440px] lg:h-[440px] rounded-full border border-dashed border-[#00BFFF]/15 pointer-events-none"
              style={{
                transform: `rotate(${-parallaxRotate * 3}deg)`,
              }}
            />

            {/* Logo principal com parallax + tilt + float */}
            <div
              className="hero-logo-float relative z-10"
              style={{
                transform: `translateY(${-parallaxY}px) scale(${parallaxScale})`,
                willChange: 'transform',
              }}
            >
              <div
                ref={logoRef}
                className="relative transition-transform duration-200 ease-out"
                style={{
                  transformStyle: 'preserve-3d',
                  filter: 'drop-shadow(0 30px 60px rgba(0, 191, 255, 0.35)) drop-shadow(0 0 30px rgba(0, 191, 255, 0.25))',
                }}
              >
                <Image
                  src="/images/logo.png"
                  alt="WKCODE"
                  width={560}
                  height={560}
                  priority
                  className="w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] object-contain select-none pointer-events-none"
                  draggable={false}
                />
                {/* Brilho percorrendo */}
                <div
                  className="absolute inset-0 rounded-full opacity-60 mix-blend-overlay pointer-events-none"
                  style={{
                    background:
                      'conic-gradient(from 0deg, transparent 0deg, rgba(0,191,255,0.4) 60deg, transparent 120deg, transparent 360deg)',
                    transform: `rotate(${scrollY * 0.5}deg)`,
                  }}
                />
              </div>
            </div>

            {/* Badge "Entrega garantida" */}
            <div
              className="absolute bottom-4 left-4 right-4 sm:left-8 sm:right-8 z-20"
              style={{ transform: `translateY(${parallaxY * 0.6}px)` }}
            >
              <div className="rounded-xl p-4 flex items-center gap-3 bg-[rgba(0,28,70,0.9)] border border-white/10 backdrop-blur shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
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
    </section>
  )
}