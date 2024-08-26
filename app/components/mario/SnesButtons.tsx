import clsx from 'clsx';

const SnesButtons = () => {
  const className = 'absolute inline-block text-center w-6 h-6 rounded-full transition-colors border border-dark-200 dark:border-dark-700 text-dark-200 dark:text-dark-700';
  return (
    <div className="relative text-base h-[72px]">
      <span className={clsx('left-0 top-6 hover:bg-snes-y hover:text-dark-50', className)}>Y</span>
      <span className={clsx('left-6 top-0 hover:bg-snes-x hover:text-dark-50', className)}>X</span>
      <span className={clsx('left-12 top-6 hover:bg-snes-a hover:text-dark-50', className)}>A</span>
      <span className={clsx('left-6 top-12 hover:bg-snes-b hover:text-dark-950', className)}>B</span>
    </div>
  );
};

export default SnesButtons;
