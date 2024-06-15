import { Transaction } from '@/models/transaction.interface';
import { useEffect, useState } from 'react';
import Style from '../../../table.module.scss';
import { TransactionStatus } from '@/models/transactionStatus.enum';

const useTransactionCard = (transaction: Transaction) => {
  const [baseClassName, setBaseClassName] = useState('');
  const [showMore, setShowMore] = useState(false);

  const setClass = () => {
    let baseClass = Style.td;

    if (transaction.status === TransactionStatus.SUCCESS) {
      baseClass += ` ${Style.tdBlue}`;
    } else if (transaction.status === TransactionStatus.FAILED) {
      baseClass += ` ${Style.tdGray}`;
    }

    setBaseClassName(baseClass);
  };

  useEffect(() => {
    setClass();
  }, [transaction, setClass]);

  return { baseClassName, showMore, setShowMore };
};

export default useTransactionCard;
