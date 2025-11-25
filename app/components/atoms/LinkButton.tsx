import clsx from 'clsx';
import React from 'react';

import Link from '@components/atoms/Link';
import ChevronRight from '@components/icons/ChevronRight';
import type { LocaleCode } from '@lib/router';

type Props = {
  href: string;
  locale?: LocaleCode
  label?: string;
  target?: string;
  children?: React.ReactNode;
  back?: boolean;
};

const LinkButton = (props: Props) => {
  const className = 'inline-block transition-all text-primary-light/60 dark:text-primary-dark/60 group-hover:text-current group-hover:text-lg';

  return (
    <Link
      href={props.href}
      locale={props.locale}
      className="group"
    >
      {props.back && <ChevronRight className={clsx(className, 'rotate-180 mr-1 group-hover:mr-0.5 -mt-1')} />}
      {props.label || props.children}
      {!props.back && <ChevronRight className={clsx(className, 'ml-1 group-hover:ml-0.5 -mt-0.5')} />}
    </Link>
  );
};

export default LinkButton;
