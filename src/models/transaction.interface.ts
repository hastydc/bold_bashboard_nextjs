import { PaymentMethod } from './paymentMethod.enum';
import { TransactionStatus } from './transactionStatus.enum';

export interface Transaction {
  id: string;
  status: TransactionStatus;
  paymentMethod: PaymentMethod;
  createdAt: number | string;
  cardNumber: string;
  amount: number;
  deduction?: number;
}
