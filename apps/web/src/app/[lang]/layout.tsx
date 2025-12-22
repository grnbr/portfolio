import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import './globals.scss';
import { Providers } from '@/app/[lang]/providers';
import { getDictionary } from '@/shared/i18n/get-dictionary';
import { Locale } from '@/shared/i18n/i18n-config';

import styles from './Layout.module.scss';

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
    <html lang={params.lang}>
      <body className={''}>
        <Providers>
          <main className={styles.main}>{children}</main>
          {/* <div className="gradient-wrapper">
            <div className="page-wrapper">
              <hr className="underline" />
            </div>
          </div> */}
        </Providers>
      </body>
    </html>
  );
}
