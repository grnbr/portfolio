import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

import styles from './Icon.module.scss';

export type IconProps = {
  className?: string;
  options?: {
    elementsColor?: {
      primaryColor?: string;
      secondaryColor?: string;
    };
    height?: string;
    size?: string;
    variant?: 'fill' | 'outlined';
    width?: string;
  };
};

const Icon: FC<PropsWithChildren<IconProps>> = ({ children, className }) => {
  const classNames = clsx(styles.icon, className);

  return <span className={classNames}>{children}</span>;
};

export default Icon;
