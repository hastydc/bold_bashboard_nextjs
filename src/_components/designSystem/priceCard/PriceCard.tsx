import Style from './priceCard.module.scss';
import Tooltip from '../tooltip/Tooltip';
import usePriceCard from './hooks/usePriceCard';
import { transactionData } from '@/_mock/data';

type PriceCardProps = {
  translations: { [key: string]: string };
};

const PriceCard = ({ translations }: PriceCardProps) => {
  const {
    title,
    total: totalSales,
    dayNumber,
  } = usePriceCard(transactionData, translations);

  return (
    <>
      <article className={Style.priceCard}>
        <div className={Style.header}>
          <span className={Style.title}>{title}</span>

          <Tooltip label={translations.sales} icon={'i'} left={true} />
        </div>

        <div className={Style.content}>
          <div className={Style.value}>{totalSales}</div>

          <div className={Style.date}>
            {translations.monthName} {dayNumber}
          </div>
        </div>
      </article>
    </>
  );
};

export default PriceCard;
