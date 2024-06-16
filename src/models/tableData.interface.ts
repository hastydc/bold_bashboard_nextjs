import { PaymentMethod } from './paymentMethod.enum';
import { Transaction } from './transaction.interface';
import { DateFilter } from './dateFilter.enum';

export interface TableData {
  transactions: Transaction[];
  totalSales: number;
  dateFilter: DateFilter;
  paymentMethods?: PaymentMethod[];
  monthName?: string;
}
