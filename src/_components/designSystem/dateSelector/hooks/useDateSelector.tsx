import { getLabels } from '@/mock/data';
import { TransactionData } from '@/models/transactionData.interface';
import { TransactionDate } from '@/models/transactionDate.enum';

const useDateSelector = ({ monthName, dateFilter }: TransactionData) => {
  const labels = getLabels(monthName);

  const options = [
    {
      label: labels[TransactionDate.TODAY],
      value: TransactionDate.TODAY,
    },
    {
      label: labels[TransactionDate.WEEK],
      value: TransactionDate.WEEK,
    },
    {
      label: monthName,
      value: TransactionDate.MONTH,
    },
  ];

  const filterByDate = (date: string) => {};

  return { options, dateFilter, filterByDate };
};

export default useDateSelector;
