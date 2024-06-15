import { TransactionData } from '@/models/transactionData.interface';
import Style from '../table.module.scss';
import useTable from '../hooks/useTable';
import TransactionCard from './transaction-card/TransactionCard';
import { useTranslations } from 'next-intl';

type TableProps = TransactionData;

const TableMobile = (tableProps: TableProps) => {
  const { title, transactions } = useTable(tableProps);
  const t = useTranslations();

  return (
    <>
      <div className={Style.table}>
        <div className={Style.mobile}>
          <div className={`${Style.th} ${Style.thHead}`}>{title}</div>

          {transactions.map((transaction) => (
            <TransactionCard
              translations={t.raw('table')}
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
