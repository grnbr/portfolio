import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import './globals.scss';
import { Providers } from '@/app/[lang]/providers';
import BgGradient from '@/shared/components/bg-bradient/BgGradient';
import { getDictionary } from '@/shared/i18n/get-dictionary';
import { Languages, Locale } from '@/shared/i18n/i18n-config';
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
    <html lang={(await params).lang}>
      <body>
        <BgGradient component="header" />
        <Header />

        <main>{children}</main>
        {/* <Providers>
          <div className="gradient-wrapper">
            <div className="page-wrapper">
              <hr className="underline" />
            </div>
          </div>
        </Providers> */}

        <Tapbar />
      </body>
    </html>
  );
}
