const SnesButtons = () => (
  <div className="relative text-base h-[72px]">
    <span className="absolute inline-block left-0 top-6 text-center w-6 h-6 rounded-full transition-colors border border-primary-100 hover:bg-snes-y text-dark-200 dark:text-dark-700 hover:text-dark-50">Y</span>
    <span className="absolute inline-block left-6 top-0 text-center w-6 h-6 rounded-full transition-colors border border-primary-100 hover:bg-snes-x text-dark-200 dark:text-dark-700 hover:text-dark-50">X</span>
    <span className="absolute inline-block left-12 top-6 text-center w-6 h-6 rounded-full transition-colors border border-primary-100 hover:bg-snes-a text-dark-200 dark:text-dark-700 hover:text-dark-50">A</span>
    <span className="absolute inline-block left-6 top-12 text-center w-6 h-6 rounded-full transition-colors border border-primary-100 hover:bg-snes-b text-dark-200 dark:text-dark-700 hover:text-dark-950">B</span>
  </div>
);

export default SnesButtons;
