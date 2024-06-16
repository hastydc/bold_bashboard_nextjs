import { TableAction } from '@/models/tableAction.enum';
import { DateFilter } from '@/models/dateFilter.enum';
import {
  TableDataContext,
  TableDataDispatchContext,
} from '@/providers/tableData.provider';

import { useContext, useEffect, useState } from 'react';
import { Transaction } from '@/models/transaction.interface';

const useDateSelector = (
  translations: { [key: string]: string },
  transactions: Transaction[]
) => {
  const tableData = useContext(TableDataContext);

  const options = [
    {
      label: translations[DateFilter.TODAY],
      value: DateFilter.TODAY,
    },
    {
      label: translations[DateFilter.WEEK],
      value: DateFilter.WEEK,
    },
    {
      label: translations[tableData.monthName ?? ''],
      value: DateFilter.MONTH,
    },
  ];

  const [dateFilter, setDateFilter] = useState(tableData.dateFilter);
  const tableDataState = useContext(TableDataContext);
  const tableDataDispatch = useContext(TableDataDispatchContext);

  const filterByDate = (dateFilter: DateFilter) => {
    tableDataDispatch({
      action: TableAction.CHANGE_DATE,
      payload: { dateFilter, transactions },
    });
  };

  useEffect(() => {
    setDateFilter(tableDataState.dateFilter);
  }, [tableDataState]);

  return { options, dateFilter, filterByDate };
};

export default useDateSelector;
