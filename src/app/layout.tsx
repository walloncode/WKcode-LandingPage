import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://wkcode.com.br'),
  title: {
    default: 'WKCODE — Desenvolvimento de Sites Profissionais',
    template: '%s | WKCODE',
  },
  description:
    'A WKCODE é uma agência especializada em desenvolvimento de sites, landing pages e soluções web com prazo, clareza e resultado. Do briefing à entrega em até 15 dias.',
  keywords: [
    'desenvolvimento de sites',
    'agência web',
    'landing page',
    'web design',
    'criação de sites',
    'WKCODE',
    'sites profissionais',
    'e-commerce',
    'portfólio digital',
  ],
  authors: [{ name: 'WKCODE' }],
  creator: 'WKCODE',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://wkcode.com.br',
    title: 'WKCODE — Desenvolvimento de Sites Profissionais',
    description:
      'Transformamos ideias em soluções digitais com prazo, clareza e resultado.',
    siteName: 'WKCODE',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'WKCODE — Agência Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WKCODE — Desenvolvimento de Sites Profissionais',
    description:
      'Transformamos ideias em soluções digitais com prazo, clareza e resultado.',
    images: ['/images/hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body suppressHydrationWarning>
        {/* Prevent dark mode flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{const t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}`,
          }}
        />
        {children}
      </body>
    </html>
  )
}
