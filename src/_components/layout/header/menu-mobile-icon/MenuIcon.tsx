'use client';

import { FaBars, FaX } from 'react-icons/fa6';
import Style from './menuIcon.module.scss';
import useMenuIcon from './hooks/useMenuIcon';

type MenuIconProps = {
  btnLabel: string;
};

const MenuIcon = ({ btnLabel }: MenuIconProps) => {
  const { showMenu, toggleMenu } = useMenuIcon();

  return (
    <>
      <button
        className={Style.menuIcon}
        aria-label={btnLabel}
        onClick={() => toggleMenu()}
        onKeyUp={() => toggleMenu()}
      >
        <FaBars className={`${Style.icon} ${!showMenu ? Style.active : ''}`} />

        <FaX className={`${Style.icon} ${showMenu ? Style.active : ''}`} />
      </button>
    </>
  );
};

export default MenuIcon;
