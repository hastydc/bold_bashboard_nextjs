import { Transaction } from '@/_models/transaction.interface';
import { useContext, useEffect, useState } from 'react';
import Style from '../../../table.module.scss';
import { TransactionStatus } from '@/_models/transactionStatus.enum';
import { TableDataContext } from '@/_providers/tableData.provider';

const useTransactionCard = (transaction: Transaction) => {
  const [baseClassName, setBaseClassName] = useState('');
  const [showMore, setShowMore] = useState(false);
  const tableData = useContext(TableDataContext);

  useEffect(() => {
    const setClass = () => {
      let baseClass = Style.td;

      if (transaction.status === TransactionStatus.SUCCESS) {
        baseClass += ` ${Style.tdBlue}`;
      } else if (transaction.status === TransactionStatus.FAILED) {
        baseClass += ` ${Style.tdGray}`;
      }

      setBaseClassName(baseClass);
    };

    setClass();
  }, [transaction]);

  useEffect(() => {
    setShowMore(false);
  }, [tableData]);

  return { baseClassName, showMore, setShowMore };
};

export default useTransactionCard;
