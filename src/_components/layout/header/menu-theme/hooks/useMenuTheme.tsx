import { Theme } from '@/_models/theme.enum';
import { useTheme } from 'next-themes';
import { useEffect } from 'react';

const useMenuTheme = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const updateTheme = () => {
    const value = resolvedTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

    setTheme(value);
  };

  useEffect(() => {
    setTheme(Theme.LIGHT);
  }, []);

  return { resolvedTheme, updateTheme };
};

export default useMenuTheme;
