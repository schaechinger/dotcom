import Icon, { IconProps } from './Icon';

const Menu = (props: IconProps) => (
  <Icon { ...props }>
    <path id="menu" d="M27,23v2a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V23a1,1,0,0,1,1-1H26A1,1,0,0,1,27,23ZM26,6H6A1,1,0,0,0,5,7V9a1,1,0,0,0,1,1H26a1,1,0,0,0,1-1V7A1,1,0,0,0,26,6Zm0,8H6a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1H26a1,1,0,0,0,1-1V15A1,1,0,0,0,26,14Z"/>
  </Icon>
);

export default Menu;
