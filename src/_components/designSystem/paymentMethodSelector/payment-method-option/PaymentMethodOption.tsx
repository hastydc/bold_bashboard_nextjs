import { PaymentMethod } from '@/models/paymentMethod.enum';
import Style from './paymentMethodOption.module.scss';

export type PaymentMethodOptionProps = {
  option: string;
  checked: boolean;
};

const PaymentMethodOption = ({ option, checked }: PaymentMethodOptionProps) => {
  return (
    <>
      <i
        className={`${Style.paymentMethodOption} ${
          checked ? Style.active : ''
        }`}
      />

      <span className={Style.text}>{option?.toString()}</span>
    </>
  );
};

export default PaymentMethodOption;
