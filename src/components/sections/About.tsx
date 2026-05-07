'use client'
import Image from 'next/image'
import { Check } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const CHECKPOINTS = [
  'Escopo definido antes do início do desenvolvimento',
  'Comunicação clara e direta durante todo o projeto',
  'Entrega no prazo combinado, sem surpresas',
  'Suporte pós-entrega gratuito por 2 semanas',
]

export default function About() {
  const leftRef = useScrollReveal<HTMLDivElement>({ x: -44, duration: 0.9 })
  const rightRef = useScrollReveal<HTMLDivElement>({ x: 44, duration: 0.9, delay: 0.15 })

  return (
    <section id="sobre" className="py-24 lg:py-32 bg-section-a">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Image */}
          <div ref={leftRef} className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl group">
              <Image
                src="/images/about.jpg"
                alt="Equipe WKCODE"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00274A]/65 via-transparent to-transparent" />
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00BFFF] via-[#00BFFF]/40 to-transparent" />
            </div>

            {/* Floating metric */}
            <div className="absolute -bottom-5 -right-4 glass rounded-xl p-4 shadow-xl min-w-[160px] hidden sm:block">
              <p className="text-xs text-white/60">Entrega média</p>
              <p className="text-2xl font-semibold text-white mt-1">
                7–15 <span className="text-sm font-normal text-white/55">dias</span>
              </p>
              <div className="mt-2.5 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-[65%] bg-gradient-to-r from-[#00BFFF] to-[#0048E4] rounded-full" />
              </div>
            </div>

            {/* Accent corners */}
            <div className="absolute -top-2 -left-2 w-12 h-12 border-t-2 border-l-2 border-[#00BFFF]/50 rounded-tl-lg" />
            <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-2 border-r-2 border-[#00BFFF]/50 rounded-br-lg" />
          </div>

          {/* Content */}
          <div ref={rightRef}>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#00BFFF] mb-4 block">
              Sobre a WKCODE
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight text-white mb-5">
              Transformamos ideias em{' '}
              <span className="bg-gradient-to-r from-[#00BFFF] to-[#00ffea] bg-clip-text text-transparent">
                soluções digitais reais
              </span>
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              A WKCODE é uma agência focada em transformar ideias em soluções digitais reais, com
              organização, transparência e foco no resultado do cliente.
            </p>
            <p className="text-white/78 leading-relaxed mb-8">
              Atuamos desde o briefing até a entrega final, garantindo que cada etapa seja
              documentada e aprovada antes de avançar — sem ruídos, sem surpresas.
            </p>

            <ul className="space-y-3.5">
              {CHECKPOINTS.map((item) => (
                <li key={item} className="flex items-start gap-3 group">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#00BFFF]/15 border border-[#00BFFF]/45 flex items-center justify-center group-hover:bg-[#00BFFF]/25 transition-colors duration-200">
                    <Check className="w-3 h-3 text-[#00BFFF]" strokeWidth={3} />
                  </span>
                  <span className="text-sm text-white/80 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
