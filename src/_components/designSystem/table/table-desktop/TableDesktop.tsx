import { TransactionData } from '@/models/transactionData.interface';
import Style from '../table.module.scss';
import useTable, { useTablePipes } from '../hooks/useTable';
import useTableDesktop from './hooks/useTableDesktop';
import Image from 'next/image';
import { TransactionStatus } from '@/models/transactionStatus.enum';

type TableProps = TransactionData;

const TableDesktop = (tableProps: TableProps) => {
  const { tableHeaders, getTdClassName } = useTableDesktop();
  const { title } = useTable(tableProps);
  const {
    formatCardNumber,
    getCreditCardIcon,
    getPaymentMethodIcon,
    formatDate,
  } = useTablePipes();

  return (
    <>
      <div className={Style.table}>
        <table className={Style.tableDesktop} cellPadding={0} cellSpacing={0}>
          <thead>
            <tr>
              <th colSpan={5} className={`${Style.th} ${Style.thHead}`}>
                {title}
              </th>
            </tr>

            <tr>
              {tableHeaders.map((header: string) => (
                <th className={Style.th} key={header}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {tableProps.transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className={getTdClassName(transaction.status)}>
                  <div className={Style.content}>
                    <div className={Style.icon}>
                      <Image
                        alt='Tipo de cobro'
                        src={getPaymentMethodIcon(transaction.paymentMethod)}
                        fill={true}
                      />
                    </div>
                    <span className={Style.status}>{transaction.status}</span>
                  </div>
                </td>

                <td className={Style.td}>
                  <div className={`${Style.content}`}>
                    <span className={Style.tableGray}>
                      {formatDate(transaction.createdAt)}
                    </span>
                  </div>
                </td>

                <td className={Style.td}>
                  <div className={`${Style.content}`}>
                    <div className={Style.iconCard}>
                      <Image
                        alt='Número de tarjeta'
                        src={getCreditCardIcon(transaction.cardNumber)}
                        fill={true}
                      />
                    </div>
                    <span className={Style.tableGray}>
                      {formatCardNumber(transaction.cardNumber)}
                    </span>
                  </div>
                </td>

                <td className={Style.td}>
                  <div className={`${Style.content}`}>
                    <span className={Style.tableGray}>{transaction.id}</span>
                  </div>
                </td>

                <td className={Style.td}>
                  <div className={`${Style.content} ${Style.tdAmount}`}>
                    <div>$ {transaction.amount.toLocaleString()}</div>

                    {transaction.status === TransactionStatus.SUCCESS ? (
                      <>
                        <div
                          className={`${Style.deductionLabel} ${Style.tableGray}`}
                        >
                          {'Deducción Bold'}
                        </div>

                        <div
                          className={`${Style.deductionAmount} ${Style.tableRed}`}
                        >
                          - $ {transaction.deduction?.toLocaleString()}
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableDesktop;
