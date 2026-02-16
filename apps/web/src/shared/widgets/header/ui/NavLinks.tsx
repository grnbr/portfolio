'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

import formatHref from '@/shared/helpers/formatHref';
import { Locale } from '@/shared/i18n/i18n-config';
import { Navigation, NavItemIds } from '@/shared/types/navigation';
import ButtonLink from '@/shared/ui/button/ButtonLink';

import styles from '../Header.module.scss';

type NavLinksProps = { lang: Locale; navigation: Navigation };

// TODO Handle tablet view adding more button
const NavLinks: FC<NavLinksProps> = ({ lang, navigation }) => {
  const pathname = usePathname();

  return (
    <ul className={styles.list}>
      {navigation.primary.map((item, i) => {
        if (item.id === NavItemIds.Home || item.id === NavItemIds.More)
          return null;

        // TODO add new items like This UI KIT
        switch (item.type) {
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

          default: {
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
                  <span
                    className={clsx(styles.title, isActive && styles.active)}
                  >
                    {item.title}
                  </span>
                </ButtonLink>
              </li>
            );
            // return null;
          }
        }
      })}
    </ul>
  );
};

export default NavLinks;
