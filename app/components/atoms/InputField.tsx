import clsx from 'clsx';

type Props = {
  label: string;
  name: string;
  className?: string;
  disabled?: boolean;
  error?: string | false;
  required?: boolean;
  type?: string;
};

const InputField = ({ className, disabled, error, label, name, required, type = 'text' }: Props) => (
  <label className={clsx('block', className)}>
    <span className="text-dark-800 dark:text-slate-200">{label}</span>
    <input
      type={type}
      name={name}
      className="mt-1 block w-full px-3 py-2.5 bg-secondary/10 dark:bg-secondary/30 border border-secondary/30 dark:border-secondary/50 rounded-md text-sm focus:outline-none focus:border-secondary/60 focus:dark:border-primary/60 focus:ring-1 focus:ring-secondary disabled:cursor-not-allowed disabled:bg-slate-400/50 disabled:dark:bg-slate-400/30"
      disabled={disabled}
      required={!!required}
    />
    {!!error && <p className="peer text-sm text-squash-red mt-1">{error}</p>}
  </label>
);

export default InputField;
