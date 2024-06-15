'use client';

import { createContext, useState } from 'react';

export const LayoutContext = createContext({
  showMenu: false,
  setShowMenu: (value: any) => value,

  transactions: [],
  setTransactions: (value: any) => value,
});

type LayoutProviderProps = {
  children: React.ReactNode;
};

const LayoutProvider = ({ children }: LayoutProviderProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const [transactions, setTransactions] = useState([]);

  const value = {
    showMenu,
    setShowMenu,
    transactions,
    setTransactions,
  };

  return (
    <>
      <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
    </>
  );
};

export default LayoutProvider;
