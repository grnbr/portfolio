import type { Metadata } from 'next';

import './globals.scss';

import { headers } from 'next/headers';

import BgGradient from '@/shared/components/bg-bradient/BgGradient';
import { inlineScript } from '@/shared/helpers/inlineScript';
import { getDictionary } from '@/shared/i18n/get-dictionary';
import { Locale, Locales } from '@/shared/i18n/i18n-config';
import Footer from '@/shared/widgets/footer/Footer';
import Header from '@/shared/widgets/header/Header';
import ControlCenter from '@/shared/widgets/tapbar/control-center/ControlCenter';
import Tapbar from '@/shared/widgets/tapbar/Tapbar';

import styles from './Layout.module.scss';
import themeScript from './scripts/themeScript';

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
  const resolvedTheme = (await headers()).get('x-resolved-theme');

  return (
    <html data-theme={resolvedTheme} lang={lang} suppressHydrationWarning>
      <head>
        <meta
          content="width=device-width, initial-scale=1, viewport-fit=cover"
          name="viewport"
        />
        <script
          dangerouslySetInnerHTML={{ __html: inlineScript(themeScript) }}
        />
      </head>

      <body>
        <BgGradient component="header" />
        <Header dict={dictionary} lang={lang} />
        <main>{children}</main>
        <Footer dict={dictionary} />
        <div className={styles.bottomWidgets}>
          <ControlCenter dict={dictionary} lang={lang} />
          <Tapbar dict={dictionary} lang={lang} />
        </div>
        <BgGradient component="footer" />
      </body>
    </html>
  );
}
