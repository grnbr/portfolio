import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

import styles from './Icon.module.scss';
import { IconProps } from './iconTypes';

const Icon: FC<PropsWithChildren<IconProps>> = ({
  children,
  className,
  options,
}) => {
  const { opacity = 'faded' } = options ?? {};

  const classNames = clsx(styles.icon, className, styles[opacity]);

  return <span className={classNames}>{children}</span>;
};

export default Icon;
