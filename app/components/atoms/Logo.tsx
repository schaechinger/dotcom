import clsx from 'clsx';

import Link from '@components/atoms/Link';

type Props = {
  slim?: boolean;
};

const Logo = ({ slim }: Props) => (
  <Link href="/">
    <p className="text-xl leading-6 sm:text-2xl sm:leading-7">
      <span className="text-secondary dark:text-primary font-thin">
        M<span className={clsx(slim && 'hidden sm:inline-block')}>anuel</span>
      </span>
      <span className="text-dark-950 dark:text-dark-50 font-normal">Schächinger</span>
    </p>
    <p className={clsx(slim && 'hidden sm:block', 'text-xs sm:text-sm text-dark-950 dark:text-dark-50 tracking-wide font-normal')}>
      Fullstack JavaScript Engineer
    </p>
  </Link>
);

export default Logo;
