import { currentDate } from '@/mock/data';
import { TransactionData } from '@/models/transactionData.interface';
import { TransactionDate } from '@/models/transactionDate.enum';

const usePriceCard = ({
  dateFilter,
  monthName,
  totalSales,
}: TransactionData) => {
  const labels = {
    [TransactionDate.MONTH]: monthName,
    [TransactionDate.TODAY]: 'hoy',
    [TransactionDate.WEEK]: 'esta semana',
  };

  const title = `Total de ventas de ${labels[dateFilter]}`;
  const dayNumber = new Date(currentDate).getDate();
  const total = `$ ${totalSales.toLocaleString()}`;

  return { title, total, monthName, dayNumber };
};

export default usePriceCard;
