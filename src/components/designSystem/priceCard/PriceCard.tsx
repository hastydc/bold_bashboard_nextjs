import Style from './priceCard.module.scss';
import Tooltip from '../tooltip/Tooltip';
import usePriceCard from './hooks/usePriceCard';
import { DateFilter } from '@/models/dateFilter.enum';

type PriceCardProps = {
  translations: { [key: string]: string };
};

const PriceCard = ({ translations }: PriceCardProps) => {
  const { title, dayNumber, tableData } = usePriceCard(translations);

  return (
    <>
      <article className={Style.priceCard}>
        <div className={Style.header}>
          <span className={Style.title}>{title}</span>

          <Tooltip label={translations.sales} icon={'i'} left={true} />
        </div>

        <div className={Style.content}>
          <div className={Style.value}>
            ${tableData.totalSales.toLocaleString()}
          </div>

          {tableData.dateFilter === DateFilter.TODAY ? (
            <div className={Style.date}>
              {translations[tableData.monthName!]} {dayNumber}
            </div>
          ) : (
            <></>
          )}
        </div>
      </article>
    </>
  );
};

export default PriceCard;
