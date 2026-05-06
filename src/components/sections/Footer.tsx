import Image from 'next/image'
import { Mail, Phone, ArrowRight } from 'lucide-react'

const WA_LINK =
  'https://wa.me/556884240245?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20WKCODE.'

const INSTA_LINK = 'https://www.wkcode.com.br/inicio'

const NAV_COLUMNS = [
  {
    title: 'Serviços',
    links: [
      { label: 'Site Institucional', href: '#servicos' },
      { label: 'Landing Page', href: '#servicos' },
      { label: 'E-commerce', href: '#servicos' },
      { label: 'Portfólio', href: '#servicos' },
      { label: 'Sistema Web', href: '#servicos' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre', href: '#sobre' },
      { label: 'Como funciona', href: '#como-funciona' },
      { label: 'Projetos', href: '#projetos' },
      { label: 'Investimento', href: '#investimento' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
]

const SOCIAL = [
  {
    label: 'WhatsApp',
    href: WA_LINK,
    external: true,
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: INSTA_LINK,
    external: true,
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'E-mail',
    href: 'mailto:wellysoncaetano@gmail.com',
    external: false,
    icon: <Mail className="w-4 h-4" strokeWidth={1.8} />,
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[rgba(0,10,26,0.60)] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="inline-block mb-5 -ml-4">
              <Image
                src="/images/logo.png"
                alt="WKCODE"
                width={400}
                height={400}
                className="h-40 md:h-48 w-40 md:w-48 object-contain"
              />
            </div>
            <p className="text-sm text-white/70 leading-relaxed max-w-xs mb-6">
              Transformamos ideias em soluções digitais com prazo, clareza e foco no resultado do cliente.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mb-6">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.external ? '_blank' : undefined}
                  rel={s.external ? 'noopener noreferrer' : undefined}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full glass flex items-center justify-center text-white/60 hover:text-[#00BFFF] hover:border-[#00BFFF]/45 hover:shadow-[0_0_10px_rgba(0,191,255,0.2)] transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 btn-gradient rounded-full text-sm transition-all duration-300"
            >
              Começar projeto
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Nav columns */}
          {NAV_COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold tracking-widest uppercase text-white mb-4">
                {col.title}
              </p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/58 hover:text-[#00BFFF] transition-colors duration-200 block relative group w-fit"
                    >
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#00BFFF] group-hover:w-full transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
          <p className="text-xs text-white/40">
            © {year} WKCODE. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/40">
            <a
              href="tel:+556884240245"
              className="flex items-center gap-1.5 hover:text-[#00BFFF] transition-colors duration-200"
            >
              <Phone className="w-3 h-3" strokeWidth={2} />
              +55 68 8424-0245
            </a>
            <span>·</span>
            <span className="flex items-center gap-1">
              Feito com
              <span className="text-[#00BFFF] font-mono font-semibold">&lt;/&gt;</span>
              pela WKCODE
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
