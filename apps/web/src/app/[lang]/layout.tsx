import type { Metadata } from 'next';

import './globals.scss';

import { ThemeProvider } from 'next-themes';

import BgGradient from '@/shared/components/bg-bradient/BgGradient';
import { getDictionary } from '@/shared/i18n/get-dictionary';
import { Locale, Locales } from '@/shared/i18n/i18n-config';
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

  return (
    <html lang={lang} suppressHydrationWarning>
      <body>
        <ThemeProvider defaultTheme="system">
          <BgGradient component="header" />
          <Header lang={lang} navigation={dictionary.header.navigation} />

          <main>{children}</main>

          <Tapbar lang={lang} navigation={dictionary.header.navigation} />
        </ThemeProvider>
      </body>
    </html>
  );
}
