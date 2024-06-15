import { TransactionData } from '@/models/transactionData.interface';
import { TransactionDate } from '@/models/transactionDate.enum';

const useDateSelector = (
  { monthName = '', dateFilter }: TransactionData,
  translations: { [key: string]: string }
) => {
  const options = [
    {
      label: translations[TransactionDate.TODAY],
      value: TransactionDate.TODAY,
    },
    {
      label: translations[TransactionDate.WEEK],
      value: TransactionDate.WEEK,
    },
    {
      label: translations[monthName],
      value: TransactionDate.MONTH,
    },
  ];

  const filterByDate = (date: string) => {};

  return { options, dateFilter, filterByDate };
};

export default useDateSelector;
