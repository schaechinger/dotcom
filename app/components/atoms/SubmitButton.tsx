type Props = {
  children: React.ReactNode;
  disabled?: boolean;
};

const SubmitButton = ({ children, disabled }: Props) => (
  <button
    type="submit"
    className="font-bold tracking-wide uppercase px-4 py-2.5 bg-secondary dark:bg-primary hover:bg-secondary/80 hover:dark:bg-primary/60 border-none text-dark-50 disabled:bg-secondary/40 disabled:text-slate-500 disabled:cursor-not-allowed transition-colors border-0 rounded-sm"
    aria-disabled={disabled}
    disabled={disabled}
  >{children}</button>
);

export default SubmitButton;
