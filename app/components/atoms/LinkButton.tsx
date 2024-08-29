import clsx from 'clsx';
import React from 'react';

import Link from '@components/atoms/Link';
import ChevronRight from '@components/icons/ChevronRight';
import { LocaleCode } from '@lib/router';

type Props = {
  href: string;
  locale?: LocaleCode
  label?: string;
  target?: string;
  children?: React.ReactNode;
  back?: boolean;
};

const LinkButton = (props: Props) => {
  const iconClasses = 'inline-block transition-all text-primary-300 group-hover:text-current group-hover:text-lg';

  return (
    <Link
      href={props.href}
      locale={props.locale}
      className="group"
    >
      {props.back && <ChevronRight className={clsx('rotate-180 mr-1 group-hover:mr-0.5 -mt-1', iconClasses)} />}
      {props.label || props.children}
      {!props.back && <ChevronRight className={clsx('ml-1 group-hover:ml-0.5 -mt-0.5', iconClasses)} />}
    </Link>
  );
};

export default LinkButton;
