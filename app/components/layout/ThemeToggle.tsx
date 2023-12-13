'use client';

import { useTheme } from 'next-themes';

import Moon from '@components/icons/Moon';
import Sun from '@components/icons/Sun';

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const ThemeIcon = 'dark' === resolvedTheme ? Moon : Sun;

  return (
    <button
      onClick={() => setTheme('dark' === resolvedTheme ? 'light' : 'dark')}
      className="group text-left text-dark-950 dark:text-dark-50 transition-colors hover:text-primary-500 hover:dark:text-primary-500"
    >
      <ThemeIcon className="text-xl -mt-1 mr-2" />
      <span className="sr-only">Theme ändern</span>
    </button>
  );
};

export default ThemeToggle;
