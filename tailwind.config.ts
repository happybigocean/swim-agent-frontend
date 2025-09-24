import type { Config } from 'tailwindcss'
import tailwindcssAnimate from 'tailwindcss-animate'

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F8FAFC',
        primaryAccent: '#0A2540',
        brand: '#2563EB',
        background: {
          DEFAULT: '#084EA3',
          secondary: '#3366CC'
        },
        secondary: '#E2E8F0',
        border: '#CBD5E1',
        accent: '#1E3A8A',
        muted: '#64748B',
        destructive: '#DC2626',
        positive: '#16A34A'
      },
      fontFamily: {
        geist: 'var(--font-geist-sans)',
        dmmono: 'var(--font-dm-mono)'
      },
      borderRadius: {
        xl: '10px'
      }
    }
  },
  plugins: [tailwindcssAnimate]
} satisfies Config
