'use client';

import { useContext } from 'react';
import Style from './menuMobile.module.scss';
import { LayoutContext } from '@/_providers/layout.provider';
import { MenuItem } from '@/_models/menuItem.interface';
import Link from 'next/link';

type MenuMobileProps = {
  menuItems: MenuItem[];
};

const MenuMobile = ({ menuItems = [] }: MenuMobileProps) => {
  const { showMenu } = useContext(LayoutContext);

  return (
    <>
      <nav className={`${Style.menuMobile} ${showMenu ? Style.active : ''}`}>
        <ul className={Style.list}>
          {menuItems.map(({ link, label }, index) => (
            <Link
              href={link}
              key={`nul-${index}`}
              aria-label={label}
              className={Style.link}
            >
              <li className={Style.item}>{label}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MenuMobile;
