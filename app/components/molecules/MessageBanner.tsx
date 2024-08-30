import clsx from 'clsx';

import CircleAlert from '@components/icons/CircleAlert';
import CircleCheck from '../icons/CircleCheck';

type Props = {
  children?: React.ReactNode;
  classname?: string;
  error?: boolean;
  success?: boolean;
  text?: string;
  title?: string;
};

const MessageBanner = ({ children, classname, error, success, text, title }: Props) => {
  const Icon = (success && !error) ? CircleCheck : CircleAlert;

  return (
    <div className={clsx(
      'flex gap-3 p-2 sm:rounded-md -mx-4 sm:-mx-2',
      error && 'bg-warning-200/30 dark:bg-warning-800/40 text-warning-800 dark:text-warning-300',
      success && 'text-discreet-primary',
      !error && 'bg-discreet-shade/10 dark:bg-discreet-primary/15',
      classname
    )}>
      {(success || error) && (
        <div className="flex-none">
          <Icon className="text-2xl -mt-0.5" />
        </div>
      )}
      <div className="flex-1">
        {(!!text || !!title) && <p>{title && <strong>{title}&nbsp;</strong>}{text}</p>}
        {children}
      </div>
    </div>
  );
};

export default MessageBanner;
