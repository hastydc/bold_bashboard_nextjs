import { PaymentMethod } from './paymentMethod.enum';
import { Transaction } from './transaction.interface';
import { TransactionDate } from './transactionDate.enum';

export interface TransactionData {
  transactions: Transaction[];
  totalSales: number;
  dateFilter: TransactionDate;
  paymentMethods?: PaymentMethod[];
  monthName?: string;
}
