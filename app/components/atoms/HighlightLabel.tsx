type Props = {
  children?: React.ReactNode;
  label?: string;
};

const HighlightLabel = ({ children, label }: Props) => (
  <strong
    className="text-transparent bg-clip-text bg-gradient-to-br from-primary-500 to-primary-400"
  >{ label || children }</strong>
);

export default HighlightLabel;
