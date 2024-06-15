import { TransactionAction } from '@/_models/transactionAction.enum';
import { TransactionData } from '@/_models/transactionData.interface';
import { TransactionDate } from '@/_models/transactionDate.enum';
import {
  TransactionDataContext,
  TransactionDataDispatchContext,
} from '@/_providers/transactionData.provider';
import { useContext, useEffect, useState } from 'react';

const useDateSelector = (
  { monthName = '', dateFilter: baseDateFilter }: TransactionData,
  translations: { [key: string]: string }
) => {
  const options = [
    {
      label: translations[TransactionDate.TODAY],
      value: TransactionDate.TODAY,
    },
    {
      label: translations[TransactionDate.WEEK],
      value: TransactionDate.WEEK,
    },
    {
      label: translations[monthName],
      value: TransactionDate.MONTH,
    },
  ];

  const [dateFilter, setDateFilter] = useState(baseDateFilter);
  const state = useContext(TransactionDataContext);
  const dispatch = useContext(TransactionDataDispatchContext);

  const filterByDate = (dateFilter: TransactionDate) => {
    dispatch({
      action: TransactionAction.CHANGE_DATE,
      payload: { dateFilter },
    });
  };

  useEffect(() => {
    setDateFilter(state.dateFilter);
  }, [state]);

  return { options, dateFilter, filterByDate };
};

export default useDateSelector;
