import Icon, { IconProps } from './Icon';

const ChevronRight = (props: IconProps) => (
  <Icon { ...props }>
    <path id="chevron-right" d="M23.328 16.707 13.121 26.914a.5.5 0 0 1-.707 0l-2.828-2.828a.5.5 0 0 1 0-.707L16.964 16 9.586 8.621a.5.5 0 0 1 0-.707l2.828-2.828a.5.5 0 0 1 .707 0l10.207 10.207a1 1 0 0 1 0 1.414Z" />
  </Icon>
)

export default ChevronRight;
