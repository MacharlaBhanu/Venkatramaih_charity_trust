/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        page: '#F7FBFF',
        section: '#EEF8FF',
        card: '#FFFFFF',
        softblue: '#DDF2FF',
        sky: '#5BBFEF',
        ocean: '#1689C7',
        heading: '#123A5A',
        mint: '#9DE6D0',
        seafoam: '#DFF8EF',
        softgreen: '#6BCDB6',
        body: '#4F6475',
        muted: '#7A8C9A',
        line: '#D8EDF7',
      },
      fontFamily: {
        serif: ["'Libre Baskerville'", 'Georgia', 'serif'],
        display: ["'Libre Baskerville'", 'Georgia', 'serif'],
        title: ["'Libre Baskerville'", 'Georgia', 'serif'],
        sans: ["'Source Sans 3'", 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(18, 58, 90, 0.12)',
        card: '0 8px 30px -10px rgba(18, 58, 90, 0.10)',
        glass: '0 20px 60px -20px rgba(18, 58, 90, 0.18)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out both',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
