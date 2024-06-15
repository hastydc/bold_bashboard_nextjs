import { TransactionStatus } from '@/_models/transactionStatus.enum';
import Style from '../../table.module.scss';

const tableHeaders: string[] = [
  'transaction',
  'dateAndHour',
  'paymentMethod',
  'idTransactionBold',
  'amount',
];

const useTableDesktop = () => {
  const getTdClassName = (status: TransactionStatus): string => {
    let baseClassName = Style.td;

    if (status === TransactionStatus.SUCCESS) {
      baseClassName += ` ${Style.tdBlue}`;
    } else if (status === TransactionStatus.FAILED) {
      baseClassName += ` ${Style.tdGray}`;
    }

    return baseClassName;
  };

  return { tableHeaders, getTdClassName };
};

export default useTableDesktop;
