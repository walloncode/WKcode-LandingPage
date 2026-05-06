'use client'
import { Clock, ShieldCheck, TrendingUp, Smartphone, Search, Headphones } from 'lucide-react'

const BENEFITS = [
  {
    Icon: Clock,
    title: 'Prazo garantido',
    description:
      'Entrega em até 15 dias com escopo definido. Sem atrasos.',
  },
  {
    Icon: ShieldCheck,
    title: 'Transparência total',
    description:
      'Tudo documentado e aprovado antes do desenvolvimento.',
  },
  {
    Icon: TrendingUp,
    title: 'Foco em resultado',
    description:
      'Mais clientes, mais credibilidade e mais conversões.',
  },
  {
    Icon: Smartphone,
    title: 'Mobile first',
    description:
      '100% responsivo e otimizado para celular.',
  },
  {
    Icon: Search,
    title: 'SEO otimizado',
    description:
      'Código preparado para aparecer no Google desde o início.',
  },
  {
    Icon: Headphones,
    title: 'Suporte incluído',
    description:
      '2 semanas de suporte após a entrega.',
  },
]

export default function Benefits() {
  return (
    <section className="py-24 lg:py-32 bg-[#050B18]">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#00BFFF] mb-4 block">
            Por que a WKCODE
          </span>

          <h2 className="text-3xl sm:text-4xl font-semibold leading-tight text-white mb-4">
            O que você ganha
          </h2>

          <p className="text-white/80 leading-relaxed">
            Muito mais que código — entregamos resultado.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="flex gap-4 p-6 rounded-2xl bg-[#0A0F1C] border border-white/10 hover:-translate-y-1 hover:border-[#00BFFF]/50 hover:shadow-[0_8px_30px_rgba(0,191,255,0.12)] transition-all duration-300 group"
            >

              {/* ICON */}
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-[#00BFFF]/20 to-[#0048E4]/10 border border-[#00BFFF]/20 flex items-center justify-center text-[#00BFFF] group-hover:scale-110 transition">
                <b.Icon className="w-5 h-5" strokeWidth={1.6} />
              </div>

              {/* TEXT */}
              <div>
                <h3 className="text-sm font-semibold text-white mb-1.5">
                  {b.title}
                </h3>

                <p className="text-sm text-white/80 leading-relaxed">
                  {b.description}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}