import clsx from 'clsx';
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

import { ButtonCommonProps } from '@/shared/ui/button/types';

import styles from './Button.module.scss';

export type ButtonProps = ButtonCommonProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  type = 'button',
  variant = 'ghost',
  ...props
}) => {
  const classNames = clsx(styles.button, styles[variant], className);

  return (
    <button className={classNames} type={type} {...props}>
      {children}
    </button>
  );
};

export default Button;
