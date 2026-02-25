'use client';

import clsx from 'clsx';
import { LayoutGroup, motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

import { Dictionary } from '@/shared/dictionaries/types';
import formatHref from '@/shared/helpers/formatHref';
import { Locale } from '@/shared/i18n/i18n-config';
import Icon from '@/shared/ui/icon/Icon';
import { NAV_TAPBAR_ICONS } from '@/shared/widgets/tapbar/ui/icons';

import styles from './Tapbar.module.scss';

type TapbarProps = {
  dict: Dictionary;
  lang: Locale;
};

const Tapbar: FC<TapbarProps> = ({ dict, lang }) => {
  const navigation = dict.layout.generic.navigation;

  const pathname = usePathname();
  const pathnameWithoutLang = '/' + pathname.split('/').slice(2).join();

  return (
    <nav className={styles.tapbar}>
      <LayoutGroup>
        {navigation.primary.items.map((item, i) => {
          const { href = '', label } = item;

          const TapbarIcon = NAV_TAPBAR_ICONS[item.id];

          const isActive = pathnameWithoutLang === href;

          if (!href && !label) return null;

          const formattedHref = formatHref({ href, lang });

          return (
            <Link
              className={clsx(styles.iconContainer, isActive && styles.active)}
              href={formattedHref}
              key={i}
            >
              {isActive && (
                <motion.span
                  className={styles.activeBg}
                  layoutId="tab-indicator"
                  transition={{
                    damping: 35,
                    stiffness: 500,
                    type: 'spring',
                  }}
                />
              )}

              <Icon
                className={styles.icon}
                options={{
                  elementsColor: {
                    primaryColor: 'var(--tapbar-icon-active)',
                    secondaryColor: 'var(--tapbar-icon-inactive)',
                  },
                  variant: isActive ? 'fill' : 'outlined',
                }}
              >
                <TapbarIcon />
              </Icon>
            </Link>
          );
        })}
      </LayoutGroup>
    </nav>
  );
};

export default Tapbar;
