'use client';

import { FaMoon, FaSun } from 'react-icons/fa6';
import Style from './menuTheme.module.scss';
import { Theme } from '@/models/theme.enum';
import useMenuTheme from './hooks/useMenuTheme';

type MenuThemeProps = {
  btnLabel: string;
};

const MenuTheme = ({ btnLabel }: MenuThemeProps) => {
  const { theme, updateTheme } = useMenuTheme();

  return (
    <>
      <button
        className={Style.menuTheme}
        aria-label={btnLabel}
        onClick={() => updateTheme()}
        onKeyDown={({ key }) => {
          if (key === 'Enter') updateTheme();
        }}
      >
        <FaSun
          className={`${Style.iconLight} ${
            theme === Theme.DARK ? Style.active : ''
          }`}
        />

        <FaMoon
          className={`${Style.iconDark}  ${
            theme === Theme.LIGHT ? Style.active : ''
          }`}
        />
      </button>
    </>
  );
};

export default MenuTheme;
