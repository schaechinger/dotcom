import { SVGProps } from 'react';

export type IconProps = SVGProps<SVGSVGElement> & { title?: string };

const Icon = (props: IconProps) => (
  <span title={props.title}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="1em"
      height="1em"
      { ...{
        ...props,
        className: `${!props.className?.startsWith('hidden') ? 'inline-block' : ''}${props.className ? ` ${props.className}` : ''}`,
        style: { ...(props.style || {}), fill: 'currentColor' },
        children: undefined,
        title: undefined,
      } }
    >{ props.children }</svg>
    {!!props.title && <span className="sr-only">{props.title}</span>}
  </span>
)

export default Icon;
