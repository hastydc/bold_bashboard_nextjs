'use client';

import Style from '../table.module.scss';
import useTable from '../hooks/useTable';
import TransactionCard from './transaction-card/TransactionCard';

type TableProps = {
  translations: { [key: string]: string };
};

const TableMobile = ({ translations }: TableProps) => {
  const { title, tableData } = useTable(translations);

  return (
    <>
      <div className={Style.table}>
        <div className={Style.mobile}>
          <div className={`${Style.th} ${Style.thHead}`}>{title}</div>

          {tableData.transactions.map((transaction) => (
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
