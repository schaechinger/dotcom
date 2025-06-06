type Props = {
  children?: React.ReactNode;
  label?: string;
  href?: string;
};

const HighlightLabel = ({ children, label, href }: Props) => {
  const highlight = (
    <strong
      className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary"
    >{ label || children }</strong>
  );

  return href ? <a href={href} target="_blank">{highlight}</a> : highlight;
};

export default HighlightLabel;
