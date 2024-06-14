import { Theme } from '@/models/theme.enum';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';

const useThemeSwitcher = () => {
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setTheme(Theme.LIGHT);
  }, []);

  const toggleTheme = () => {
    let value = resolvedTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

    setTheme(value);
  };

  return { resolvedTheme, toggleTheme };
};

export default useThemeSwitcher;
