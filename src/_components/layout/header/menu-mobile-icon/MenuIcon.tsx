'use client';

import { useContext } from 'react';
import { FaBars, FaX } from 'react-icons/fa6';
import { LayoutContext } from '@/_providers/layoutProvider';
import Style from './menuIcon.module.scss';

const MenuIcon = () => {
  const { showMenu, setShowMenu } = useContext(LayoutContext);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

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
