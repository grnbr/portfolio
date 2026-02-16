'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import Themes, { Theme } from '@/shared/constants/theme';
import Button from '@/shared/ui/button/Button';
import Icon from '@/shared/ui/icon/Icon';
import MoonIcon from '@/shared/ui/icon/icons/Moon';
import SunIcon from '@/shared/ui/icon/icons/Sun';
import Loader from '@/shared/ui/loader/Loader';

import styles from '../Header.module.scss';

const iconVariants = {
  hidden: { opacity: 0, rotate: -90, scale: 0.5 },
  visible: { opacity: 1, rotate: 0, scale: 1 },
};

const ThemeSwitcher = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    const id = requestAnimationFrame(() => setIsMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const onChangeTheme = (theme: Theme) => {
    setTheme(theme);
  };

  const isDark = resolvedTheme === Themes.Dark;

  useEffect(() => {
    if (isMounted && resolvedTheme) {
      const timeout = setTimeout(() => setIsLoader(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isMounted, resolvedTheme]);

  return (
    <div className={styles.themeSwitcher}>
      <AnimatePresence initial={false}>
        {isLoader ? (
          <motion.div
            animate={{ opacity: 1 }}
            className={styles.iconWrapper}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            key="loader"
            transition={{ duration: 0.25 }}
          >
            <Loader />
          </motion.div>
        ) : (
          resolvedTheme && (
            <Button
              aria-label={
                isDark ? 'Switch to light theme' : 'Switch to dark theme'
              }
              aria-pressed={isDark}
              onClick={() => onChangeTheme(isDark ? Themes.Light : Themes.Dark)}
            >
              <motion.div
                animate="visible"
                className={styles.iconWrapper}
                exit="hidden"
                initial="hidden"
                key={isDark ? 'moon' : 'sun'}
                variants={iconVariants}
              >
                <Icon>{isDark ? <MoonIcon /> : <SunIcon />}</Icon>
              </motion.div>
            </Button>
          )
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSwitcher;
