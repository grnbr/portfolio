import clsx from 'clsx';
import {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from 'react';

import styles from './Container.module.scss';

type ContainerProps<T extends ElementType> = ComponentPropsWithoutRef<T> &
  PropsWithChildren & {
    as?: T;
    className?: string;
  };

const Container = <T extends ElementType = 'div'>({
  as,
  children,
  className,
  ...props
}: ContainerProps<T>) => {
  const Component = as || 'div';

  return (
    <Component className={clsx(styles.container, className)} {...props}>
      {children}
    </Component>
  );
};

export default Container;
