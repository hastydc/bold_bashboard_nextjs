'use client';

import usePaymentMethodSelector from './hooks/usePaymentMethodSelector';
import PaymentMethodOption from './payment-method-option/PaymentMethodOption';
import Style from './paymentMethodSelector.module.scss';
import { FaSliders, FaX } from 'react-icons/fa6';

type PaymentMethodProps = {
  translations: { [key: string]: string };
};

const PaymentMethodSelector = ({ translations }: PaymentMethodProps) => {
  const { showList, options, optionAll, toggleList, filter } =
    usePaymentMethodSelector();

  return (
    <>
      <div className={Style.paymentMethodSelector}>
        <button
          aria-label={translations.filter}
          className={Style.headerBtn}
          onClick={() => toggleList()}
          onKeyUp={() => toggleList()}
        >
          <span className={Style.title}>{translations.filter}</span>

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
              <PaymentMethodOption
                translations={translations}
                option={option}
                checked={true}
              />
            </li>
          ))}

          <li className={Style.option}>
            <PaymentMethodOption
              translations={translations}
              option={optionAll}
              checked={false}
            />
          </li>

          <li className={Style.option}>
            <button
              className={Style.btn}
              aria-label={translations.apply}
              disabled={true}
              onClick={() => filter()}
              onKeyUp={() => filter()}
            >
              {translations.apply}
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PaymentMethodSelector;
