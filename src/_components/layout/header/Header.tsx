import Logo from '@/_components/designSystem/logo/Logo';
import Style from './header.module.scss';
import MenuTheme from './menu-theme/MenuTheme';
import MenuIcon from './menu-mobile-icon/MenuIcon';
import MenuDesktop from './menu-desktop/MenuDesktop';
import MenuMobile from './menu-mobile/MenuMobile';
import { MenuItem } from '@/_models/menuItem.interface';
import { useTranslations } from 'next-intl';

const Header = () => {
  const t = useTranslations();

  const menuItems: MenuItem[] = [
    { link: '/', label: t('myBusiness') },
    { link: '/', label: t('help'), info: '?' },
  ];

  return (
    <>
      <header className={Style.header}>
        <div>
          <Logo />
        </div>

        <div className={Style.menu}>
          <div className={Style.menuTheme}>
            <MenuTheme btnLabel={t('switchTheme')} />
          </div>

          <div className={Style.menuIcon}>
            <MenuIcon btnLabel={t('showOrHideMenu')} />
          </div>

          <div className={Style.menuDesktop}>
            <MenuDesktop menuItems={menuItems} />
          </div>

          <div className={Style.menuThemeDesktop}>
            <MenuTheme btnLabel={t('switchTheme')} />
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
