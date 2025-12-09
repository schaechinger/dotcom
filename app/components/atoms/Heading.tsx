import clsx from 'clsx';
import React, { JSX } from 'react';

export type HeadingTag = 'h1' | 'h2' | 'h3';

type Props = {
  level: number;
  children?: React.ReactNode;
  className?: string;
  tag?: HeadingTag;
  title?: string;
};

const Heading = ({ children, className, level, tag, title }: Props) => {
  const heading = Math.min(Math.max(level, 1), 3);
  const Tag = tag || `h${heading}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={clsx(
        'text-contrast-950 dark:text-contrast-50 font-normal',
        1 === heading && 'relative text-3xl mb-7 before:h-1 before:w-14 before:absolute before:-left-2 before:-bottom-1.5 before:bg-primary/80 dark:before:bg-primary/60 before:rounded-full',
        2 === heading && 'text-2xl mb-2',
        3 === heading && 'text-lg mb-2',
        className,
      )}
    >
      {title || children}
    </Tag>
  );
};

export default Heading;
