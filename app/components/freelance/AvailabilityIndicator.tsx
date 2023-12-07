import { unstable_noStore } from 'next/cache';

import Clock from '@components/icons/Clock';
import { loadAvailability } from '@/app/lib/contentful';

const AvailabilityIndicator = async () => {
  unstable_noStore();
  const availibility = await loadAvailability();

  return (
    <div className="text-primary-500 bg-primary-100 border border-primary-100 rounded-sm px-2 py-1 font-bold inline-block">
      { availibility?.days
        ? <span>
            <Clock className="text-primary-300 -mt-1 mr-2 text-lg" />
            <span className="text-xl mr-0.5">{availibility.days}</span>d / Woche
          </span>
        : 'Keine Kapazität' }
    </div>
  );
};

export default AvailabilityIndicator;
