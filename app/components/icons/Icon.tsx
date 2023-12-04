import { SVGProps } from 'react';

const Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width="1em"
    height="1em"
    { ...{
      ...props,
      className: `inline-block${props.className ? ` ${props.className}` : ''}`,
      style: { ...(props.style || {}), fill: 'currentColor' },
      children: undefined,
    } }
  >{ props.children }</svg>
)

export default Icon;
