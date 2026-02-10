'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { i18n, Locale } from '@/shared/i18n/i18n-config';

import styles from '../Header.module.scss';

const LocaleSwitcher = ({ currentLang }: { currentLang: Locale }) => {
  const pathname = usePathname();
  const redirectedPathName = (locale: Locale) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <ul className={styles.localeSwitcher}>
      {i18n.locales.map((locale) => {
        const isActive = currentLang === locale;

        return (
          <li key={locale}>
            <Link
              className={clsx(styles.language, isActive && styles.active)}
              href={redirectedPathName(locale)}
            >
              {locale}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default LocaleSwitcher;
