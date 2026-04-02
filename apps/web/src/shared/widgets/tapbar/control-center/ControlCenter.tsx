'use client';

import { AnimatePresence, motion } from 'motion/react';
import { FC, useRef, useState } from 'react';

import LocaleSwitcher from '@/shared/components/LocaleSwitcher';
import { Dictionary } from '@/shared/dictionaries/types';
import useIsMounted from '@/shared/hooks/useIsMounted';
import { Locale } from '@/shared/i18n/i18n-config';
import Button from '@/shared/ui/button/Button';
import DropdownMenu from '@/shared/ui/containers/DropdownMenu';
import CogIcon from '@/shared/ui/icon/icons/CogIcon';

import styles from './ControlCenter.module.scss';
import ThemeSwitcher from './ui/ThemeSwitcher';

type ControlCenterProps = {
  dict: Dictionary;
  lang: Locale;
};

const MotionButton = motion.create(Button);

const ControlCenter: FC<ControlCenterProps> = ({ dict, lang }) => {
  const isMounted = useIsMounted();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const onCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.controlCenter}>
      <MotionButton
        className={styles.openMenuBtn}
        onClick={handleToggleMenu}
        ref={buttonRef}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ rotate: isMenuOpen ? 240 : 0 }}
          className={styles.iconWrapper}
          transition={{
            damping: 25,
            stiffness: 250,
            type: 'spring',
          }}
        >
          <CogIcon />
        </motion.div>
      </MotionButton>

      {isMounted && (
        <AnimatePresence initial={false}>
          {isMenuOpen && (
            <DropdownMenu
              buttonRef={buttonRef}
              className={styles.themeMenuContainer}
              handleCloseMenu={onCloseMenu}
              variant="controlCenter"
            >
              <ThemeSwitcher dict={dict} />
              <LocaleSwitcher currentLang={lang} />
            </DropdownMenu>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default ControlCenter;
