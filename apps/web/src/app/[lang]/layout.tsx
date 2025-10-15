import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./ui/globals.scss";
import { inter } from "./ui/fonts";
import { Providers } from "@/app/[lang]/providers";
import { Header, Footer, BgGradient } from "./ui/layout";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export const metadata: Metadata = {
  title: "Grigoriy's portfolio",
  description:
    "Portfolio page which contains information about me and to show skills",
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
              <BgGradient position="top" />
              <Header
                dictionary={dictionary.header}
                currentLang={params.lang}
              />
              <main className="flex-1 basis-full">{children}</main>
              <hr className="underline" />
              <Footer dictionary={dictionary.footer} />
              <BgGradient position="bottom" />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
