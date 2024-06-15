import Image from 'next/image';
import Style from './logo.module.scss';
import Link from 'next/link';

const Logo = () => {
  return (
    <>
      <Link href={'/'} aria-label='Ir a Bold'>
        <Image
          width={180}
          height={64}
          alt='Bold'
          src={'/images/logo-bold-white.svg'}
          className={Style.logo}
        />
      </Link>
    </>
  );
};

export default Logo;
