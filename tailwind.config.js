/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            // primary: '#48a586',
            // secondary: '#377e6e',
            // tertiary: '#4fb9ac',
            // quaternary: '#50c2ab',
            // quinary: '#7561ad',
            // senary: '#555555',
            // septenary: '#666666',
            // octonary: '#777777',
            // nonary: '#888888',
            // denary: '#999999',

         // 主题色
        primary: '#48a586',
        // 主题色-1
        'primary-first': 'var(--primary-first-color)',
        // 主题色-2
        'primary-secondary': 'var(--primary-secondary-color)',
        // 一级文字 主文本色
        first: 'var(--text-color)',
        // 二级文字
        secondary: 'var(--text-secondary-color)',
        third: 'var(--text-third-color)',
        fourth: 'var(--text-fourth-color)',
        fifth: 'var(--text-fifth-color)',

        // error
        success: 'var(--nr-success)',
        error: 'var(--nr-error)',
        warning: 'var(--nr-warning)',

        disabled: 'var(--disabled-color)',
        'border-base': 'var(--border-color-base)',

        // 背景色
        'bg-base': 'var(--body-background)',
        'disabled-bg': 'var(--disabled-bg)',
        'rank-up': 'rgb(--rank-up-rgb)',
        'rank-down': 'rgb(--rank-down-rgb)',
        'bg-secondary': 'var(--background-secondary)',
        'bg-base-two': 'var(--border-color-base-two)',
        },
        textShadow: {
            'sm': '1px 1px 2px rgba(0, 0, 0, 0.5)',
            'DEFAULT': '2px 2px 4px rgba(0, 0, 0, 0.5)',
            'lg': '4px 4px 8px rgba(0, 0, 0, 0.5)',
        },
        backgroundImage: {
            'body-main': "url('@/assets/images/bg-body-m.png')",
            'body': "url('@/assets/images/bg-body.png')",
            'body-primary': "url('@/assets/images/bg-primary-secondary.png')",
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