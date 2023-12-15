'use client';

import { useTheme } from 'next-themes';

import Contrast from '@components/icons/Contrast';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme('light' === theme ? 'dark' : 'light')}
      className="-ml-1 w-7 h-7 flow justify-center items-center rounded-full transition-colors hover:bg-sky-600 hover:dark:bg-amber-400 hover:text-dark-50 hover:dark:text-dark-900"
    >
      <Contrast className="text-xl -mt-1" />
    </button>
  );
};

export default ThemeToggle;
