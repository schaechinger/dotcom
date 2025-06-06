import { getTranslations } from 'next-intl/server';

import Clock from '@components/icons/Clock';
import { loadAvailability } from '@lib/contentful';

const AvailabilityIndicator = async () => {
  const [availability, t] = await Promise.all([
    loadAvailability(),
    getTranslations('availability'),
  ]);

  const days = +(availability?.days || 0);

  return (
    <div className="text-primary-light dark:text-primary-dark font-bold inline-block">
      <Clock className="text-primary-light -mt-1 mr-2 text-xl" />
      { !!days && <span className="text-xl mr-1">{days}</span>}{t('days', { days })}
    </div>
  );
};

export default AvailabilityIndicator;
