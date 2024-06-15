'use client';

import Style from './dateSelector.module.scss';
import useDateSelector from './hooks/useDateSelector';
import { transactionData } from '@/_mock/data';

type DateSelectorProps = {
  translations: { [key: string]: string };
};

const DateSelector = ({ translations }: DateSelectorProps) => {
  const { options, dateFilter, filterByDate } = useDateSelector(
    transactionData,
    translations
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
