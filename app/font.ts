import localFont from 'next/font/local';

export const clearSans = localFont({
  src: [
    {
      path: '../fonts/clear-sans-book.woff2',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../fonts/clear-sans-bold.woff2',
      style: 'normal',
      weight: '700',
    },
    {
      path: '../fonts/clear-sans-extrathin.woff2',
      style: 'normal',
      weight: '100',
    },
  ],
  display: 'swap',
  variable: '--font-clear-sans',
});

export const bestChoice = localFont({
  src: [
    {
      path: '../fonts/bestchoice-regular.woff2',
      style: 'normal',
      weight: '400',
    },
    {
      path: '../fonts/bestchoice-italic.woff2',
      style: 'italic',
      weight: '400',
    },
    {
      path: '../fonts/bestchoice-medium.woff2',
      style: 'normal',
      weight: '500',
    },
    {
      path: '../fonts/bestchoice-medium-italic.woff2',
      style: 'italic',
      weight: '500',
    },
    {
      path: '../fonts/bestchoice-bold.woff2',
      style: 'normal',
      weight: '700',
    },
    {
      path: '../fonts/bestchoice-bold-italic.woff2',
      style: 'italic',
      weight: '700',
    },
  ],
  display: 'swap',
  variable: '--font-best-choice',
});
