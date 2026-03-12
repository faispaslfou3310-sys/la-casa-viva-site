import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary palette
        black: '#000000',
        'near-black': '#0a0a0a',
        'dark-gray': '#111111',
        'medium-gray': '#1a1a1a',
        'light-gray': '#2a2a2a',
        
        // Text colors
        'off-white': '#f5f5f5',
        'cream': '#e8e4dc',
        'muted': '#888888',
        
        // Accent - Gold
        'gold': {
          DEFAULT: '#c9a962',
          light: '#d4b978',
          dark: '#a68b4b',
          muted: 'rgba(201, 169, 98, 0.3)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      fontSize: {
        'hero': ['clamp(3rem, 10vw, 8rem)', { lineHeight: '1', letterSpacing: '0.02em' }],
        'section': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '0.01em' }],
      },
      spacing: {
        'section': 'clamp(4rem, 10vw, 8rem)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(201, 169, 98, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(201, 169, 98, 0.4)' },
        },
      },
      backgroundImage: {
        'noise': "url('/noise.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config
