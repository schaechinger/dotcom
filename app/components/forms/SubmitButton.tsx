type Props = {
  children: React.ReactNode;
  disabled?: boolean;
}

export const SubmitButton = ({ children, disabled }: Props) => (
  <button
    type="submit"
    className="tracking-wide bg-primary-500 hover:bg-primary-400 text-dark-50 disabled:bg-transparent disabled:text-slate-500 disabled:cursor-not-allowed transition-colors border border-primary-200 rounded-md px-3 py-2"
    aria-disabled={disabled}
    disabled={disabled}
  >
    { children }
  </button>
);

export default SubmitButton;
