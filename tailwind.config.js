/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          magenta: '#D000C8',
          pink: '#F0007A',
          orange: '#F58A1F',
          sky: '#28B9F4',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          soft: '#F8F9FC',
        },
        ink: {
          DEFAULT: '#333333',
          soft: '#5B5F6B',
          faint: '#8A8F9A',
        },
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(120deg, #D000C8 0%, #F0007A 45%, #F58A1F 100%)',
        'brand-gradient-soft': 'linear-gradient(120deg, rgba(208,0,200,0.10) 0%, rgba(240,0,122,0.08) 45%, rgba(245,138,31,0.10) 100%)',
        'brand-ring': 'conic-gradient(from 180deg, #D000C8, #F0007A, #F58A1F, #28B9F4, #D000C8)',
      },
      boxShadow: {
        soft: '0 20px 45px -20px rgba(208, 0, 200, 0.18)',
        card: '0 10px 30px -12px rgba(51, 51, 51, 0.12)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
}
