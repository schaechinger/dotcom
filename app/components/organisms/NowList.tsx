import { getLocale } from 'next-intl/server';

import { loadNow } from '@lib/contentful';
import { type LocaleCode } from '@lib/router';
import BulletList from '../atoms/BulletList';

const NowList = async () => {
  const locale = await getLocale() as LocaleCode;
  const activities = await loadNow(locale) || [];

  return <BulletList bullets={activities} />;
};

export default NowList;
