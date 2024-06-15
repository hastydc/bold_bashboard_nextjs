import Style from './priceCard.module.scss';
import Tooltip from '../tooltip/Tooltip';
import usePriceCard from './hooks/usePriceCard';
import { useTranslations } from 'next-intl';
import { transactionData } from '@/mock/data';

const PriceCard = () => {
  const {
    title,
    total: totalSales,
    monthName,
    dayNumber,
  } = usePriceCard(transactionData);
  const t = useTranslations();

  return (
    <>
      <article className={Style.priceCard}>
        <div className={Style.header}>
          <span className={Style.title}>{title}</span>

          <Tooltip label={t('sales')} icon={'i'} left={true} />
        </div>

        <div className={Style.content}>
          <div className={Style.value}>{totalSales}</div>

          <div className={Style.date}>
            {t(`dateSelector.${monthName}`)} {dayNumber}
          </div>
        </div>
      </article>
    </>
  );
};

export default PriceCard;
