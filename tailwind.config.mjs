/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#004B7A',
          50: '#e6f4fb',
          100: '#c2e5f5',
          200: '#99d5ee',
          300: '#70c5e7',
          400: '#47b5e0',
          500: '#00AEEF',
          600: '#008ec4',
          700: '#006d94',
          800: '#004B7A',
          900: '#003352',
        },
        gold: {
          DEFAULT: '#00AEEF',
          50: '#e6f9ff',
          100: '#c2f2ff',
          200: '#99ebff',
          300: '#70e4ff',
          400: '#47ddff',
          500: '#00AEEF',
          600: '#00a0d9',
          700: '#007aa8',
          800: '#005577',
          900: '#002f46',
        },
        offwhite: '#f8f8f8',
        textgray: '#475569',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
