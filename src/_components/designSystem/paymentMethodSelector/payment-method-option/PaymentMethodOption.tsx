import { Selecteds } from '../hooks/usePaymentMethodSelector';
import Style from './paymentMethodOption.module.scss';
import { Dispatch, SetStateAction } from 'react';

export type PaymentMethodOptionProps = {
  option: string;
  checked: boolean;
  translations: { [key: string]: string };
  selecteds: { [key: string]: boolean };
  setSelecteds: Dispatch<SetStateAction<Selecteds>>;
};

const PaymentMethodOption = ({
  option,
  checked,
  translations,
  selecteds,
  setSelecteds,
}: PaymentMethodOptionProps) => {
  const updateSelecteds = () => {
    setSelecteds({
      ...selecteds,
      [option]: !selecteds[option] ?? false,
    });
  };

  return (
    <>
      <button
        className={Style.btn}
        onClick={() => updateSelecteds()}
        onKeyDown={({ key }) => {
          if (key === 'Enter') updateSelecteds();
        }}
      >
        <i
          className={`${Style.paymentMethodOption} ${
            checked ? Style.active : ''
          }`}
        />

        <span className={Style.text}>{translations[option?.toString()]}</span>
      </button>
    </>
  );
};

export default PaymentMethodOption;
