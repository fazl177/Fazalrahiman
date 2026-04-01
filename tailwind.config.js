/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        charcoal: '#050505',
        'charcoal-2': '#121212',
        accent: '#4f6dff'
      },
      fontFamily: {
        sans: ['Inter', 'Space Grotesk', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
