import clsx from 'clsx';

import Link from '@components/atoms/Link';

const SnesButtons = () => {
  const className = 'absolute w-6 h-6 text-center font-bold rounded-full transition-colors border border-contrast-200 dark:border-contrast-700 text-contrast-200 dark:text-contrast-700';

  return (
    <div className="relative text-base h-[72px]">
      <span className={clsx('left-0 top-6 hover:bg-snes-y hover:text-contrast-50', className)}>Y</span>
      <span className={clsx('left-6 top-0 hover:bg-snes-x hover:text-contrast-50', className)}>X</span>
      <span className={clsx('left-12 top-6 hover:bg-snes-a hover:text-contrast-50', className)}>A</span>
      <Link href="/" className={clsx('left-6 top-12 hover:bg-snes-b hover:text-contrast-950 hover:dark:text-contrast-950', className)} prefetch={false}>B</Link>
    </div>
  );
};

export default SnesButtons;
