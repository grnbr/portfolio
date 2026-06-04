import clsx from 'clsx';
import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

import { ButtonCommonProps } from '@/shared/ui/button/types';

import Loader from '../loader/Loader';
import styles from './Button.module.scss';

export type ButtonProps = ButtonCommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    isLoading?: boolean;
    ref?: React.Ref<HTMLButtonElement | null>;
  };

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  isLoading,
  ref,
  type = 'button',
  variant = 'ghost',
  ...props
}) => {
  const isLoadingTypeBtn = variant !== 'ghost' && isLoading;

  const classNames = clsx(
    styles.button,
    styles[variant],
    props.disabled && styles.disabled,
    isLoadingTypeBtn && styles.loading,
    className,
  );

  return (
    <button className={classNames} ref={ref} type={type} {...props}>
      {isLoadingTypeBtn ? (
        <div className={styles.loaderWrapper}>
          <Loader
            options={{ color: variant === 'primary' ? 'inverted' : 'default' }}
          />
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
