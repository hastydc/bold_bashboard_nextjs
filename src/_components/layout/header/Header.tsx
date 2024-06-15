import Logo from '@/_components/logo/Logo';
import Style from './header.module.scss';
import MenuTheme from './menu-theme/MenuTheme';
import MenuIcon from './menu-mobile-icon/MenuIcon';
import MenuDesktop from './menu-desktop/MenuDesktop';
import MenuMobile from './menu-mobile/MenuMobile';
import { MenuItem } from '@/models/menuItem.interface';

const Header = () => {
  const menuItems: MenuItem[] = [
    { link: '/', label: 'Mi negocio' },
    { link: '/', label: 'Ayuda', info: '?' },
  ];

  return (
    <>
      <header className={Style.header}>
        <div>
          <Logo />
        </div>

        <div className={Style.menu}>
          <div className={Style.menuTheme}>
            <MenuTheme />
          </div>

          <div className={Style.menuIcon}>
            <MenuIcon />
          </div>

          <div className={Style.menuDesktop}>
            <MenuDesktop menuItems={menuItems} />
          </div>

          <div className={Style.menuThemeDesktop}>
            <MenuTheme />
          </div>
        </div>
      </header>

      <div className={Style.menuMobile}>
        <MenuMobile menuItems={menuItems} />
      </div>
    </>
  );
};

export default Header;
