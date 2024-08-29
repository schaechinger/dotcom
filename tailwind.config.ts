import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
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
        dark: {
          50: '#fff',
          200: '#ccc',
          600: '#444a4f',
          700: '#22292e',
          800: '#0f2127',
          900: '#1c2129',
          950: '#111',
        },
        medalmonday: {
          primary: '#2e5d4e',
          light: '#698e80',
          dark: '#1e332b',
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
        sans: ['var(--font-clear-sans)', ...defaultTheme.fontFamily.sans],
        // mono: ['var(--font-best-choice)', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};

export default config;
