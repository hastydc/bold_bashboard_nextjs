import { currentDate, getLabels } from '@/mock/data';
import { TransactionData } from '@/models/transactionData.interface';

const usePriceCard = ({
  dateFilter,
  monthName,
  totalSales,
}: TransactionData) => {
  const title = `Total de ventas de ${getLabels(monthName)[dateFilter]}`;
  const dayNumber = new Date(currentDate).getDate();
  const total = `$ ${totalSales.toLocaleString()}`;

  return { title, total, monthName, dayNumber };
};

export default usePriceCard;
