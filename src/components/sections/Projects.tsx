'use client'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'

const REAL_PROJECTS = [
  {
    name: 'Kiuseven',
    url: 'https://kiuseven.com.br',
    domain: 'kiuseven.com.br',
    category: 'Site Institucional',
    description:
      'Site profissional desenvolvido com foco em presença digital e geração de autoridade.',
    image: '/images/kiusevenproject.png',
    accent: '#00BFFF',
  },
  {
    name: 'Full Stack do Zero',
    url: 'https://fullstackdozero.com',
    domain: 'fullstackdozero.com.br',
    category: 'Plataforma Educacional',
    description:
      'Plataforma completa para formação de desenvolvedores full stack.',
    image: '/images/fullstackproject.png',
    accent: '#2F0484',
  },
  {
    name: 'WallonCode',
    url: 'https://walloncode.com.br',
    domain: 'walloncode.com.br',
    category: 'Portfólio Dev',
    description:
      'Portfólio profissional com projetos e apresentação estratégica.',
    image: '/images/walloncodeproject.png',
    accent: '#00FFEA',
  },
]

export default function Projects() {
  return (
    <section
      id="projetos"
      className="relative py-24 lg:py-32 bg-[#050B18] bg-[url('/images/image%201.png')] bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-[#050B18]/80" />
      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#00BFFF] mb-4 block">
            Projetos
          </span>

          <h2 className="text-3xl sm:text-4xl font-semibold leading-tight text-white mb-4">
            Sites reais entregues
          </h2>

          <p className="text-white/80 leading-relaxed">
            Projetos publicados que você pode acessar agora mesmo.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {REAL_PROJECTS.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl overflow-hidden border border-white/10 bg-[#0A0F1C] hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)] transition-all duration-500"
            >

              {/* IMAGE */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col">

                {/* category */}
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 w-fit"
                  style={{
                    background: `${p.accent}22`,
                    color: p.accent,
                    border: `1px solid ${p.accent}44`,
                  }}
                >
                  {p.category}
                </span>

                {/* title */}
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[--accent] transition-colors"
                  style={{ '--accent': p.accent } as React.CSSProperties}>
                  {p.name}
                </h3>

                {/* desc */}
                <p className="text-sm text-white/80 mb-5">
                  {p.description}
                </p>

                {/* footer */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs text-white/40 font-mono">
                    {p.domain}
                  </span>

                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition"
                    style={{
                      background: `linear-gradient(135deg, ${p.accent}, #0048E4)`,
                    }}
                  >
                    <ExternalLink className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </div>
                </div>

              </div>
            </a>
          ))}

        </div>

        {/* BANNER FINAL */}
        <div className="mt-16 rounded-2xl p-10 bg-[#0A0F1C] border border-white/10 text-center">
          <h3 className="text-white text-2xl font-semibold mb-3">
            Cada projeto é único
          </h3>
          <p className="text-white/70 mb-6">
            Desenvolvemos soluções sob medida com foco em resultado.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {['+50 projetos', '100% sob medida', 'Sites publicados'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-white/90 text-xs border border-white/15"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}