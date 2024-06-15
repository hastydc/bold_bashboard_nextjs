'use client';

import { Transaction } from '@/_models/transaction.interface';
import { LayoutContext } from '@/_providers/layout.provider';
import { useContext, useEffect } from 'react';

const useDashboard = (transactions: Transaction[]) => {
  const { setTransactions } = useContext(LayoutContext);

  useEffect(() => {
    setTransactions(transactions);
  }, [setTransactions]);
};

export default useDashboard;
