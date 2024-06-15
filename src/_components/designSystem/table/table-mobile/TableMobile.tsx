import { TransactionData } from '@/models/transactionData.interface';
import Style from '../table.module.scss';
import useTable from '../hooks/useTable';
import TransactionCard from './transaction-card/TransactionCard';

type TableProps = TransactionData;

const TableMobile = (tableProps: TableProps) => {
  const { title, transactions } = useTable(tableProps);

  return (
    <>
      <div className={Style.table}>
        <div className={Style.mobile}>
          <div className={`${Style.th} ${Style.thHead}`}>{title}</div>

          {transactions.map((transaction) => (
            <TransactionCard {...transaction} key={transaction.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TableMobile;
