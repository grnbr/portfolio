import type { Metadata } from 'next';

import './globals.scss';

import { cookies } from 'next/headers';

import BgGradient from '@/shared/components/bg-bradient/BgGradient';
import Themes from '@/shared/constants/theme';
import { getDictionary } from '@/shared/i18n/get-dictionary';
import { Locale, Locales } from '@/shared/i18n/i18n-config';
import Footer from '@/shared/widgets/footer/Footer';
import Header from '@/shared/widgets/header/Header';
import Tapbar from '@/shared/widgets/tapbar/Tapbar';

export const metadata: Metadata = {
  description:
    'Portfolio page which contains information about me and to show skills',
  title: "Grigory's portfolio",
};

export async function generateStaticParams() {
  return [{ lang: Locales.English }, { lang: Locales.Russian }];
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<'/[lang]'>) {
  const lang = (await params).lang as Locale;
  const dictionary = await getDictionary(lang);
  const theme = (await cookies()).get('theme')?.value || Themes.Light;

  return (
    <html data-theme={theme} lang={lang} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        if (!document.cookie.includes('theme')) {
          const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          document.cookie = 'theme=system; path=/; max-age=31536000';
          document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        }
      `,
          }}
        />
      </head>

      <body>
        <BgGradient component="header" />
        <Header dict={dictionary} lang={lang} />

        <main>{children}</main>

        <Footer dict={dictionary} />
        <BgGradient component="footer" />
        <Tapbar dict={dictionary} lang={lang} />
      </body>
    </html>
  );
}
