/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0a192f',
          50: '#e6ebf2',
          100: '#c2cddf',
          200: '#9aafcc',
          300: '#7291b9',
          400: '#5478aa',
          500: '#365f9b',
          600: '#294b7e',
          700: '#1d3861',
          800: '#0a192f',
          900: '#071222',
        },
        gold: {
          DEFAULT: '#c5a059',
          50: '#fdf8ef',
          100: '#f9edda',
          200: '#f3dbc0',
          300: '#edc49e',
          400: '#e5ad7d',
          500: '#c5a059',
          600: '#a67d3a',
          700: '#7d5c2b',
          800: '#543c1e',
          900: '#2c1e10',
        },
        offwhite: '#f8f8f8',
        textgray: '#94a3b8',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
