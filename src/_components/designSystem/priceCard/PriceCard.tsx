import { TransactionData } from '@/models/transactionData.interface';
import Style from './priceCard.module.scss';
import Tooltip from '../tooltip/Tooltip';
import usePriceCard from './hooks/usePriceCard';

type PriceCardProps = TransactionData;

const PriceCard = (priceCardProps: PriceCardProps) => {
  const {
    title,
    total: totalSales,
    monthName,
    dayNumber,
  } = usePriceCard(priceCardProps);

  return (
    <>
      <article className={Style.priceCard}>
        <div className={Style.header}>
          <span className={Style.title}>{title}</span>

          <Tooltip label={'Ventas'} icon={'i'} left={true} />
        </div>

        <div className={Style.content}>
          <div className={Style.value}>{totalSales}</div>

          <div className={Style.date}>
            {monthName} {dayNumber}
          </div>
        </div>
      </article>
    </>
  );
};

export default PriceCard;
