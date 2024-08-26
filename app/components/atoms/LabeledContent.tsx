type Props = {
  className?: string;
  content: string | number;
  label: string;
};

const LabeledContent = ({ className, content, label }: Props) => (
  <div className={className}>
    <p className="text-sm mb-0.5 text-gray-500 dark:text-gray-400">{label}</p>
    <p>{content}</p>
  </div>
);

export default LabeledContent;
