'use client';

import usePaymentMethodSelector from './hooks/usePaymentMethodSelector';
import PaymentMethodOption from './payment-method-option/PaymentMethodOption';
import Style from './paymentMethodSelector.module.scss';
import { TransactionData } from '@/models/transactionData.interface';
import { FaSliders, FaX } from 'react-icons/fa6';

type PaymentProps = TransactionData;

const PaymentMethodSelector = (paymentProps: PaymentProps) => {
  const { showList, options, optionAll, toggleList, filter } =
    usePaymentMethodSelector();

  return (
    <>
      <div className={Style.paymentMethodSelector}>
        <button
          aria-label='Filtrar'
          className={Style.headerBtn}
          onClick={() => toggleList()}
          onKeyUp={() => toggleList()}
        >
          <span className={Style.title}>{'Filtrar'}</span>

          <div className={Style.iconWrapper}>
            <FaSliders
              className={`${Style.icon} ${Style.rotate} ${
                !showList ? Style.activeRotate : ''
              }`}
            />
            <FaX className={`${Style.icon} ${showList ? Style.active : ''}`} />
          </div>
        </button>

        <ul className={`${Style.list} ${showList ? Style.listActive : ''}`}>
          {options.map((option) => (
            <li className={Style.option} key={option}>
              <PaymentMethodOption option={option} checked={true} />
            </li>
          ))}

          <li className={Style.option}>
            <PaymentMethodOption option={optionAll} checked={false} />
          </li>

          <li className={Style.option}>
            <button
              className={Style.btn}
              aria-label='Aplicar'
              disabled={true}
              onClick={() => filter()}
              onKeyUp={() => filter()}
            >
              {'Aplicar'}
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PaymentMethodSelector;
