'use client';

import { TransactionData } from '@/models/transactionData.interface';
import Style from './dateSelector.module.scss';
import useDateSelector from './hooks/useDateSelector';

type DateSelectorProps = TransactionData;

const DateSelector = (dateSelectorProps: DateSelectorProps) => {
  const { options, dateFilter, filterByDate } =
    useDateSelector(dateSelectorProps);

  return (
    <>
      <div className={Style.dateSelector}>
        {options.map(({ label, value }) => (
          <button
            aria-label={label ?? value}
            key={value}
            className={`${Style.btn} ${
              value === dateFilter ? Style.active : ''
            }`}
            onClick={() => filterByDate(value)}
          >
            {label ?? value}
          </button>
        ))}
      </div>
    </>
  );
};

export default DateSelector;
