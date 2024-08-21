import Link from 'next/link';
import React from 'react';

import ChevronRight from '@components/icons/ChevronRight';

type Props = {
  href: string;
  label?: string;
  target?: string;
  children?: React.ReactNode;
  replace?: boolean;
}

const LinkButton = (props: Props) => {
  const target = (/^https?:\/\//.test(props.href)) ? '_blank' : props.target;
  const Component = target ? 'a' : Link;

  return (
    <Component
      href={props.href}
      className="group"
      target={target}
      replace={props.replace}
    >
      { props.label || props.children }
      <ChevronRight className="inline-block -mt-0.5 ml-1 transition-all text-primary-300 group-hover:text-current group-hover:text-lg group-hover:-mt-0.5" />
    </Component>
  );
};

export default LinkButton;
