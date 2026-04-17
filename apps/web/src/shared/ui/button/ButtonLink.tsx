import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';
import { AnchorHTMLAttributes, FC, PropsWithChildren } from 'react';

import { ButtonCommonProps } from '@/shared/ui/button/types';

import styles from './Button.module.scss';

type BaseProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & ButtonCommonProps
>;

type InternalLinkProps = BaseProps &
  LinkProps & {
    as?: 'link';
  };

type ExternalLinkProps = BaseProps & {
  as: 'a';
  href: string;
};

export type ButtonLinkProps = ExternalLinkProps | InternalLinkProps;

const ButtonLink: FC<ButtonLinkProps> = ({
  as = 'link',
  children,
  className,
  href,
  variant = 'ghost',
  ...props
}) => {
  const classNames = clsx(styles.button, styles[variant], className);

  if (as === 'a') {
    return (
      <a className={classNames} href={href as string} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link className={classNames} href={href} {...props}>
      {children}
    </Link>
  );
};

export default ButtonLink;
