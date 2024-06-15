'use client';

import { FaMoon, FaSun } from 'react-icons/fa6';
import Style from './menuTheme.module.scss';
import { Theme } from '@/models/theme.enum';
import useMenuTheme from './hooks/useMenuTheme';

const MenuTheme = () => {
  const { theme, updateTheme } = useMenuTheme();

  return (
    <>
      <button className={Style.menuTheme} aria-label='Cambiar tema'>
        <FaSun
          className={`${Style.iconLight} ${
            theme === Theme.DARK ? Style.active : ''
          }`}
          onClick={() => updateTheme()}
          onKeyUp={() => updateTheme()}
        />

        <FaMoon
          className={`${Style.iconDark}  ${
            theme === Theme.LIGHT ? Style.active : ''
          }`}
          onClick={() => updateTheme()}
          onKeyUp={() => updateTheme()}
        />
      </button>
    </>
  );
};

export default MenuTheme;
