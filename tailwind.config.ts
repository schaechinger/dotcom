import type { Config } from 'tailwindcss';
// import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#00a5db',
          light: '#006ea0',
        },
        discreet: {
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
          red: '#f96b72',
          green: '#02af79',
        },
        contrast: {
          50: '#fff', // light background
          100: '#f2f3f5',
          200: '#e5e5e5', // light header blur border
          300: '#ccc',
          500: '#818181',
          700: '#4d4d4d',
          800: '#262626', // dark header blur border
          900: '#161616', // dark background
          950: '#111', // text color
        },
        coffee: {
          light: '#6f4e37',
          dark: '#896044',
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
        sans: ['var(--font-clear-sans)'],
      },
    },
  },
  plugins: [],
};

export default config;
