import { Locale } from '@/shared/i18n/i18n-config';

const formatHref = ({ href, lang }: { href: string; lang: Locale }): string => {
  const path = href.startsWith('/') ? href : `/${href}`;
  return `/${lang}${path}`;
};

export default formatHref;
