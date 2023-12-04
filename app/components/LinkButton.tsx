import Link from 'next/link';
import React from 'react';

import ChevronRight from '@/app/components/icons/ChevronRight';

interface LinkButtonProps {
  href: string;
  label?: string;
  target?: string;
  children?: React.ReactNode;
}

const LinkButton = (props: LinkButtonProps) => {
  const target = (/^https?:\/\//.test(props.href)) ? '_blank' : props.target;
  const Component = target ? 'a' : Link;

  return (
    <Component
      href={props.href}
      className="group"
      target={target}
    >
      { props.label || props.children }
      <ChevronRight className="inline-block -mt-0.5 ml-1 transition-colors text-primary-300 group-hover:text-primary-500" />
    </Component>
  );
};

export default LinkButton;
