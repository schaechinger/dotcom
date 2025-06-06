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
    <div className="relative">
      <input
        type={type}
        name={name}
        id={name}
        className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 rounded-none border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-dark focus:outline-none focus:ring-0 focus:border-primary-light placeholder-transparent peer"
        placeholder=" "
        disabled={disabled}
        required={required}
      />
      <label
        htmlFor={name}
        className="absolute text-sm text-contrast-900 dark:text-slate-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary-light peer-focus:dark:text-primary-dark peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >{label}</label>
    </div>
    {!!error && <p className="peer text-sm text-squash-red mt-1">{error}</p>}
  </div>
);

export default InputField;
