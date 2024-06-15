'use client';

import Style from '../table.module.scss';
import useTable from '../hooks/useTable';
import TransactionCard from './transaction-card/TransactionCard';
import { transactionData } from '@/_mock/data';

type TableProps = {
  translations: { [key: string]: string };
};

const TableMobile = ({ translations }: TableProps) => {
  const { title, transactions } = useTable(transactionData, translations);

  return (
    <>
      <div className={Style.table}>
        <div className={Style.mobile}>
          <div className={`${Style.th} ${Style.thHead}`}>{title}</div>

          {transactions.map((transaction) => (
            <TransactionCard
              translations={translations}
              transaction={transaction}
              key={transaction.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TableMobile;
