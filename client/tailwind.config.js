/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      width: {
        '30': '7.5rem', // 1rem is usually 16px, so 7.5rem will be approximately 120px
      },
      height: {
        '30': '7.5rem',
      }
    },
    container: {
      center: true
    }
  },
  plugins: [],
}