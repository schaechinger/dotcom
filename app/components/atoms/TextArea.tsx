import clsx from 'clsx';

type Props = {
  label: string;
  name: string;
  className?: string;
  error?: string | false;
  required?: boolean;
};

const TextArea = ({ className, error, label, name, required, }: Props) => (
  <label className={clsx('block', className)}>
    <span className="text-dark-800 dark:text-slate-200">{label}</span>
    <textarea
      name={name}
      className="mt-1 block w-full px-3 py-2.5 bg-discreet-shade/10 dark:bg-discreet-shade/30 border border-discreet-shade/30 dark:border-discreet-shade/50 rounded-md text-sm focus:outline-none focus:border-discreet-shade/60 focus:dark:border-discreet-primary/60 focus:ring-1 focus:ring-discreet-shade"
      rows={4}
      required={!!required}
    />
    {!!error && <p className="text-sm text-snes-a dark:text-squash-red mt-1">{error}</p>}
  </label>
);

export default TextArea;
