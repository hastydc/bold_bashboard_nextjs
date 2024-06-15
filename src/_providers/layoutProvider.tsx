'use client';

import { createContext, useState } from 'react';

export const LayoutContext = createContext({
  showMenu: false,
  setShowMenu: (value: any) => value,
});

type LayoutPropviderProps = {
  children: React.ReactNode;
};

const LayoutProvider = ({ children }: LayoutPropviderProps) => {
  const [showMenu, setShowMenu] = useState(false);

  const value = {
    showMenu,
    setShowMenu,
  };

  return (
    <>
      <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
    </>
  );
};

export default LayoutProvider;
