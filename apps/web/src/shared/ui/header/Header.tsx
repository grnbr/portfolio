import Image from 'next/image';
import Link from 'next/link';

import BgGradient from '@/shared/components/bg-bradient/BgGradient';
import Logo from '@/shared/ui/icons/Logo';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logoLink} href="/">
        <Logo className={styles.logo} />
      </Link>
    </header>
  );
};

export default Header;
