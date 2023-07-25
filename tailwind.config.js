/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-heropatterns')({
      variants: [],
      patterns: [],
      colors: {
        default: '#9C92AC',
      },
      opacity: {
        default: 0.4,
      },
    }),
  ],
}
