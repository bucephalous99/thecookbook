/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-garamond)', 'Georgia', 'serif'],
        display: ['var(--font-futura)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Fluid typography utilities
        'fluid-xs': 'clamp(0.75rem, 0.6875rem + 0.1563vw, 0.875rem)',
        'fluid-sm': 'clamp(0.875rem, 0.8125rem + 0.1953vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.9375rem + 0.3125vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 1rem + 0.625vw, 1.5rem)',
        'fluid-xl': 'clamp(1.25rem, 1.0625rem + 0.9375vw, 1.875rem)',
        'fluid-2xl': 'clamp(1.5rem, 1.125rem + 1.875vw, 2.25rem)',
        'fluid-3xl': 'clamp(1.875rem, 1.3125rem + 2.8125vw, 3rem)',
        'fluid-4xl': 'clamp(2.25rem, 1.5rem + 3.75vw, 3.75rem)',
        'fluid-5xl': 'clamp(3rem, 2rem + 5vw, 4.5rem)',
      },
      colors: {
        chocolate: {
          DEFAULT: '#4B3F3A', // Chocolate Suave - Principal
          light: '#6B5B55',
          dark: '#3A302C',
        },
        arena: {
          DEFAULT: '#D7C9B1', // Arena - Fondo
          light: '#E5DDD0',
          dark: '#C4B49D',
        },
        beige: {
          DEFAULT: '#EDE6DE', // Beige Roseado - Fondo suave
          light: '#F5F0EA',
          dark: '#DDD2C7',
        },
        olive: {
          DEFAULT: '#7E8D68', // Verde Olivo - Acento
          light: '#9BAA86',
          dark: '#667254',
        },
        ivory: {
          DEFAULT: '#F9F7F4', // Marfil - Contenido
          light: '#FFFFFF',
          dark: '#EBE7E1',
        },
        // Keep old names for compatibility
        primary: {
          DEFAULT: '#7E8D68', // olive
          light: '#9BAA86',
          dark: '#667254',
        },
        accent: {
          DEFAULT: '#D7C9B1', // arena
          light: '#E5DDD0',
        },
        dark: {
          DEFAULT: '#4B3F3A', // chocolate
          secondary: '#3A302C',
        }
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}