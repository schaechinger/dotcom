import clsx from 'clsx';
import { useTranslations } from 'next-intl';

import PageSection from '@components/organisms/PageSection';

type Props = {
  id: string;
  title?: string;
  content: string[];
};

const DetailBlock = ({ id, title, content }: Props) => {
  const t = useTranslations('pages.projects.details');

  return (
    <PageSection id={id} dense>
      <h2 className="text-h2">{title || t(id)}</h2>

      {(content || []).map((p, i) => (
        <p className={clsx(i < ((content.length || 0) - 1) && 'mb-2')}
          key={`${id}-${i}`}>{p}</p>
      ))}
    </PageSection>
  );
};

export default DetailBlock;
