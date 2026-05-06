'use client'
import Image from 'next/image'
import { ArrowRight, Zap, FileText, CheckCircle2 } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const WA_LINK =
  'https://wa.me/556884240245?text=Ol%C3%A1!%20Quero%20come%C3%A7ar%20meu%20projeto%20com%20a%20WKCODE.'

const TRUST = [
  { Icon: Zap, text: 'Resposta rápida' },
  { Icon: FileText, text: 'Sem burocracia' },
  { Icon: CheckCircle2, text: 'Prazo garantido' },
]

export default function CTA() {
  const contentRef = useScrollReveal<HTMLDivElement>({ y: 44, duration: 0.8 })

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/cta-bg.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#00274A]/88 via-[#003a65]/78 to-[#00274A]/92" />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#00BFFF]/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#0048E4]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <div ref={contentRef}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00BFFF]/40 bg-[#00BFFF]/10 text-[#00BFFF] text-xs font-semibold tracking-widest uppercase mb-6">
            <Zap className="w-3.5 h-3.5" strokeWidth={2} />
            Próximo passo
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] text-white mb-6">
            Pronto para tirar seu projeto do papel?
          </h2>

          <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto leading-relaxed">
            Fale com a WKCODE e comece agora. Escopo definido, prazo garantido e resultado real para o seu negócio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 btn-gradient rounded-full text-lg transition-all duration-300"
            >
              {/* WhatsApp — brand SVG, não existe no Lucide */}
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Falar no WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/25 text-white font-semibold rounded-full text-base transition-all duration-300 hover:border-[#00BFFF] hover:text-[#00BFFF] group"
            >
              Ver serviços
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>

          {/* Trust signals — Lucide icons */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-10 border-t border-white/10">
            {TRUST.map(({ Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-white/75 text-sm">
                <Icon className="w-4 h-4 text-[#00BFFF]" strokeWidth={2} />
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
