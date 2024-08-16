import Link from 'next/link';
import React from 'react';

import ChevronRight from '@components/icons/ChevronRight';

type Props = {
  href: string;
  label?: string;
  target?: string;
  children?: React.ReactNode;
}

const LinkButton = (props: Props) => {
  const target = (/^https?:\/\//.test(props.href)) ? '_blank' : props.target;
  const Component = target ? 'a' : Link;

  return (
    <Component
      href={props.href}
      className="group hover:bg-primary-300 -m-[2px] p-[2px]"
      target={target}
    >
      <span className="font-normal text-primary-500">[</span>
      <span className="font-medium dark:text-dark-50">{ props.label || props.children }</span>
      <span className="font-normal text-primary-500">]</span>
    </Component>
  );
};

export default LinkButton;
