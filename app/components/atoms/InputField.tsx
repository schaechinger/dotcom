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
  <div className={clsx('my-1', className)}>
    <label className="relative">
      <input
        type={type}
        name={name}
        className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-secondary placeholder-transparent peer"
        placeholder=" "
        disabled={disabled}
        required={required}
        />
      <span className="absolute text-sm text-dark-800 dark:text-slate-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-secondary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
        {label}
      </span>
    </label>
    {!!error && <p className="peer text-sm text-squash-red mt-1">{error}</p>}
  </div>
);

export default InputField;
