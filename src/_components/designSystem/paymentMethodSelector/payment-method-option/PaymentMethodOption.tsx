import { PaymentMethod } from '@/_models/paymentMethod.enum';
import Style from './paymentMethodOption.module.scss';

export type PaymentMethodOptionProps = {
  option: string;
  checked: boolean;
  translations: { [key: string]: string };
  setSelecteds: (option: string) => void;
};

const PaymentMethodOption = ({
  option,
  checked,
  translations,
  setSelecteds,
}: PaymentMethodOptionProps) => {
  return (
    <>
      <button
        className={Style.btn}
        onClick={() => setSelecteds(option)}
        onKeyDown={({ key }) => {
          if (key === 'Enter') setSelecteds(option);
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
