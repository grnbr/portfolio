'use client';

import { HTMLMotionProps, motion, Transition, Variants } from 'motion/react';
import { FC, PropsWithChildren, RefObject, useEffect, useRef } from 'react';

type Variant = 'controlCenter' | 'header';

type DropdownMenuProps = PropsWithChildren<HTMLMotionProps<'div'>> & {
  buttonRef: RefObject<HTMLButtonElement | null>;
  handleCloseMenu: () => void;
  variant: Variant;
};

const variants: Record<Variant, Variants> = {
  controlCenter: {
    hidden: { opacity: 0, scale: 0.85, x: 8, y: 8 },
    visible: { opacity: 1, scale: 1, x: 0, y: 0 },
  },
  header: {
    hidden: { opacity: 0, scale: 0.85, y: -8 },
    visible: { opacity: 1, scale: 1, y: 0 },
  },
};

const dropdownTransition: Record<Variant, Transition> = {
  controlCenter: {
    damping: 25,
    mass: 0.8,
    stiffness: 400,
    type: 'spring',
  },
  header: {
    damping: 25,
    mass: 0.8,
    stiffness: 400,
    type: 'spring',
  },
};

const DropdownMenu: FC<DropdownMenuProps> = ({
  buttonRef,
  children,
  handleCloseMenu,
  variant,
  ...rest
}) => {
  const menuRef = useRef<HTMLDivElement | null>(null);

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
  }, [handleCloseMenu, buttonRef]);

  return (
    <motion.div
      animate="visible"
      exit="hidden"
      initial="hidden"
      key="menu"
      ref={menuRef}
      transition={dropdownTransition[variant]}
      variants={variants[variant]}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default DropdownMenu;
