/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bite-club-green': {
          DEFAULT: '#22c55e',
          dark: '#16a34a',
          darker: '#15803d',
          light: '#4ade80',
          pale: '#bbf7d0'
        },
        'accent-orange': {
          light: '#fb923c',
          DEFAULT: '#f97316',
          dark: '#ea580c'
        },
        'accent-red': '#ef4444'
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif']
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite'
      },
      keyframes: {
        'fade-in-up': {
          from: {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'pulse-slow': {
          '0%, 100%': {
            opacity: '0.4'
          },
          '50%': {
            opacity: '0.8'
          }
        }
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)'
      }
    },
  },
  plugins: [],
}