'use client';

import { FaBars, FaX } from 'react-icons/fa6';
import Style from './menuIcon.module.scss';
import useMenuIcon from './hooks/useMenuIcon';

const MenuIcon = () => {
  const { showMenu, toggleMenu } = useMenuIcon();

  return (
    <>
      <button
        className={Style.menuIcon}
        aria-label='Mostrar u ocultar menu'
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
