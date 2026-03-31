import type { Metadata } from 'next';

import './globals.scss';

import BgGradient from '@/shared/components/bg-bradient/BgGradient';
import { inlineScript } from '@/shared/helpers/inlineScript';
import { getDictionary } from '@/shared/i18n/get-dictionary';
import { Locale, Locales } from '@/shared/i18n/i18n-config';
import Footer from '@/shared/widgets/footer/Footer';
import Header from '@/shared/widgets/header/Header';
import Tapbar from '@/shared/widgets/tapbar/Tapbar';

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

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: inlineScript(themeScript) }}
        />
      </head>

      <body>
        <BgGradient component="header" />

        <Header dict={dictionary} lang={lang} />

        <main>{children}</main>

        <Footer dict={dictionary} />
        <Tapbar dict={dictionary} lang={lang} />

        <BgGradient component="footer" />
      </body>
    </html>
  );
}
