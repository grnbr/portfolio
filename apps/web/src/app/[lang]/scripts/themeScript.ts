import type { CookieNames } from '@/shared/constants/cookies';
import type { ColorScheme, Theme } from '@/shared/types/theme';

export default function themeScript() {
  const MAX_AGE = 31536000;

  const getCookie = (name: CookieNames) =>
    document.cookie
      .split('; ')
      .find((row) => row.startsWith(name + '='))
      ?.split('=')[1];

  const resolvedTheme = getCookie('resolvedTheme') as ColorScheme | undefined;

  const applyTheme = (theme: ColorScheme) => {
    document.documentElement.dataset.theme = theme;
    document.cookie = `resolvedTheme=${theme}; path=/; max-age=${MAX_AGE}`;
  };

  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  const initial = resolvedTheme || (mq.matches ? 'dark' : 'light');
  applyTheme(initial);

  mq.addEventListener('change', (e) => {
    const theme = getCookie('theme') as Theme | undefined;

    if (theme !== 'system') return;

    applyTheme(e.matches ? 'dark' : 'light');
  });
}
