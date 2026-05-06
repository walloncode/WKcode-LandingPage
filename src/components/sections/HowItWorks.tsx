'use client'
import { ClipboardList, CheckCircle2, Code2, Sparkles, Clock } from 'lucide-react'

const STEPS = [
  {
    num: '01',
    Icon: ClipboardList,
    title: 'Definição do projeto',
    description:
      'Entendemos exatamente o que você precisa e transformamos sua ideia em um plano claro, sem achismo.',
  },
  {
    num: '02',
    Icon: CheckCircle2,
    title: 'Aprovação do escopo',
    description:
      'Você valida tudo antes de começarmos. Sem surpresas, sem mudanças no meio do caminho.',
  },
  {
    num: '03',
    Icon: Code2,
    title: 'Desenvolvimento',
    description:
      'Construímos seu projeto com atualizações constantes, pra você acompanhar tudo em tempo real.',
  },
  {
    num: '04',
    Icon: Sparkles,
    title: 'Entrega final',
    description:
      'Seu site no ar, otimizado e pronto pra converter — com suporte incluso após entrega.',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 lg:py-32 bg-[#050B18]">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#00BFFF] mb-4 block">
            Como funciona
          </span>

          <h2 className="text-3xl sm:text-4xl font-semibold leading-tight text-white mb-4">
            Do primeiro contato à entrega em{' '}
            <span className="bg-gradient-to-r from-[#00BFFF] to-[#00ffea] bg-clip-text text-transparent">
              4 etapas
            </span>
          </h2>

          <p className="text-white/80 leading-relaxed">
            Um processo simples, direto e pensado pra você não ter dor de cabeça.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className="group relative p-6 rounded-2xl border border-white/10 bg-[rgba(10,15,28,0.6)] backdrop-blur-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-[#00BFFF]/50 hover:shadow-[0_10px_40px_rgba(0,191,255,0.15)] animate-fadeUp"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              
              {/* glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top,rgba(0,191,255,0.15),transparent_70%)]" />

              {/* número gigante (background) */}
              <span className="absolute right-4 top-4 text-5xl font-bold text-white/5">
                {step.num}
              </span>

              {/* icon */}
              <div className="mb-5">
                <div className="w-14 h-14 rounded-full bg-[#001c46] border border-white/15 flex items-center justify-center group-hover:border-[#00BFFF] transition">
                  <step.Icon className="w-6 h-6 text-[#00BFFF] group-hover:scale-110 transition" />
                </div>
              </div>

              {/* content */}
              <h3 className="text-base font-semibold text-white mb-3">
                {step.title}
              </h3>

              <p className="text-sm text-white/80 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}

        </div>

        {/* PRAZO */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-[rgba(10,15,28,0.6)] backdrop-blur-xl">
            <Clock className="w-4 h-4 text-[#00BFFF]" />
            <span className="text-sm text-white">
              Seu site pronto em até <span className="text-[#00BFFF] font-semibold">15 dias</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}