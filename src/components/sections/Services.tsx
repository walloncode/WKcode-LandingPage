'use client'
import { useRef, useCallback } from 'react'
import { Building2, Zap, ShoppingCart, LayoutGrid, Settings2 } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const SERVICES = [
  {
    Icon: Building2,
    title: 'Site Institucional',
    description:
      'Presença digital completa para sua empresa. Transmite autoridade, credibilidade e converte visitantes em clientes com design profissional.',
  },
  {
    Icon: Zap,
    title: 'Landing Page',
    description:
      'Página focada em conversão para campanhas, lançamentos ou captação de leads. Rápida, direta e otimizada para resultado.',
  },
  {
    Icon: ShoppingCart,
    title: 'E-commerce',
    description:
      'Loja virtual completa com catálogo, carrinho, checkout e integração de pagamentos para você vender online desde o primeiro dia.',
  },
  {
    Icon: LayoutGrid,
    title: 'Portfólio',
    description:
      'Exiba seu trabalho com elegância e conquiste novos clientes. Ideal para fotógrafos, designers, arquitetos e criativos.',
  },
  {
    Icon: Settings2,
    title: 'Sistema Web',
    description:
      'Soluções web personalizadas: agendamentos, formulários avançados, painéis administrativos e integrações sob medida.',
  },
]

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const rotX = ((y - cy) / cy) * -6
    const rotY = ((x - cx) / cx) * 6
    el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`
  }, [])

  const handleLeave = useCallback(() => {
    if (cardRef.current) {
      cardRef.current.style.transform = ''
    }
  }, [])

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      style={{ transition: 'transform 0.15s ease, box-shadow 0.3s ease' }}
    >
      {children}
    </div>
  )
}

export default function Services() {
  const headingRef = useScrollReveal<HTMLDivElement>({ y: 30, duration: 0.7 })
  const gridRef = useScrollReveal<HTMLDivElement>({
    y: 48,
    duration: 0.7,
    stagger: 0.12,
    childSelector: '.service-card',
  })

  return (
    <section id="servicos" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headingRef} className="max-w-2xl mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#00BFFF] mb-4 block">
            Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold leading-tight text-white mb-4">
            Soluções digitais para cada etapa do seu negócio
          </h2>
          <p className="text-white/75 leading-relaxed">
            Do briefing à entrega, desenvolvemos com foco em resultado, performance e identidade visual alinhada à sua marca.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <div key={s.title} className="service-card">
              <TiltCard className="relative h-full p-6 rounded-2xl glass hover:border-[#00BFFF]/50 hover:shadow-[0_8px_32px_rgba(0,191,255,0.15)] cursor-default group overflow-hidden">
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00BFFF]/8 to-[#0048E4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Number bg */}
                <span className="absolute top-4 right-5 text-7xl font-bold text-white/[0.04] leading-none select-none pointer-events-none">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="relative">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00BFFF]/20 to-[#0048E4]/15 border border-[#00BFFF]/25 flex items-center justify-center text-[#00BFFF] mb-5 group-hover:scale-110 group-hover:shadow-[0_0_16px_rgba(0,191,255,0.3)] transition-all duration-300">
                    <s.Icon className="w-5 h-5" strokeWidth={1.6} />
                  </div>

                  <h3 className="text-base font-semibold text-white mb-2.5">{s.title}</h3>
                  <p className="text-sm text-white/78 leading-relaxed">{s.description}</p>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
