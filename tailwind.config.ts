import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#00a5db1b', // 0.1
          200: '#00a5db4c', // 0.3
          300: '#00a5db66', // 0.4
          400: '#00a5db99', // 0.6
          500: '#00a5db',
        },
        medalmonday: {
          100: '#2d5e4d1b',
          200: '#2d5e4d4c',
          300: '#2d5e4d66',
          400: '#2d5e4d99',
          500: '#2d5e4d',
        },
        dark: {
          50: '#fff',
          200: '#ccc',
          700: '#22292e',
          800: '#1f1f1f',
          900: '#181818',
          950: '#111',
        },
        js: {
          from: '#ffe70b',
          to: '#ffe70b66',
        },
        node: {
          from: '#026e00',
          to: '#026e0066',
        },
        react: {
          from: '#149eca',
          to: '#149eca66',
        },
        vue: {
          from: '#42d392',
          to: '#42d39266',
        },
        snes: {
          a: '#e60012',
          b: '#ffe100',
          x: '#00a7eb',
          y: '#6eb92b',
        },
      },
    },
    fontFamily: {
      sans: ['ClearSans'],
    },
  },
  plugins: [],
}
export default config
