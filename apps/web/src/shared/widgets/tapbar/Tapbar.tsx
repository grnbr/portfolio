'use client';

import clsx from 'clsx';
import { LayoutGroup, motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

import { NavigationItem } from '@/shared/types/navigation';
import { NAV_ICONS, NavIconKey } from '@/shared/widgets/tapbar/ui/icons';

import styles from './Tapbar.module.scss';

type TapbarProps = {
  navigation: NavigationItem[];
};

const Tapbar: FC<TapbarProps> = ({ navigation }) => {
  const pathname = usePathname();
  const pathnameWithoutLang = pathname.split('/').slice(2).join();
  const formattedPathname = '/' + pathnameWithoutLang;

  return (
    <nav className={styles.tapbar}>
      <LayoutGroup>
        {navigation.map((item, i) => {
          const { href = '', title } = item;

          const Icon =
            item.icon && item.icon in NAV_ICONS
              ? NAV_ICONS[item.icon as NavIconKey]
              : undefined;

          const isActive = formattedPathname === href;

          if (!href || !title) return null;

          return (
            <Link
              className={clsx(styles.iconContainer, isActive && styles.active)}
              href={href}
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
                ></motion.span>
              )}

              {Icon ? (
                <Icon
                  options={{
                    elementsColor: {
                      primaryColor: 'var(--tapbar-icon-active)',
                      secondaryColor: 'var(--tapbar-icon-inactive)',
                    },
                    variant: isActive ? 'fill' : 'outlined',
                  }}
                />
              ) : (
                title
              )}
            </Link>
          );
        })}
      </LayoutGroup>
    </nav>
  );
};

export default Tapbar;
