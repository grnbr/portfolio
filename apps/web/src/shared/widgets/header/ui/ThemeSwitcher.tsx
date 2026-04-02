'use client';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'motion/react';
import { FC, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { ColorScheme, Theme, ThemeMap } from '@/shared/constants/theme';
import { Dictionary } from '@/shared/dictionaries/types';
import { setCookie } from '@/shared/helpers/cookies';
import { getTheme, resolveTheme } from '@/shared/helpers/theme';
import useIsMounted from '@/shared/hooks/useIsMounted';
import Button from '@/shared/ui/button/Button';
import DropdownMenu from '@/shared/ui/containers/DropdownMenu';
import Icon from '@/shared/ui/icon/Icon';
import { THEME_ICONS } from '@/shared/ui/icon/icons/themes';
import Loader from '@/shared/ui/loader/Loader';

import styles from './ThemeSwitcher.module.scss';

const iconVariants = {
  hidden: { opacity: 0, rotate: -90, scale: 0.5 },
  visible: { opacity: 1, rotate: 0, scale: 1 },
};

type ThemeSwitcherProps = { dict: Dictionary };

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ dict }) => {
  const isMounted = useIsMounted();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<null | Theme>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [resolvedTheme, setResolvedTheme] = useState<ColorScheme | null>(null);
  const [isLoader, setIsLoader] = useState(true);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const onCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const onChangeTheme = (newTheme: Theme) => {
    if (newTheme === theme) {
      onCloseMenu();
      return;
    }

    const resolvedTheme = resolveTheme(newTheme);

    document.documentElement.setAttribute('data-theme', resolvedTheme);

    setTheme(newTheme);
    setResolvedTheme(resolvedTheme);
    onCloseMenu();
  };

  const { ariaLabel } = dict.layout.header.buttons.themeSwitcher;
  const themes = dict.layout.generic.theme;
  const isDark = resolvedTheme === 'dark';
  const IconComponent = resolvedTheme && THEME_ICONS[resolvedTheme];
  const header = isMounted && document.getElementById('header');

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      const { resolvedTheme, theme } = getTheme();

      setTheme(theme);
      if (resolvedTheme) setResolvedTheme(resolvedTheme);
    });

    return () => cancelAnimationFrame(id);
  }, [setTheme]);

  useEffect(() => {
    if (isMounted && theme) {
      const timeout = setTimeout(() => setIsLoader(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isMounted, theme]);

  useEffect(() => {
    if (theme) setCookie('Theme', theme);
    if (resolvedTheme) setCookie('ResolvedTheme', resolvedTheme);
  }, [theme, resolvedTheme]);

  useEffect(() => {
    const perferColorMedia = window.matchMedia('(prefers-color-scheme: dark)');

    perferColorMedia.addEventListener('change', (e) => {
      if (theme !== 'system') return;

      const resolvedTheme = e.matches ? ThemeMap.Dark : ThemeMap.Light;
      setResolvedTheme(resolvedTheme);
    });
  }, [theme]);

  return (
    <div className={styles.themeSwitcher}>
      <AnimatePresence initial={false}>
        <div className={styles.icon}>
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
                aria-label={isMenuOpen ? ariaLabel.close : ariaLabel.open}
                aria-pressed={isDark}
                key="button"
                onClick={handleToggleMenu}
                ref={buttonRef}
              >
                <motion.div
                  animate="visible"
                  className={styles.iconWrapper}
                  exit="hidden"
                  initial="hidden"
                  key={isDark ? 'moon' : 'sun'}
                  variants={iconVariants}
                >
                  <Icon>{IconComponent && <IconComponent />}</Icon>
                </motion.div>
              </Button>
            )
          )}
        </div>
      </AnimatePresence>

      {isMounted &&
        header &&
        createPortal(
          <AnimatePresence initial={false}>
            {isMenuOpen && (
              <DropdownMenu
                buttonRef={buttonRef}
                className={styles.themeMenuContainer}
                handleCloseMenu={onCloseMenu}
                variant="header"
              >
                <ul className={styles.themeMenu}>
                  {themes.map((item) => {
                    const ThemeIcon = THEME_ICONS[item.value];
                    const isSelected = item.value === theme;

                    return (
                      <li
                        className={clsx(
                          styles.themeItem,
                          isSelected && styles.selected,
                        )}
                        key={item.value}
                      >
                        <Button
                          className={styles.button}
                          onClick={() => onChangeTheme(item.value)}
                        >
                          <Icon>
                            <ThemeIcon isInvertedDefaultColor={isSelected} />
                          </Icon>
                          {item.label}
                        </Button>
                      </li>
                    );
                  })}
                </ul>
              </DropdownMenu>
            )}
          </AnimatePresence>,
          header,
        )}
    </div>
  );
};

export default ThemeSwitcher;
