import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import './ui/globals.scss';
import { Providers } from '@/app/[lang]/providers';
import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';

import { inter } from './ui/fonts';

export const metadata: Metadata = {
  description:
    'Portfolio page which contains information about me and to show skills',
  title: "Grigory's portfolio",
};

export default async function RootLayout(
  props: Readonly<{
    children: ReactNode;
    params: { lang: Locale };
  }>,
) {
  const params = await props.params;

  const { children } = props;

  const dictionary = await getDictionary(params.lang);

  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <Providers>
          <div className="gradient-wrapper">
            <div className="page-wrapper">
              <main className="flex-1 basis-full">{children}</main>
              <hr className="underline" />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
