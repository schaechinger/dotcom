import { getLocale } from 'next-intl/server';

import { loadNow } from '@lib/contentful';
import { type LocaleCode } from '@lib/router';

const NowList = async () => {
  const locale = await getLocale() as LocaleCode;
  const activities = await loadNow(locale) || [];

  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {activities.map((activity, i) => (
        <div key={i} className="mb-4">
          <h2 className="text-h2">{activity.category}</h2>
          <p className="mt-2">{activity.description}</p>
        </div>
      ))}
    </div>
  );
};

export default NowList;
