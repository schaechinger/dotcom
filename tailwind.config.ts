import type { Config } from 'tailwindcss';
// import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#00a5db',
        discreet: {
          primary: '#00a5db',
          shade: '#006ea0',
          light: '#e7fcff',
          egg: '#eee8a9'
        },
        warning: {
          200: '#ffc971',
          300: '#ffb627',
          500: '#ff9505',
          700: '#e2711d',
          800: '#cc5803',
        },
        squash: {
          primary: '#00a5db',
          red: '#f96b72',
          green: '#02af79',
        },
        secondary: '#0a558c',
        dark: {
          50: '#fff',
          200: '#ccc',
          600: '#444a4f',
          700: '#22292e',
          800: '#0f2127',
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
        sans: ['var(--font-clear-sans)'], // , ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

export default config;
