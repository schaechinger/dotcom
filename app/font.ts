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
