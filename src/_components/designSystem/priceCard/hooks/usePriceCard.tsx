import { currentDate } from '@/_mock/data';
import { TableData } from '@/_models/tableData.interface';

const usePriceCard = (
  { dateFilter, monthName, totalSales }: TableData,
  translations: { [key: string]: string }
) => {
  const title = `${translations.totalSalesOf} ${translations[dateFilter]}`;
  const dayNumber = new Date(currentDate).getDate();
  const total = `$ ${totalSales.toLocaleString()}`;

  return { title, total, monthName, dayNumber };
};

export default usePriceCard;
