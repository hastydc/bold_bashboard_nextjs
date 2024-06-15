import { currentDate } from '@/_mock/data';
import { DateFilter } from '@/_models/dateFilter.enum';
import { TableData } from '@/_models/tableData.interface';

const usePriceCard = (
  { dateFilter, monthName = '', totalSales }: TableData,
  translations: { [key: string]: string }
) => {
  const month = dateFilter === DateFilter.TODAY ? translations[monthName] : '';
  const title = `${translations.totalSalesOf} ${month} ${translations[dateFilter]}`;
  const dayNumber = new Date(currentDate).getDate();
  const total = `$ ${totalSales.toLocaleString()}`;

  return { title, total, monthName, dayNumber };
};

export default usePriceCard;
