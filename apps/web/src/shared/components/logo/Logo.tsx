import clsx from 'clsx';
import { FC } from 'react';

import { NavHome } from '@/shared/types/navigation';
import ButtonLink from '@/shared/ui/button/ButtonLink';
import LogoIcon from '@/shared/ui/icon/icons/LogoIcon';

import styles from './Logo.module.scss';

type LogoProps = {
  className?: string;
  home: NavHome;
};

const Logo: FC<LogoProps> = ({ className, home }) => {
  return (
    <ButtonLink
      aria-label={home.label}
      className={clsx(styles.logo, className)}
      href={home.href}
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
