type Props = {
  children: React.ReactNode;
};

const HighlightLabel = ({ children }: Props) => (
  <strong
    className="text-transparent bg-clip-text bg-gradient-to-br from-primary-500 to-primary-400"
  >{ children }</strong>
);

export default HighlightLabel;
