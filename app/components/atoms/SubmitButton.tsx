type Props = {
  children: React.ReactNode;
  disabled?: boolean;
};

const SubmitButton = ({ children, disabled }: Props) => (
  <button
    type="submit"
    className="font-bold tracking-wide px-4 py-2.5 bg-primary-light dark:bg-primary-dark hover:bg-primary-light/80 hover:dark:bg-primary-dark/60 border-none text-contrast-50 disabled:bg-primary-light/40 disabled:text-slate-500 disabled:cursor-not-allowed transition-colors border-0 rounded-lg"
    aria-disabled={disabled}
    disabled={disabled}
  >{children}</button>
);

export default SubmitButton;
