import Image from 'next/image';
import Style from './logo.module.scss';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const Logo = () => {
  const t = useTranslations();

  return (
    <>
      <Link href={'/'} aria-label={t('bold')}>
        <Image
          width={180}
          height={64}
          alt={t('bold')}
          src={'/images/logo-bold-white.svg'}
          className={Style.logo}
        />
      </Link>
    </>
  );
};

export default Logo;
