'use client';

import { useTheme } from 'next-themes';

import Moon from '@components/icons/Moon';
import Sun from '@components/icons/Sun';

type Props = {
  translations: Record<string, string>;
};

const ThemeToggle = ({ translations }: Props) => {
  const { setTheme, resolvedTheme, systemTheme } = useTheme();

  const toggleTheme = () => {
    const nextTheme = 'light' === resolvedTheme ? 'dark' : 'light';
    setTheme(nextTheme === (systemTheme || 'light') ? 'system' : nextTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="-ml-1 w-8 h-8 relative self-center flex justify-center items-center rounded-full transition-colors lg:hover:bg-slate-800 lg:hover:dark:bg-amber-400 dark:text-dark-50 lg:hover:text-dark-50 lg:hover:dark:text-dark-800 z-50"
      title={translations.toggle}
    >
      <Sun className="text-2xl absolute left-1 top-1 scale-0 dark:scale-100" />
      <Moon className="text-2xl absolute left-1 top-1 -rotate-90 sm:rotate-0 scale-100 dark:scale-0" />
      <span className="sr-only">{translations.toggle}</span>
    </button>
  );
};

export default ThemeToggle;
