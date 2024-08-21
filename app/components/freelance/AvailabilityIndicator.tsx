import type { LangComponentProps } from '@app/interfaces';
import Clock from '@components/icons/Clock';
import { loadAvailability } from '@lib/contentful';
import { _t, loadTranslations } from '@lib/i18n';

const AvailabilityIndicator = async ({ lang }: LangComponentProps) => {
  const translations = await loadTranslations('components.availability', lang);
  const availibility = await loadAvailability();

  return (
    <div className="text-primary-500 rounded-sm font-bold inline-block">
      { availibility?.days
        ? <>
            <Clock className="text-primary-300 -mt-1 mr-2 text-xl" />
            <span className="text-xl mr-1">{availibility.days}</span>{_t('days', translations, lang)}
          </>
        : _t('booked', translations, lang) }
    </div>
  );
};

export default AvailabilityIndicator;
