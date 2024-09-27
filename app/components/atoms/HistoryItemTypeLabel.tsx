import clsx from 'clsx';
import { useTranslations } from 'next-intl';

import Banknotes from '@components/icons/Banknotes';
import BuildingsCity from '@components/icons/BuildingsCity';
import Certificate from '@components/icons/Certificate';
import Education from '@components/icons/Education';
import HeartEmpty from '@components/icons/HeartEmpty';
import Knight from '@components/icons/Knight';
import { type HistoryType } from '@models/history';


type Props = {
  type: HistoryType;
  colored?: boolean;
  label?: boolean;
}

const HistoryItemTypeLabel = ({ colored, label, type }: Props) => {
  const t = useTranslations('general.history.types')
  const TypeIcon = type
    ? {
      certificate: Certificate,
      education: Education,
      employee: BuildingsCity,
      founder: HeartEmpty,
      freelance: Banknotes,
      private: Knight,
    }[type]
    : null;

  if (!TypeIcon) {
    return null;
  }

  return (
    <>
      <TypeIcon title={t(type)} className={clsx('inline-block -mt-1 mr-2', colored && 'text-secondary/60 dark:text-primary/60')} />
      {label && t(type)}
    </>
  );
};

export default HistoryItemTypeLabel;
