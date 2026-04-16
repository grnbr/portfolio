import { Metadata } from 'next';

import ContactMe from '@/app/[lang]/components/sections/contact-me/ContactMe';
import Hero from '@/app/[lang]/components/sections/hero/Hero';
import Navigation from '@/app/[lang]/components/sections/navigation/Navigation';
import SelectedWork from '@/app/[lang]/components/sections/selected-work/SelectedWork';
import { getDictionary } from '@/shared/i18n/get-dictionary';
import { Locale } from '@/shared/i18n/i18n-config';
import getOpenGraphDefaults from '@/shared/lib/metadata/getOpenGraphDefaults';

export async function generateMetadata(props: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const params = await props.params;
  const dictionary = await getDictionary(params.lang);
  const meta = dictionary.pages.home.meta;
  const { description, title } = meta;
  const openGraph = getOpenGraphDefaults({ lang: params.lang });

  const titlePostfix = dictionary.pages.generic.meta.titlePostfix;
  const fullTitle = title + titlePostfix;

  return {
    description,
    openGraph: {
      description,
      title: fullTitle,
      ...openGraph,
    },
    title: fullTitle,
  };
}

export default async function Home(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const params = await props.params;
  const dictionary = await getDictionary(params.lang);

  return (
    <>
      <Hero dict={dictionary} locale={params.lang} />
      <SelectedWork dict={dictionary} />
      <Navigation dict={dictionary} />
      <ContactMe dict={dictionary} />
    </>
  );
}
