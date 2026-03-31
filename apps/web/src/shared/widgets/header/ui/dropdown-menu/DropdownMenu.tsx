'use client';

import clsx from 'clsx';
import { FC, PropsWithChildren, RefObject, useEffect, useRef } from 'react';

import styles from './DropdownMenu.module.scss';

type DropdownMenuProps = PropsWithChildren & {
  buttonRef: RefObject<HTMLButtonElement | null>;
  className?: string;
  handleCloseMenu: () => void;
};

const DropdownMenu: FC<DropdownMenuProps> = ({
  buttonRef,
  children,
  className,
  handleCloseMenu,
}) => {
  const menuRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        !buttonRef.current?.contains(e.target as Node)
      ) {
        handleCloseMenu();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleCloseMenu]);

  return (
    <ul className={clsx(styles.dropdownMenu, className)} ref={menuRef}>
      {children}
    </ul>
  );
};

export default DropdownMenu;
