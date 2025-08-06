/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "!./src/pages/admin/**/*"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans JP', 'sans-serif'],
        serif: ['Noto Serif JP', 'serif'],
      },
      colors: {
        primary: '#8B5A2B',
        secondary: '#D4B483',
        accent: '#A52A2A',
        light: '#F5F5F0',
        dark: '#2A2A2A',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px',
        },
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        ryokan: {
          primary: '#8B5A2B',
          'primary-content': '#FFFFFF',
          secondary: '#D4B483',
          'secondary-content': '#2A2A2A',
          accent: '#A52A2A',
          'accent-content': '#FFFFFF',
          neutral: '#2A2A2A',
          'neutral-content': '#F5F5F0',
          'base-100': '#FFFFFF',
          'base-200': '#F5F5F0',
          'base-300': '#E6E6E6',
          'base-content': '#2A2A2A',
        },
      },
    ],
    darkTheme: false,
    base: true,
    styled: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
  },
}
