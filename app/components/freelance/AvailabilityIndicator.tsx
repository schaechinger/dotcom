import { getTranslations } from 'next-intl/server';

import Clock from '@components/icons/Clock';
import { loadAvailability } from '@lib/contentful';

const AvailabilityIndicator = async () => {
  const t = await getTranslations('availability');
  const availibility = await loadAvailability();

  return (
    <div className="text-primary-500 rounded-sm font-bold inline-block">
      { availibility?.days
        ? <>
            <Clock className="text-primary-300 -mt-1 mr-2 text-xl" />
            <span className="text-xl mr-1">{availibility.days}</span>{t('days')}
          </>
        : t('booked') }
    </div>
  );
};

export default AvailabilityIndicator;
