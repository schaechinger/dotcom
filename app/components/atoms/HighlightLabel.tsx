type Props = {
  children?: React.ReactNode;
  label?: string;
};

const HighlightLabel = ({ children, label }: Props) => (
  <strong
    className="text-transparent bg-clip-text bg-gradient-to-br from-discreet-primary to-discreet-shade"
  >{ label || children }</strong>
);

export default HighlightLabel;
