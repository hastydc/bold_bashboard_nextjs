import { TableData } from '@/_models/tableData.interface';
import { TransactionAction } from '@/_models/transactionAction.enum';
import { TransactionDate } from '@/_models/transactionDate.enum';
import {
  TableDataContext,
  TableDataDispatchContext,
} from '@/_providers/tableData.provider';

import { useContext, useEffect, useState } from 'react';

const useDateSelector = (
  { monthName = '', dateFilter: baseDateFilter }: TableData,
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
  const state = useContext(TableDataContext);
  const dispatch = useContext(TableDataDispatchContext);

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
