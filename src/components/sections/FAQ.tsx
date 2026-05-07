'use client'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const FAQS = [
  {
    q: 'Quanto tempo leva para o site ficar pronto?',
    a: 'O prazo varia conforme a complexidade do projeto, mas normalmente um site institucional leva entre 7 a 15 dias após a aprovação do escopo e o primeiro pagamento.',
  },
  {
    q: 'O domínio e a hospedagem estão inclusos?',
    a: 'Não. A contratação de domínio e hospedagem é de responsabilidade do cliente. A WKCODE orienta e auxilia na escolha das melhores opções para o seu projeto.',
  },
  {
    q: 'E depois que o site estiver pronto, tem suporte?',
    a: 'Sim. Oferecemos 2 semanas de suporte gratuito após a entrega para ajustes, dúvidas e orientações. Após esse período, serviços adicionais são cobrados separadamente.',
  },
  {
    q: 'Posso pedir alterações durante o desenvolvimento?',
    a: 'Pequenos ajustes dentro do escopo aprovado são absorvidos. Alterações significativas que mudam o escopo original são tratadas como novo serviço e cobradas separadamente.',
  },
  {
    q: 'O site é seguro?',
    a: 'Sim. Todos os sites são configurados com práticas básicas de segurança, incluindo HTTPS, boas práticas de código e atualizações essenciais para manter o site protegido.',
  },
  {
    q: 'Posso usar o site em qualquer lugar após a entrega?',
    a: 'Sim. Após o pagamento integral, você tem plenos direitos de uso sobre o site. A WKCODE pode exibir o projeto em seu portfólio como exemplo de trabalho.',
  },
  {
    q: 'Como funciona o pagamento?',
    a: '50% no início do projeto e 50% antes da entrega final. O site só é publicado e entregue após a quitação total do valor combinado.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`glass rounded-xl overflow-hidden transition-all duration-300 ${
        open ? 'border-[#00BFFF]/45 shadow-[0_2px_16px_rgba(0,191,255,0.1)]' : 'hover:border-white/22'
      }`}
    >
      <button
        className="w-full flex items-center justify-between gap-4 p-5 text-left group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-sm font-medium text-white/92 pr-4 group-hover:text-white transition-colors duration-200">
          {q}
        </span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${
            open
              ? 'bg-gradient-to-br from-[#00BFFF] to-[#0048E4] border-transparent text-white'
              : 'border-white/20 text-white/60 group-hover:border-[#00BFFF]/50 group-hover:text-[#00BFFF]'
          }`}
        >
          {open
            ? <Minus className="w-3.5 h-3.5" strokeWidth={2.5} />
            : <Plus className="w-3.5 h-3.5" strokeWidth={2.5} />
          }
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="px-5 pb-5 text-sm text-white/80 leading-relaxed border-t border-white/10 pt-4">
          {a}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const headingRef = useScrollReveal<HTMLDivElement>({ y: 30, duration: 0.7 })
  const listRef = useScrollReveal<HTMLDivElement>({
    y: 32,
    duration: 0.6,
    stagger: 0.09,
    childSelector: '.faq-item',
  })

  return (
    <section id="faq" className="py-24 lg:py-32 bg-section-a">
      <div className="max-w-3xl mx-auto px-6">
        <div ref={headingRef} className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#00BFFF] mb-4 block">
            Dúvidas frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold leading-tight text-white mb-4">
            Perguntas que você pode ter
          </h2>
          <p className="text-white/78 leading-relaxed">
            Tudo que você precisa saber antes de contratar. Mais dúvidas? É só chamar no WhatsApp.
          </p>
        </div>

        <div ref={listRef} className="space-y-3">
          {FAQS.map((faq) => (
            <div key={faq.q} className="faq-item">
              <FAQItem q={faq.q} a={faq.a} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
