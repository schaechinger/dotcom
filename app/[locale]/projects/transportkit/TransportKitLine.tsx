'use client';

import clsx from 'clsx';
import { useTheme } from 'next-themes';

type Props = {
  city: string;
  label: string;
  line: string;
};

const TransportKitLine = ({ city, label, line }: Props) => {
  const { resolvedTheme } = useTheme();

  return (
    <span className={clsx(`transportkit-${city}`, 'dark' === resolvedTheme && `transportkit-${city}--contrast`, `transportkit-${city}--${line}`)}>{label}</span>
  );
};

export default TransportKitLine;
