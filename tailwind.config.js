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
        primary: {
          50: '#f8f5fc',
          100: '#f1ebfA',
          200: '#e5d8f5',
          300: '#d1baec',
          400: '#b793e0',
          500: '#9c6bd0',
          600: '#7b3fa0', // Main brand color
          700: '#6a3488',
          800: '#5a2c72',
          900: '#4a2560',
          950: '#2f1440',
          DEFAULT: '#7b3fa0',
        },
        secondary: {
          50: '#fdfcff',
          100: '#f5f0fa', // Main secondary color
          200: '#ece3f4',
          300: '#e0d1eb',
          400: '#d0b8df',
          500: '#bc9acf',
          600: '#a47bb8',
          700: '#8a5ea2',
          800: '#734f86',
          900: '#5e426e',
          DEFAULT: '#f5f0fa',
        },
        accent: {
          50: '#fefbf3',
          100: '#fef7e6',
          200: '#fbedcc',
          300: '#f7e0a8',
          400: '#f2cc7a',
          500: '#e8a020', // Main accent color
          600: '#d1901d',
          700: '#b0791a',
          800: '#8f611c',
          900: '#754f1a',
          DEFAULT: '#e8a020',
        },
        whatsapp: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#25d366', // WhatsApp green
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          DEFAULT: '#25d366',
        },
        // Legacy aliases for backward compatibility
        'primary-light': '#f5f0fa',
        success: '#25d366',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      screens: {
        'xs': '475px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-4px)' },
          '60%': { transform: 'translateY(-2px)' },
        },
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.06)',
        'medium': '0 4px 16px rgba(0, 0, 0, 0.12)',
        'large': '0 8px 32px rgba(0, 0, 0, 0.18)',
      },
      borderRadius: {
        'DEFAULT': '8px',
      },
    },
  },
  plugins: [],
}