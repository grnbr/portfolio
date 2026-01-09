import type { Metadata } from 'next';

import { ThemeProvider } from 'next-themes';

import './globals.scss';

import BgGradient from '@/shared/components/bg-bradient/BgGradient';
import { getDictionary } from '@/shared/i18n/get-dictionary';
import { Languages } from '@/shared/i18n/i18n-config';
import Header from '@/shared/ui/header/Header';
import Tapbar from '@/shared/widgets/tapbar/Tapbar';

export const metadata: Metadata = {
  description:
    'Portfolio page which contains information about me and to show skills',
  title: "Grigory's portfolio",
};

export async function generateStaticParams() {
  return [{ lang: 'en-US' }, { lang: 'de' }];
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<'/[lang]'>) {
  const lang = (await params).lang as Languages;
  const dictionary = await getDictionary(lang);

  return (
    <html lang={(await params).lang} suppressHydrationWarning>
      <body>
        <ThemeProvider defaultTheme={'light'}>
          <BgGradient component="header" />
          <Header />

          <main>{children}</main>
          <Tapbar navigation={dictionary.navigation} />
        </ThemeProvider>
      </body>
    </html>
  );
}
