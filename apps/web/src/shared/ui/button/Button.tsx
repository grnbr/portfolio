import clsx from 'clsx';
import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

import { ButtonCommonProps } from '@/shared/ui/button/types';

import styles from './Button.module.scss';

export type ButtonProps = ButtonCommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    ref?: React.Ref<HTMLButtonElement | null>;
  };

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  ref,
  type = 'button',
  variant = 'ghost',
  ...props
}) => {
  const classNames = clsx(styles.button, styles[variant], className);

  return (
    <button className={classNames} ref={ref} type={type} {...props}>
      {children}
    </button>
  );
};

export default Button;
