'use client';

import { DateFilter } from '@/_models/dateFilter.enum';
import { PaymentMethod } from '@/_models/paymentMethod.enum';
import { TableData } from '@/_models/tableData.interface';
import { TableKey } from '@/_models/tableKey.enum';
import { Transaction } from '@/_models/transaction.interface';
import { useEffect, useState } from 'react';

const useDashboard = (transactions: Transaction[]) => {
  const [tableData, setTableData] = useState<Partial<TableData>>({});
  const [mounted, setMounted] = useState(false);

  const restoreTableData = () => {
    const params: Partial<TableData> = {
      dateFilter: (localStorage.getItem(TableKey.DATE) ??
        DateFilter.TODAY) as DateFilter,
      paymentMethods: JSON.parse(
        localStorage.getItem(TableKey.PAYMENT_METHODS) ??
          `["${PaymentMethod.DATAPHONE}","${PaymentMethod.LINK}","${PaymentMethod.ALL}"]`
      ),
      transactions,
    };

    setTableData(params);
  };

  useEffect(() => {
    restoreTableData();
    setMounted(true);
  }, []);

  return { tableData, mounted };
};

export default useDashboard;
