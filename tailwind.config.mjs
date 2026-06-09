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
