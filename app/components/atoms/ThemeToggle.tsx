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
    setTheme(nextTheme === (systemTheme ?? 'light') ? 'system' : nextTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="-ml-1 w-8 h-8 relative self-center flex justify-center items-center rounded-full transition-colors duration-300 hover:bg-contrast-200/80 hover:dark:bg-contrast-800/80 dark:text-contrast-50 hover:text-contrast-800/80 hover:dark:text-amber-400/80 z-50"
      title={translations.toggle}
    >
      <Sun className="text-2xl absolute left-1 top-1 scale-0 dark:scale-100" />
      <Moon className="text-2xl absolute left-1 top-1 -rotate-90 scale-100 dark:scale-0" />
      <span className="sr-only">{translations.toggle}</span>
    </button>
  );
};

export default ThemeToggle;
