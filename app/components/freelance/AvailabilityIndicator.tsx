import Clock from '@components/icons/Clock';
import { loadAvailability } from '@lib/contentful';

const AvailabilityIndicator = async () => {
  const availibility = await loadAvailability();

  return (
    <div className="text-primary-500 rounded-sm font-bold inline-block">
      { availibility?.days
        ? <span>
            <Clock className="text-primary-300 -mt-1 mr-2 text-xl" />
            <span className="text-xl mr-1">{availibility.days}</span>d / Woche
          </span>
        : 'Keine Kapazität' }
    </div>
  );
};

export default AvailabilityIndicator;
