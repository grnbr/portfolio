import { Metadata } from 'next';

import Content from '@/app/[lang]/(pages)/work/components/Content';
import PageHeader from '@/shared/components/page-header/PageHeader';
import { getDictionary } from '@/shared/i18n/get-dictionary';
import { Locale } from '@/shared/i18n/i18n-config';

export async function generateMetadata(props: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const params = await props.params;
  const dictionary = await getDictionary(params.lang);
  const meta = dictionary.pages.work.meta;
  const { description, openGraph, title } = meta;

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

export default async function Page({ params }: PageProps<'/[lang]'>) {
  const lang = (await params).lang as Locale;
  const dictionary = await getDictionary(lang);
  const work = dictionary.pages.work;

  return (
    <>
      <PageHeader header={work.header} />
      <Content dict={dictionary} />
    </>
  );
}
