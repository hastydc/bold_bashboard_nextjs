import ThemeSwitcher from '@/_components/theme-switcher/ThemeSwitcher';
import Style from './page.module.scss';

const Home = () => {
  return (
    <>
      <div className={Style.home}>Homes</div>
      <ThemeSwitcher />
    </>
  );
};

export default Home;
