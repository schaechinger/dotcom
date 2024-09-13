import clsx from 'clsx';

type Props = {
  label: string;
  name: string;
  className?: string;
  disabled?: boolean;
  error?: string | false;
  required?: boolean;
};

const TextArea = ({ className, disabled, error, label, name, required }: Props) => (
  <div className={clsx('my-1', className)}>
    <div className="relative">
      <textarea
        name={name}
        id={name}
        rows={4}
        className="block py-2.5 px-0 w-full resize-y text-gray-900 bg-transparent border-0 rounded-none border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-secondary peer"
        placeholder=" "
        disabled={disabled}
        required={required}
       />
      <label
        htmlFor={name}
        className="absolute text-sm text-dark-800 dark:text-slate-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
      >{label}</label>
    </div>
    {!!error && <p className="text-sm text-squash-red mt-1">{error}</p>}
  </div>
);

export default TextArea;
