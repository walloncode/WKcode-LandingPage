import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        border: 'var(--border)',
        card: 'var(--card)',
        accent: {
          DEFAULT: '#00FFEA',
          10: 'rgba(0,255,234,0.10)',
          20: 'rgba(0,255,234,0.20)',
          30: 'rgba(0,255,234,0.30)',
          50: 'rgba(0,255,234,0.50)',
        },
        gray: {
          1: '#fafafa',
          2: '#f5f5f5',
          3: '#e5e5e5',
          4: '#d4d4d4',
          5: '#a3a3a3',
          6: '#737373',
          7: '#525252',
          8: '#404040',
          9: '#262626',
          10: '#171717',
          11: '#0a0a0a',
          12: '#000000',
        },
      },
      fontFamily: {
        sans: [
          'var(--font-poppins)',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
        ],
        display: [
          'var(--font-sora)',
          'var(--font-poppins)',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      boxShadow: {
        accent: '0 0 20px rgba(0,255,234,0.30)',
        'accent-lg': '0 0 40px rgba(0,255,234,0.40)',
        'accent-sm': '0 0 10px rgba(0,255,234,0.20)',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 8px rgba(0,255,234,0.3)' },
          '50%': { boxShadow: '0 0 24px rgba(0,255,234,0.6)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'scroll-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) forwards',
        'scroll-bounce': 'scroll-bounce 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
