import { TableData } from '@/_models/tableData.interface';
import { TableAction } from '@/_models/tableAction.enum';
import { Transaction } from '@/_models/transaction.interface';
import { currentDate, transactionData } from '@/_mock/data';
import { DateFilter } from '@/_models/dateFilter.enum';
import { TableKey } from '@/_models/tableKey.enum';
import { useContext, useEffect } from 'react';
import { LayoutContext } from '@/_providers/layout.provider';

export type TableDataReducerProps = {
  action: TableAction;
  payload: Partial<TableData>;
};

const _filter = (sourceTableData: TableData): TableData => {
  const response = sourceTableData;

  response.transactions = _getByDate(response);
  response.transactions = _getByPaymentMethod(response);
  response.totalSales = _getTotalSales(response);

  _setPersistence(response);

  return response;
};

const _getByDate = (tableData: TableData): Transaction[] => {
  let response = [];

  switch (tableData.dateFilter) {
    case DateFilter.TODAY:
      response = _filterByToday(tableData);
      break;

    case DateFilter.WEEK:
      response = _filterByWeek(tableData);
      break;

    case DateFilter.MONTH:
      response = _filterByMonth(tableData);
      break;
  }

  return response;
};

const _filterByToday = ({ transactions }: TableData): Transaction[] => {
  const response = transactions.filter(({ createdAt }: Transaction) => {
    const base = new Date(createdAt);
    const current = new Date(currentDate);

    return base.getDate() === current.getDate();
  });

  return response;
};

const _filterByWeek = ({ transactions }: TableData): Transaction[] => {
  const response = transactions.filter(({ createdAt }: Transaction) => {
    const base = new Date(createdAt);
    const current = new Date(currentDate);
    const minDay = current.getDate() + 1 - current.getDay();
    const maxDay = minDay + 6;

    return base.getDate() <= maxDay && base.getDate() >= minDay;
  });

  return response;
};

const _filterByMonth = ({ transactions }: TableData): Transaction[] => {
  const response = transactions.filter(({ createdAt }: Transaction) => {
    const base = new Date(createdAt);
    const current = new Date(currentDate);

    return base.getMonth() === current.getMonth();
  });

  return response;
};

const _getByPaymentMethod = (tableData: TableData): Transaction[] => {
  const { transactions, paymentMethods = [] } = tableData;

  const response = transactions.filter(({ paymentMethod }: Transaction) =>
    paymentMethods.includes(paymentMethod)
  );

  return response;
};

const _getTotalSales = (tableData: TableData): number => {
  const response = tableData.transactions.reduce(
    (accumulator, current) => accumulator + current.amount,
    0
  );

  return response;
};

const _setPersistence = ({
  dateFilter,
  monthName,
  paymentMethods,
}: TableData) => {
  localStorage.setItem(TableKey.DATE, dateFilter);
  localStorage.setItem(TableKey.MONTH, `${monthName}`);
  localStorage.setItem(
    TableKey.PAYMENT_METHODS,
    JSON.stringify(paymentMethods)
  );
};

const tableDataReducer = (
  state: TableData,
  {
    action,
    payload: { dateFilter, paymentMethods, transactions = [] },
  }: TableDataReducerProps
) => {
  let response = { ...state, transactions };

  if ([TableAction.CHANGE_DATE, TableAction.RESTORE_FILTERS].includes(action)) {
    response = { ...response, dateFilter: dateFilter! };
  }

  if (
    [TableAction.CHANGE_PAYMENT_TYPE, TableAction.RESTORE_FILTERS].includes(
      action
    )
  ) {
    response = { ...response, paymentMethods: paymentMethods };
  }

  response = _filter(response);

  return response;
};

export default tableDataReducer;
