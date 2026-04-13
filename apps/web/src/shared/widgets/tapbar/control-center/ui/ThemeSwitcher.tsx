import clsx from 'clsx';
import { motion } from 'motion/react';
import { FC, useCallback, useEffect, useRef, useState } from 'react';

import { Dictionary } from '@/shared/dictionaries/types';
import { setCookie } from '@/shared/helpers/cookies';
import { getTheme, resolveTheme } from '@/shared/helpers/theme';
import { Theme } from '@/shared/types/theme';
import Button from '@/shared/ui/button/Button';
import Icon from '@/shared/ui/icon/Icon';
import { THEME_ICONS } from '@/shared/ui/icon/icons/themes';

import styles from '../ControlCenter.module.scss';

type ThemeProps = {
  dict: Dictionary;
};

const ThemeSwitcher: FC<ThemeProps> = ({ dict }) => {
  const [theme, setTheme] = useState<null | Theme>(null);
  const [indicator, setIndicator] = useState<null | {
    offset: number;
    ready: boolean;
    width: number;
  }>(null);

  const listRef = useRef<HTMLUListElement | null>(null);
  const themes = dict.layout.generic.theme;
  const selectedIndex = themes.findIndex((item) => item.value === theme);

  const onChangeTheme = (newTheme: Theme) => {
    const resolvedTheme = resolveTheme(newTheme);

    document.documentElement.setAttribute('data-theme', resolvedTheme);
    setTheme(newTheme);
  };

  const updatePosition = useCallback(() => {
    if (!listRef.current) return;
    const items = listRef.current.querySelectorAll('li');
    const selected = items[selectedIndex];
    if (!selected) return;

    setIndicator({
      offset: selected.offsetLeft,
      ready: true,
      width: selected.offsetWidth,
    });
  }, [selectedIndex]);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      const { theme } = getTheme();

      setTheme(theme);
      updatePosition();
    });

    return () => cancelAnimationFrame(id);
  }, [setTheme, updatePosition]);

  useEffect(() => {
    if (theme) {
      setCookie('Theme', theme);

      const resolvedTheme = resolveTheme(theme);
      setCookie('ResolvedTheme', resolvedTheme);
    }
  }, [theme]);

  return (
    <div className={styles.themeSwitcher}>
      <ul className={styles.list} ref={listRef}>
        {themes.map((item) => {
          const ThemeIcon = THEME_ICONS[item.value];
          const isSelected = item.value === theme;

          return (
            <li
              className={clsx(styles.themeItem, isSelected && styles.selected)}
              key={item.value}
            >
              <Button
                aria-current={theme === item.value}
                aria-label={`Set ${item.label} Theme`}
                className={styles.button}
                onClick={() => onChangeTheme(item.value)}
              >
                <Icon>
                  <ThemeIcon isInvertedDefaultColor={isSelected} />
                </Icon>
              </Button>
            </li>
          );
        })}

        {indicator?.ready && (
          <motion.span
            animate={{ x: indicator.offset }}
            className={styles.bgElement}
            initial={false}
            style={{
              width: indicator.width || `calc(100% / ${themes.length})`,
            }}
            transition={{
              damping: 30,
              stiffness: 400,
              type: 'spring',
            }}
          />
        )}
      </ul>
    </div>
  );
};

export default ThemeSwitcher;
