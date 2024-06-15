import { currentDate, getLabels } from '@/_mock/data';
import { TransactionData } from '@/_models/transactionData.interface';
import { useTranslations } from 'next-intl';

const usePriceCard = (
  { dateFilter, monthName, totalSales }: TransactionData,
  translations: { [key: string]: string }
) => {
  const title = `${translations.totalSalesOf} ${
    getLabels(monthName)[dateFilter]
  }`;
  const dayNumber = new Date(currentDate).getDate();
  const total = `$ ${totalSales.toLocaleString()}`;

  return { title, total, monthName, dayNumber };
};

export default usePriceCard;
