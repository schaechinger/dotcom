type Props = {
  children: React.ReactNode;
  disabled?: boolean;
};

const SubmitButton = ({ children, disabled }: Props) => (
  <button
    type="submit"
    className="font-bold tracking-wide bg-discreet-shade dark:bg-discreet-primary hover:bg-discreet-shade/80 hover:dark:bg-discreet-primary/60 border-none text-dark-50 disabled:bg-discreet-shade/40 disabled:text-slate-500 disabled:cursor-not-allowed transition-colors border rounded-md px-4 py-2"
    aria-disabled={disabled}
    disabled={disabled}
  >
    { children }
  </button>
);

export default SubmitButton;
