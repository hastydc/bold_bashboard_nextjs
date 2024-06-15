'use client';

import { ThemeProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';
import { useEffect, useState } from 'react';

const MainThemeProvider = ({ children }: ThemeProviderProps) => {
  const [ready, setReady] = useState(false);

  useEffect(() => setReady(true), []);

  if (!ready) return <>{children}</>;

  return <ThemeProvider>{children}</ThemeProvider>;
};

export default MainThemeProvider;
