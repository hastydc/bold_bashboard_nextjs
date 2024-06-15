import { DateFilter } from '@/_models/dateFilter.enum';
import { PaymentMethod } from '@/_models/paymentMethod.enum';
import { TableDataContext } from '@/_providers/tableData.provider';
import { useContext } from 'react';

const _visa = new RegExp('^4[0-9]{12}(?:[0-9]{3})?$');

const _mastercard = new RegExp('^5[1-5][0-9]{14}$');

const _fileName: { [key: string]: string } = {
  [PaymentMethod.DATAPHONE]: 'icon-dataphone',
  [PaymentMethod.LINK]: 'icon-chain',
};

const useTable = (translations: { [key: string]: string }) => {
  const tableData = useContext(TableDataContext);
  const month =
    tableData.dateFilter === DateFilter.MONTH
      ? translations[tableData.monthName!]
      : '';
  const title = `${translations.yourSalesOf} ${month} ${
    translations[tableData.dateFilter] ?? ''
  }`;

  return { title, tableData };
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

  const getPaymentMethodIcon = (value: string): string => {
    return `/icons/${_fileName[value]}.svg`;
  };

  const formatDate = (value: number | string): string => {
    const date = new Date(value);
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  };

  return {
    formatCardNumber,
    getCreditCardIcon,
    getPaymentMethodIcon,
    formatDate,
  };
};

export default useTable;
