import { TableData } from '@/_models/tableData.interface';
import { TableAction } from '@/_models/tableAction.enum';
import { DateFilter } from '@/_models/dateFilter.enum';
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
      label: translations[DateFilter.TODAY],
      value: DateFilter.TODAY,
    },
    {
      label: translations[DateFilter.WEEK],
      value: DateFilter.WEEK,
    },
    {
      label: translations[monthName],
      value: DateFilter.MONTH,
    },
  ];

  const [dateFilter, setDateFilter] = useState(baseDateFilter);
  const state = useContext(TableDataContext);
  const tableDataDispatch = useContext(TableDataDispatchContext);

  const filterByDate = (dateFilter: DateFilter) => {
    tableDataDispatch({
      action: TableAction.CHANGE_DATE,
      payload: { dateFilter },
    });
  };

  useEffect(() => {
    setDateFilter(state.dateFilter);
  }, [state]);

  return { options, dateFilter, filterByDate };
};

export default useDateSelector;
