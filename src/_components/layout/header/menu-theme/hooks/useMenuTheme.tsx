import { Theme } from '@/models/theme.enum';
import { useTheme } from 'next-themes';

const useMenuTheme = () => {
  const { theme, setTheme } = useTheme();

  const updateTheme = () => {
    const value = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

    setTheme(value);
  };

  return { theme, updateTheme };
};

export default useMenuTheme;
