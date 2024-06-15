import { MenuItem } from '@/_models/menuItem.interface';
import Style from './menuDesktop.module.scss';
import Link from 'next/link';
import Tooltip from '@/_components/designSystem/tooltip/Tooltip';

type MenuDesktopProps = {
  menuItems: MenuItem[];
};

const MenuDesktop = ({ menuItems }: MenuDesktopProps) => {
  return (
    <>
      <nav className={Style.menuDesktop}>
        {menuItems.map(({ link, label, info }, index) => (
          <Link
            href={link}
            key={`nul-${index}`}
            aria-label={label}
            className={Style.link}
          >
            <span className={Style.label}>{label}</span>

            {info ? <Tooltip label={label} icon={info} /> : <></>}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default MenuDesktop;
