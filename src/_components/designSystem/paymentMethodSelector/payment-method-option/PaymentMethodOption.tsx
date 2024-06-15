import { PaymentMethod } from '@/_models/paymentMethod.enum';
import Style from './paymentMethodOption.module.scss';

export type PaymentMethodOptionProps = {
  option: string;
  checked: boolean;
  translations: { [key: string]: string };
};

const PaymentMethodOption = ({
  option,
  checked,
  translations,
}: PaymentMethodOptionProps) => {
  return (
    <>
      <i
        className={`${Style.paymentMethodOption} ${
          checked ? Style.active : ''
        }`}
      />

      <span className={Style.text}>{translations[option?.toString()]}</span>
    </>
  );
};

export default PaymentMethodOption;
