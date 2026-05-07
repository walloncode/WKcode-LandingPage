'use client'
import { ArrowDown, Info, FileText, FileImage, Globe, CheckCircle2 } from 'lucide-react'

const RULES = [
  {
    Icon: FileText,
    title: 'Escopo aprovado',
    text: 'O desenvolvimento segue o escopo aprovado. Alterações são tratadas como novo serviço.',
  },
  {
    Icon: FileImage,
    title: 'Conteúdo do cliente',
    text: 'Textos e imagens são responsabilidade do cliente. A WKCODE orienta.',
  },
  {
    Icon: Globe,
    title: 'Hospedagem',
    text: 'Domínio e hospedagem são do cliente. Auxiliamos na escolha.',
  },
  {
    Icon: CheckCircle2,
    title: 'Direitos de uso',
    text: 'Após pagamento, o site é seu. Pode ser exibido no portfólio WKCODE.',
  },
]

export default function Investment() {
  return (
    <section id="investimento" className="py-24 lg:py-32 bg-section-b">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* LEFT */}
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#00BFFF] mb-4 block">
              Investimento
            </span>

            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
              Condições claras e{' '}
              <span className="bg-gradient-to-r from-[#00BFFF] to-[#00ffea] bg-clip-text text-transparent">
                sem surpresas
              </span>
            </h2>

            <p className="text-white/80 mb-10">
              Pagamento dividido em duas partes iguais.
            </p>

            <div className="space-y-4">

              {/* 1 */}
              <div className="p-6 rounded-2xl bg-[rgba(0,28,70,0.9)] border border-white/10 hover:border-[#00BFFF]/40 hover:-translate-y-1 transition">
                <div className="flex justify-between items-center">
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00BFFF] to-[#0048E4] flex items-center justify-center text-white font-bold">
                      1ª
                    </div>
                    <div>
                      <p className="text-white font-semibold">Entrada</p>
                      <p className="text-sm text-white/60">Início do projeto</p>
                    </div>
                  </div>

                  <span className="text-3xl font-bold text-[#00BFFF]">50%</span>
                </div>
              </div>

              {/* connector */}
              <div className="flex items-center gap-3 px-4">
                <div className="flex-1 h-px bg-white/10" />
                <ArrowDown className="w-4 h-4 text-[#00BFFF]" />
                <div className="flex-1 h-px bg-white/10" />
              </div>

              {/* 2 */}
              <div className="p-6 rounded-2xl bg-[rgba(0,28,70,0.9)] border border-white/10 hover:border-[#00BFFF]/40 hover:-translate-y-1 transition">
                <div className="flex justify-between items-center">
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-full border border-[#00BFFF] flex items-center justify-center text-[#00BFFF] font-bold">
                      2ª
                    </div>
                    <div>
                      <p className="text-white font-semibold">Conclusão</p>
                      <p className="text-sm text-white/60">Antes da entrega</p>
                    </div>
                  </div>

                  <span className="text-3xl font-bold text-white">50%</span>
                </div>
              </div>

            </div>

            {/* INFO */}
            <div className="mt-6 p-4 rounded-xl bg-[#00BFFF]/10 border border-[#00BFFF]/25 flex gap-3">
              <Info className="text-[#00BFFF] w-5 h-5 mt-1" />
              <p className="text-sm text-white/80">
                2 semanas de suporte gratuito após a entrega.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-4 lg:pt-20">
            {RULES.map((r) => (
              <div
                key={r.title}
                className="flex gap-4 p-5 rounded-xl bg-[rgba(0,28,70,0.9)] border border-white/10 hover:border-[#00BFFF]/40 hover:-translate-y-1 transition group"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#00BFFF]/10 text-[#00BFFF] group-hover:scale-110 transition">
                  <r.Icon className="w-5 h-5" />
                </div>

                <div>
                  <p className="text-white font-semibold text-sm">{r.title}</p>
                  <p className="text-sm text-white/75">{r.text}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}