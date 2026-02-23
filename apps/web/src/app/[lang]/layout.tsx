import type { Metadata } from 'next';

import './globals.scss';

import { ThemeProvider } from 'next-themes';

import BgGradient from '@/shared/components/bg-bradient/BgGradient';
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

  return (
    <html lang={lang} suppressHydrationWarning>
      <body>
        <ThemeProvider defaultTheme="system">
          <BgGradient component="header" />
          <Header dict={dictionary} lang={lang} />

          <main>{children}</main>

          <Footer dict={dictionary} />
          <BgGradient component="footer" />
          <Tapbar dict={dictionary} lang={lang} />
        </ThemeProvider>
      </body>
    </html>
  );
}
