/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            primary: '#48a586',
            secondary: '#377e6e',
            tertiary: '#4fb9ac',
            quaternary: '#50c2ab',
            quinary: '#7561ad',
            senary: '#555555',
            septenary: '#666666',
            octonary: '#777777',
            nonary: '#888888',
            denary: '#999999',
        },
        textShadow: {
            'sm': '1px 1px 2px rgba(0, 0, 0, 0.5)',
            'DEFAULT': '2px 2px 4px rgba(0, 0, 0, 0.5)',
            'lg': '4px 4px 8px rgba(0, 0, 0, 0.5)',
        }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
          textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}