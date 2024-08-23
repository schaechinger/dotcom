import { getTranslations } from 'next-intl/server';

import Clock from '@components/icons/Clock';
import { loadAvailability } from '@lib/contentful';

const AvailabilityIndicator = async () => {
  const t = await getTranslations('availability');
  const availability = await loadAvailability();

  const days = +(availability?.days || 0);

  return (
    <div className="text-primary-500 rounded-sm font-bold inline-block">
      { !!days && <Clock className="text-primary-300 -mt-1 mr-2 text-xl" />}
      { !!days && <span className="text-xl mr-1">{days}</span>}{t('days', { days })}
    </div>
  );
};

export default AvailabilityIndicator;