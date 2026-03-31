'use client';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'motion/react';
import { FC, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { ColorScheme, DefaultTheme, Theme } from '@/shared/constants/theme';
import { Dictionary } from '@/shared/dictionaries/types';
import { getCookie } from '@/shared/helpers/cookies';
import Button from '@/shared/ui/button/Button';
import Icon from '@/shared/ui/icon/Icon';
import { THEME_ICONS } from '@/shared/ui/icon/icons/themes';
import Loader from '@/shared/ui/loader/Loader';

import DropdownMenu from './dropdown-menu/DropdownMenu';
import styles from './ThemeSwitcher.module.scss';

const iconVariants = {
  hidden: { opacity: 0, rotate: -90, scale: 0.5 },
  visible: { opacity: 1, rotate: 0, scale: 1 },
};

const MAX_AGE = 31536000;

type ThemeSwitcherProps = { dict: Dictionary };

const getTheme = (): { resolvedTheme?: ColorScheme; theme: Theme } => {
  const defaultTheme: DefaultTheme = 'system';

  const theme = getCookie('Theme') ?? defaultTheme;
  const resolvedTheme = getCookie('ResolvedTheme');

  return { resolvedTheme, theme };
};

function resolveTheme(theme: Theme): ColorScheme {
  if (theme === 'system') {
    return window.matchMedia('(prefers-color-scheme: dark').matches
      ? 'dark'
      : 'light';
  }
  return theme;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ dict }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<null | Theme>(null);
  const [resolvedTheme, setResolvedTheme] = useState<ColorScheme | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isLoader, setIsLoader] = useState(true);

  const buttonRef = useRef<HTMLButtonElement | null>(null);

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

      setIsMounted(true);
      setTheme(theme);
      if (resolvedTheme) setResolvedTheme(resolvedTheme);
    });

    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    if (isMounted && theme) {
      const timeout = setTimeout(() => setIsLoader(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isMounted, theme]);

  useEffect(() => {
    if (!theme) return;
    document.cookie = `theme=${theme}; path=/; max-age=${MAX_AGE}`;

    document.cookie = `resolvedTheme=${resolvedTheme}; path=/; max-age=${MAX_AGE}`;
  }, [theme, resolvedTheme]);

  useEffect(() => {
    const perferColorMedia = window.matchMedia('(prefers-color-scheme: dark)');

    perferColorMedia.addEventListener('change', (e) => {
      if (theme !== 'system') return;

      const resolvedTheme = e.matches ? 'dark' : 'light';
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
              <motion.div
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className={styles.themeMenuContainer}
                exit={{ opacity: 0, scale: 0.85, y: -8 }}
                initial={{ opacity: 0, scale: 0.85, y: -8 }}
                key="menu"
                transition={{
                  damping: 25,
                  mass: 0.8,
                  stiffness: 400,
                  type: 'spring',
                }}
              >
                <DropdownMenu
                  buttonRef={buttonRef}
                  className={styles.themeMenu}
                  handleCloseMenu={onCloseMenu}
                  key="menu"
                >
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
                </DropdownMenu>
              </motion.div>
            )}
          </AnimatePresence>,
          header,
        )}
    </div>
  );
};

export default ThemeSwitcher;
