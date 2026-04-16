import { Locale } from '@/shared/i18n/i18n-config';

type OpenGraphDefaults = {
  images: string;
  type: 'website';
};

export default function getOpenGraphDefaults({
  lang,
}: {
  lang: Locale;
}): OpenGraphDefaults {
  return {
    images: `/images/og/image-${lang}.webp`,
    type: 'website',
  };
}
