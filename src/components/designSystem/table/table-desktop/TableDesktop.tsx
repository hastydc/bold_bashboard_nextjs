'use client';

import Style from '../table.module.scss';
import useTable, { useTablePipes } from '../hooks/useTable';
import useTableDesktop from './hooks/useTableDesktop';
import Image from 'next/image';
import { TransactionStatus } from '@/models/transactionStatus.enum';

type TableProps = {
  translations: { [key: string]: string };
};

const TableDesktop = ({ translations }: TableProps) => {
  const { tableHeaders, getTdClassName } = useTableDesktop();
  const { title, tableData } = useTable(translations);
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
                  {translations[header]}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {tableData.transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className={getTdClassName(transaction.status)}>
                  <div className={Style.content}>
                    <div className={Style.icon}>
                      <Image
                        alt={translations.typeOfPayment}
                        src={getPaymentMethodIcon(transaction.paymentMethod)}
                        fill={true}
                      />
                    </div>
                    <span className={Style.status}>
                      {translations[transaction.status]}
                    </span>
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
                        alt={translations.card}
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
                          {translations.boldDeduction}
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
