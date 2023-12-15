import type { Config } from 'tailwindcss';

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
          900: '#57bc90',
        },
        medalmonday: {
          100: '#2d5e4d1b',
          200: '#2d5e4d4c',
          300: '#2d5e4d66',
          400: '#2d5e4d99',
          500: '#2d5e4d',
        },
        flyby: {
          500: '#d9fc1a',
          900: '#001427',
        },
        dark: {
          50: '#fff',
          200: '#ccc',
          700: '#22292e',
          800: '#0f2127',
          900: '#181818',
          950: '#111',
        },
        js: '#ffe70b',
        node: '#026e00',
        react: '#149eca',
        vue: '#42d392',
        snes: {
          a: '#e60012',
          b: '#ffe100',
          x: '#00a7eb',
          y: '#6eb92b',
        },
        social: {
          github: '#24292e',
          instagram: '#fb3958',
          linkedin: '#0077b5',
          xing: '#0698a0',
        }
      },
      fontFamily: {
        sans: ['var(--font-clear-sans)'],
      },
    },
  },
  plugins: [],
};

export default config;
