import clsx from 'clsx';
import React, { FC, PropsWithChildren } from 'react';

import styles from './Icon.module.scss';

export type IconProps = {
  className?: string;
  options?: {
    elementsColor?: {
      primaryColor?: string;
      secondaryColor?: string;
    };
    height?: string;
    opacity?: 'faded';
    size?: string;
    variant?: 'fill' | 'outlined';
    width?: string;
  };
};

const Icon: FC<PropsWithChildren<IconProps>> = ({
  children,
  className,
  options,
}) => {
  const { elementsColor, opacity = 'faded' } = options ?? {};

  const classNames = clsx(styles.icon, className, styles[opacity]);
  const defaultOptions: IconProps['options'] = {
    ...options,
    elementsColor: elementsColor
      ? elementsColor
      : {
        primaryColor: 'var(--icon-primary)',
      },
  };

  const childWithProps = React.isValidElement<IconProps>(children)
    ? React.cloneElement(children, {
      options: defaultOptions,
    })
    : children;

  return <span className={classNames}>{childWithProps}</span>;
};

export default Icon;
