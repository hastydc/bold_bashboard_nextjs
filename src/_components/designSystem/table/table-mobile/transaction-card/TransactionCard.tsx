'use client';

import { Transaction } from '@/models/transaction.interface';
import Style from '../../table.module.scss';
import useTransactionCard from './hooks/useTransactionCard';
import { TransactionStatus } from '@/models/transactionStatus.enum';
import { useTablePipes } from '../../hooks/useTable';
import Image from 'next/image';

type TransactionCardProps = {
  transaction: Transaction;
  translations: { [key: string]: string };
};

const TransactionCard = ({
  transaction,
  translations,
}: TransactionCardProps) => {
  const {
    formatCardNumber,
    getCreditCardIcon,
    getPaymentMethodIcon,
    formatDate,
  } = useTablePipes();

  const { baseClassName, showMore, setShowMore } =
    useTransactionCard(transaction);

  return (
    <>
      <article className={baseClassName}>
        <h4 className={`${Style.label} ${Style.tableBlue}`}>
          {translations.transaction}
        </h4>
        <div className={`${Style.content} ${Style.tableBlue}`}>
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

        <h4 className={`${Style.label} ${Style.tableBlue}`}>
          {translations.dateAndHour}
        </h4>
        <div className={`${Style.content} ${Style.tableGray}`}>
          {formatDate(transaction.createdAt)}
        </div>

        <div
          className={`${Style.expand} ${showMore ? Style.expandActive : ''}`}
        >
          <h4 className={`${Style.label} ${Style.tableBlue}`}>
            {translations.paymentMethod}
          </h4>
          <div className={`${Style.content} ${Style.tableGray}`}>
            <div className={Style.iconCard}>
              <Image
                alt={translations.card}
                src={getCreditCardIcon(transaction.cardNumber)}
                fill={true}
              />
            </div>
            <span>{formatCardNumber(transaction.cardNumber)}</span>
          </div>

          <h4 className={`${Style.label} ${Style.tableBlue}`}>
            {translations.idTransactionBold}
          </h4>
          <div className={`${Style.content} ${Style.tableGray}`}>
            <span>{transaction.id}</span>
          </div>

          <h4 className={`${Style.label} ${Style.tableBlue}`}>
            {translations.amount}
          </h4>

          <div
            className={`${Style.content} ${Style.tableBlue} ${Style.contentCol}`}
          >
            <div>$ {transaction.amount.toLocaleString()}</div>

            {transaction.status === TransactionStatus.SUCCESS ? (
              <>
                <div className={`${Style.deductionLabel} ${Style.tableGray}`}>
                  {translations.boldDeduction}
                </div>

                <div className={`${Style.deductionAmount} ${Style.tableRed}`}>
                  - $ {transaction.deduction?.toLocaleString()}
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>

        <button
          aria-label={translations.see}
          className={Style.btn}
          onClick={() => setShowMore(!showMore)}
        >
          {translations[`see${!showMore ? 'More' : 'Less'}`]}
        </button>
      </article>
    </>
  );
};

export default TransactionCard;
