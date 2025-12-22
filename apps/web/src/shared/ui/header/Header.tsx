import Image from 'next/image';
import Link from 'next/link';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.link} href="/">
        <Image alt="logo" height={30} src="/icons/light/Logo.svg" width={46} />
      </Link>
    </header>
  );
};

export default Header;
