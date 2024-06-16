import { currentDate } from '@/mock/data';
import { DateFilter } from '@/models/dateFilter.enum';
import { TableDataContext } from '@/providers/tableData.provider';
import { useContext } from 'react';

const usePriceCard = (translations: { [key: string]: string }) => {
  const tableData = useContext(TableDataContext);
  const month =
    tableData.dateFilter === DateFilter.MONTH
      ? translations[tableData.monthName!]
      : '';
  const title = `${translations.totalSalesOf} ${month} ${
    translations[tableData.dateFilter] ?? ''
  }`;
  const dayNumber = new Date(currentDate).getDate();

  return { title, tableData, dayNumber };
};

export default usePriceCard;
