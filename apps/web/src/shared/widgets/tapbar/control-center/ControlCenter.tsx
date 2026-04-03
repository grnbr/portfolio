'use client';

import { AnimatePresence, motion } from 'motion/react';
import { FC, useRef } from 'react';

import LocaleSwitcher from '@/shared/components/LocaleSwitcher';
import { Dictionary } from '@/shared/dictionaries/types';
import useIsMounted from '@/shared/hooks/useIsMounted';
import { Locale } from '@/shared/i18n/i18n-config';
import Button from '@/shared/ui/button/Button';
import DropdownMenu from '@/shared/ui/containers/DropdownMenu';
import CogIcon from '@/shared/ui/icon/icons/CogIcon';

import styles from './ControlCenter.module.scss';
import { useControlCenterStore } from './model/store';
import ThemeSwitcher from './ui/ThemeSwitcher';

type ControlCenterProps = {
  dict: Dictionary;
  lang: Locale;
};

const MotionButton = motion.create(Button);

const ControlCenter: FC<ControlCenterProps> = ({ dict, lang }) => {
  const isMounted = useIsMounted();

  const { handleCloseMenu, handleToggleMenu, isMenuOpen } =
    useControlCenterStore();
  const buttonRef = useRef<HTMLButtonElement | null>(null);

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
          initial={isMenuOpen ? false : undefined}
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
              handleCloseMenu={handleCloseMenu}
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
