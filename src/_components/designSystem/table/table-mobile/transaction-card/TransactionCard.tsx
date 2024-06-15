'use client';

import { Transaction } from '@/models/transaction.interface';
import Style from '../../table.module.scss';
import useTransactionCard from './hooks/useTransactionCard';
import { TransactionStatus } from '@/models/transactionStatus.enum';
import { useTablePipes } from '../../hooks/useTable';
import Image from 'next/image';

type TransactionCardProps = Transaction;

const TransactionCard = (transactionCardProps: TransactionCardProps) => {
  const { formatCardNumber, getCreditCardIcon, getPaymentMethodIcon } =
    useTablePipes();

  const { baseClassName, showMore, setShowMore } =
    useTransactionCard(transactionCardProps);

  return (
    <>
      <article className={baseClassName}>
        <h4 className={`${Style.label} ${Style.tableBlue}`}>{'Transacción'}</h4>
        <div className={`${Style.content} ${Style.tableBlue}`}>
          <div className={Style.icon}>
            <Image
              alt='Tipo de cobro'
              src={getPaymentMethodIcon(transactionCardProps.paymentMethod)}
              fill={true}
            />
          </div>
          <span className={Style.status}>{transactionCardProps.status}</span>
        </div>

        <h4 className={`${Style.label} ${Style.tableBlue}`}>
          {'Fecha y hora'}
        </h4>
        <div className={`${Style.content} ${Style.tableGray}`}>
          {transactionCardProps.createdAt}
        </div>

        <div
          className={`${Style.expand} ${showMore ? Style.expandActive : ''}`}
        >
          <h4 className={`${Style.label} ${Style.tableBlue}`}>
            {'Método de pago'}
          </h4>
          <div className={`${Style.content} ${Style.tableGray}`}>
            <div className={Style.iconCard}>
              <Image
                alt='Número de tarjeta'
                src={getCreditCardIcon(transactionCardProps.cardNumber)}
                fill={true}
              />
            </div>
            <span>{formatCardNumber(transactionCardProps.cardNumber)}</span>
          </div>

          <h4 className={`${Style.label} ${Style.tableBlue}`}>
            {'ID transacción Bold'}
          </h4>
          <div className={`${Style.content} ${Style.tableGray}`}>
            <span>{transactionCardProps.id}</span>
          </div>

          <h4 className={`${Style.label} ${Style.tableBlue}`}>{'Monto'}</h4>

          <div
            className={`${Style.content} ${Style.tableBlue} ${Style.contentCol}`}
          >
            <div>$ {transactionCardProps.amount.toLocaleString()}</div>

            {transactionCardProps.status === TransactionStatus.SUCCESS ? (
              <>
                <div className={`${Style.deductionLabel} ${Style.tableGray}`}>
                  {'Deducción Bold'}
                </div>

                <div className={`${Style.deductionAmount} ${Style.tableRed}`}>
                  - $ {transactionCardProps.deduction?.toLocaleString()}
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>

        <button
          aria-label='Ver'
          className={Style.btn}
          onClick={() => setShowMore(!showMore)}
        >
          {!showMore ? 'Ver mas' : 'Ver menos'}
        </button>
      </article>
    </>
  );
};

export default TransactionCard;
