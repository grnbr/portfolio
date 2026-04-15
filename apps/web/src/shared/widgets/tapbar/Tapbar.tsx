'use client';

import clsx from 'clsx';
import { motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, useEffect } from 'react';

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

  const activeIndex = navigation.primary.items.findIndex(
    (item) => item.href === pathnameWithoutLang,
  );

  const navigationLength = navigation.primary.items.length;

  useEffect(() => {}, []);

  return (
    <nav className={styles.tapbar}>
      {navigation.primary.items.map((item, i) => {
        const { href = '', label } = item;

        const TapbarIcon = NAV_TAPBAR_ICONS[item.id];

        const isActive = pathnameWithoutLang === href;

        if (!href && !label) return null;

        const formattedHref = formatHref({ href, lang });

        return (
          <Link
            aria-current={isActive ? 'page' : undefined}
            aria-label={`Go to ${TapbarIcon.name} page`}
            className={clsx(styles.iconContainer, isActive && styles.active)}
            href={formattedHref}
            key={i}
          >
            <Icon className={styles.icon}>
              <TapbarIcon
                options={{
                  elementsColor: {
                    primaryColor: isActive && 'var(--tapbar-icon-active)',
                    secondaryColor: isActive && 'var(--tapbar-icon-inactive)',
                  },
                  variant: isActive ? 'fill' : 'outlined',
                }}
              />
            </Icon>
          </Link>
        );
      })}

      <div className={styles.bg}>
        <motion.span
          animate={{ x: `calc(${activeIndex} * 100%)` }}
          className={styles.activeBg}
          initial={{ x: `calc(${activeIndex} * 100%)` }}
          style={{ width: `calc(100% / ${navigationLength})` }}
          transition={{
            damping: 35,
            delay: 0.2,
            stiffness: 500,
            type: 'spring',
          }}
        />
      </div>
    </nav>
  );
};

export default Tapbar;
