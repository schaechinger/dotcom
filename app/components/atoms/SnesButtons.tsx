import clsx from 'clsx';

import { Link } from '@/routing';

const SnesButtons = () => {
  const className = 'absolute w-6 h-6 text-center font-bold rounded-full transition-colors border border-dark-200 dark:border-dark-600 text-dark-200 dark:text-dark-600';

  return (
    <div className="relative text-base h-[72px]">
      <span className={clsx('left-0 top-6 hover:bg-snes-y hover:text-dark-50', className)}>Y</span>
      <span className={clsx('left-6 top-0 hover:bg-snes-x hover:text-dark-50', className)}>X</span>
      <span className={clsx('left-12 top-6 hover:bg-snes-a hover:text-dark-50', className)}>A</span>
      <Link href="/" className={clsx('left-6 top-12 hover:bg-snes-b hover:text-dark-950 hover:dark:text-dark-950', className)}>B</Link>
    </div>
  );
};

export default SnesButtons;
