import clsx from 'clsx';
import { useTranslations } from 'next-intl';

import Heading from '@components/atoms/Heading';
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
      <Heading level={2} title={title || t(id as 'description')} />

      {(content || []).map((p, i) => (
        <p className={clsx(i < ((content.length || 0) - 1) && 'mb-2')}
          key={`${id}-${i}`}>{p}</p>
      ))}
    </PageSection>
  );
};

export default DetailBlock;
