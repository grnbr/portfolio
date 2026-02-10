import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';
import { AnchorHTMLAttributes, FC, PropsWithChildren } from 'react';

import { ButtonCommonProps } from '@/shared/ui/button/types';

import styles from './Button.module.scss';

export type ButtonLinkProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & ButtonCommonProps & LinkProps
>;

const ButtonLink: FC<ButtonLinkProps> = ({
  children,
  className,
  href,
  type = 'button',
  variant = 'ghost',
  ...props
}) => {
  const classNames = clsx(styles.button, styles[variant], className);

  return (
    <Link className={classNames} href={href} type={type} {...props}>
      {children}
    </Link>
  );
};

export default ButtonLink;
