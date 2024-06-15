import { currentDate, getLabels } from '@/mock/data';
import { TransactionData } from '@/models/transactionData.interface';
import { useTranslations } from 'next-intl';

const usePriceCard = ({
  dateFilter,
  monthName,
  totalSales,
}: TransactionData) => {
  const t = useTranslations();

  const title = `${t('totalSalesOf')} ${getLabels(monthName)[dateFilter]}`;
  const dayNumber = new Date(currentDate).getDate();
  const total = `$ ${totalSales.toLocaleString()}`;

  return { title, total, monthName, dayNumber };
};

export default usePriceCard;
