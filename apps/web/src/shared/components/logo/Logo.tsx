import clsx from 'clsx';
import { FC } from 'react';

import { NavigationMap } from '@/shared/dictionaries/constants/navigation';
import { NavHome } from '@/shared/dictionaries/types/navigationTypes';
import formatHref from '@/shared/helpers/formatHref';
import { Locale } from '@/shared/i18n/i18n-config';
import ButtonLink from '@/shared/ui/button/ButtonLink';
import LogoIcon from '@/shared/ui/icon/icons/LogoIcon';

import styles from './Logo.module.scss';

type LogoProps = {
  className?: string;
  homeNavDictItem: NavHome;
  lang: Locale;
};

const Logo: FC<LogoProps> = ({ className, homeNavDictItem, lang }) => {
  const homeNavItem = NavigationMap.Home;
  const href = formatHref({ href: homeNavItem.href, lang });

  return (
    <ButtonLink
      aria-label={homeNavDictItem.label}
      className={clsx(styles.logo, className)}
      href={href}
      variant="ghost"
    >
      <LogoIcon
        options={{
          elementsColor: {
            primaryColor: 'var(--icon-primary)',
          },
        }}
      />
    </ButtonLink>
  );
};

export default Logo;
