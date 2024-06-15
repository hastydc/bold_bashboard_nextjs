'use client';

import { FaMoon, FaSun } from 'react-icons/fa6';
import Style from './menuTheme.module.scss';
import { Theme } from '@/models/theme.enum';
import { useTheme } from 'next-themes';

const MenuTheme = () => {
  const { theme, setTheme } = useTheme();

  const updateTheme = () => {
    const value = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

    setTheme(value);
  };

  return (
    <>
      <button className={Style.menuTheme} aria-label='Cambiar tema'>
        <FaSun
          className={`${Style.iconLight} ${
            theme === Theme.LIGHT ? Style.active : ''
          }`}
          onClick={() => updateTheme()}
          onKeyUp={() => updateTheme()}
        />

        <FaMoon
          className={`${Style.iconDark}  ${
            theme === Theme.DARK ? Style.active : ''
          }`}
          onClick={() => updateTheme()}
          onKeyUp={() => updateTheme()}
        />
      </button>
    </>
  );
};

export default MenuTheme;
