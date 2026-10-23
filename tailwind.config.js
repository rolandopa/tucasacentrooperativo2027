/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#F0F5FA',
          100: '#E8F1F8',
          200: '#DCE8F3',
          300: '#C5D9EA',
          400: '#94A3B8',
          500: '#64748B',
          700: '#1E3A5F',
          800: '#0C4A6E',
          900: '#082F49',
        },
        accent: {
          cyan: '#00C2E8',
          emerald: '#059669',
          orange: '#EA580C',
          violet: '#7C3AED',
          sky: '#0284C7',
          rose: '#E11D48',
        },
      },
      animation: {
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'float-in': 'floatIn 0.6s ease-out forwards',
        'toast-in': 'toastIn 0.4s cubic-bezier(0.16,1,0.3,1) forwards',
        'toast-out': 'toastOut 0.3s ease-in forwards',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        pulseDot: {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.3)' },
        },
        floatIn: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        toastIn: {
          from: { opacity: '0', transform: 'translateX(120%)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        toastOut: {
          from: { opacity: '1', transform: 'translateX(0)' },
          to: { opacity: '0', transform: 'translateX(120%)' },
        },
        glowPulse: {
          '0%,100%': { opacity: '0.15' },
          '50%': { opacity: '0.35' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
};
