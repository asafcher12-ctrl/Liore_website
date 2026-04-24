/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary:  '#f78da7',
        dark:     '#cf2e2e',
        light:    '#fff0f4',
        pink2:    '#fce4ec',
        textdark: '#2d1a1a',
        textmid:  '#7a3a3a',
      },
      fontFamily: {
        body:    ['Heebo', 'sans-serif'],
        display: ['Frank Ruhl Libre', 'serif'],
      },
    },
  },
  plugins: [],
}
