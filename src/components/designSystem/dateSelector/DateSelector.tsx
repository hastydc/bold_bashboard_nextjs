'use client';

import { Transaction } from '@/models/transaction.interface';
import Style from './dateSelector.module.scss';
import useDateSelector from './hooks/useDateSelector';

type DateSelectorProps = {
  translations: { [key: string]: string };
  transactions: Transaction[];
};

const DateSelector = ({ translations, transactions }: DateSelectorProps) => {
  const { options, dateFilter, filterByDate } = useDateSelector(
    translations,
    transactions
  );

  return (
    <>
      <div className={Style.dateSelector}>
        {options.map(({ label, value }) => (
          <button
            aria-label={label}
            key={value}
            className={`${Style.btn} ${
              value === dateFilter ? Style.active : ''
            }`}
            onClick={() => filterByDate(value)}
            onKeyDown={({ key }) => {
              if (key === 'Enter') filterByDate(value);
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </>
  );
};

export default DateSelector;
