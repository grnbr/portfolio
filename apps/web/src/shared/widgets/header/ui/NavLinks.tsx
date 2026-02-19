'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

import { Navigation } from '@/shared/constants/navigation';
import formatHref from '@/shared/helpers/formatHref';
import { Locale } from '@/shared/i18n/i18n-config';
import { HeaderPrimaryNavigation } from '@/shared/types/navigation';
import ButtonLink from '@/shared/ui/button/ButtonLink';

import styles from '../Header.module.scss';

type NavLinksProps = { lang: Locale; navigation: HeaderPrimaryNavigation };

// TODO Handle tablet view adding more button
const NavLinks: FC<NavLinksProps> = ({ lang, navigation }) => {
  const pathname = usePathname();

  return (
    <ul className={styles.list}>
      {navigation.map((item, i) => {
        if (item.id === Navigation.Home.id) return null;

        // TODO add new items like This UI KIT
        // switch (item.type) {
        // case 'action': {
        //   return (
        //     <li className={styles.item} key={i}>
        //       <Button variant="ghost">
        //         <span className={styles.title}>{item.title}</span>
        //       </Button>
        //     </li>
        //   );
        // }

        // case 'link': {

        // }

        const formattedHref = formatHref({ href: item.href, lang });

        const isActive = formattedHref === pathname;

        return (
          <li className={styles.item} key={i}>
            <ButtonLink
              className={styles.link}
              href={formattedHref}
              key={i}
              variant="ghost"
            >
              <span className={clsx(styles.title, isActive && styles.active)}>
                {item.label}
              </span>
            </ButtonLink>
          </li>
        );
        // return null;
      })}
    </ul>
  );
};

export default NavLinks;
