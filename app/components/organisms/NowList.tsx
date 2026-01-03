import { getLocale, getTranslations } from 'next-intl/server';

import { formatDate } from '@app/utils';
import BulletList from '@components/atoms/BulletList';
import { loadNow } from '@dal/now';
import type { LocaleCode } from '@lib/router';

const NowList = async () => {
  const locale = await getLocale() as LocaleCode;
  const t = await getTranslations('nowList');;
  const { activities, updatedAt } = (await loadNow(locale)) || {
    activities: [],
    updatedAt: '',
  };

  return (
    <>
      <BulletList>
        {activities.map((activity) => (
          activity.tasks.map((task) => (
            <p key={`${activity.category}-${task}`} className="mb-2">
              <strong>{activity.category}</strong> {task}
            </p>
          ))
        ))}
      </BulletList>
      {!!updatedAt && (
        <p className="text-sm mt-3">{t('updatedAt', { date: formatDate(updatedAt, locale, true) })}</p>
      )}
    </>
  )
};

export default NowList;
