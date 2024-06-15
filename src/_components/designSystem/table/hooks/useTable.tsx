import { getLabels } from '@/mock/data';
import { PaymentMethod } from '@/models/paymentMethod.enum';
import { TransactionData } from '@/models/transactionData.interface';

const _visa = new RegExp('^4[0-9]{12}(?:[0-9]{3})?$');

const _mastercard = new RegExp('^5[1-5][0-9]{14}$');

const _fileName: { [key: string]: string } = {
  [PaymentMethod.DATAPHONE]: 'icon-dataphone',
  [PaymentMethod.LINK]: 'icon-chain',
};

const useTable = ({ dateFilter, monthName, transactions }: TransactionData) => {
  const title = `Tus ventas de ${getLabels(monthName)[dateFilter]}`;

  return { title, transactions };
};

export const useTablePipes = () => {
  const formatCardNumber = (cardNumber: string = ''): string => {
    const lastDigits = cardNumber.toString().slice(-4);

    return `**** **** **** ${lastDigits}`;
  };

  const getCreditCardIcon = (cardNumber: string = ''): string => {
    const url = `/icons`;

    if (_visa.test(cardNumber)) {
      return `${url}/icon-visa.svg`;
    }

    if (_mastercard.test(cardNumber)) {
      return `${url}/icon-mastercard.svg`;
    }

    return `${url}/icon-credit-card.svg`;
  };

  const getPaymentMethodIcon = (value: string) => {
    return `/icons/${_fileName[value]}.svg`;
  };

  return { formatCardNumber, getCreditCardIcon, getPaymentMethodIcon };
};

export default useTable;
