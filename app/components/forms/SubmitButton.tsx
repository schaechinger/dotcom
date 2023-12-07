import { useFormStatus } from 'react-dom';

export const SubmitButton = ({ children }: { children: React.ReactNode }) => {
  const { pending } = useFormStatus();
 
  return (
    <button
      type="submit"
      className="uppercase text-sm tracking-wide text-primary-500 disabled:text-slate-500 border border-primary-200 rounded-full px-4 py-2"
      aria-disabled={pending}
      disabled={pending}
    >
      { children }
    </button>
  );
};

export default SubmitButton;
