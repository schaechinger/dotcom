'use client';

import { useTheme } from 'next-themes';

import Contrast from '@components/icons/Contrast';

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme('dark' === resolvedTheme ? 'light' : 'dark')}
      className="group text-left text-dark-950 dark:text-dark-50 transition-colors hover:text-primary-500 hover:dark:text-primary-500"
    >
      <Contrast className="text-xl -mt-1 rotate-12 mr-2" />
      <span className="opacity-0 transition-opacity group-hover:opacity-100">Theme ändern</span>
    </button>
  );
};

export default ThemeToggle;
