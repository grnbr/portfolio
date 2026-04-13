'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { FC, JSX } from 'react';

import { NavigationMap } from '@/shared/dictionaries/constants/navigation';
import { Dictionary } from '@/shared/dictionaries/types';
import formatHref from '@/shared/helpers/formatHref';
import { Locale } from '@/shared/i18n/i18n-config';
import ButtonLink from '@/shared/ui/button/ButtonLink';

import styles from '../Header.module.scss';

type NavLinksProps = { dict: Dictionary; lang: Locale; logo: JSX.Element };

const Navigation: FC<NavLinksProps> = ({ dict, lang, logo }) => {
  const pathname = usePathname();
  const dictNavItems = dict.layout.generic.navigation.primary.items;
  const navItems = dictNavItems.filter(
    (item) => item.id !== NavigationMap.Home.id,
  );

  return (
    <nav className={clsx(styles.navLeft)}>
      {logo}

      <ul className={styles.list}>
        {navItems.map((item, i) => {
          const formattedHref = formatHref({ href: item.href, lang });

          const isActive = formattedHref === pathname;

          return (
            <li className={clsx(styles.item)} key={i}>
              <ButtonLink
                aria-current={isActive ? 'page' : undefined}
                aria-label={item.label}
                className={clsx(styles.link)}
                href={formattedHref}
                key={i}
                variant="ghost"
              >
                <span className={clsx(styles.label, isActive && styles.active)}>
                  {item.label}
                </span>
              </ButtonLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
