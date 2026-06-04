import { Metadata } from 'next';

import PageHeader from '@/shared/components/page-header/PageHeader';
import { getDictionary } from '@/shared/i18n/get-dictionary';
import { Locale } from '@/shared/i18n/i18n-config';
import getOpenGraphDefaults from '@/shared/lib/metadata/getOpenGraphDefaults';
import Article from '@/shared/ui/containers/Article';

import Form from './components/Form';

export async function generateMetadata(props: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const params = await props.params;
  const dictionary = await getDictionary(params.lang);
  const meta = dictionary.pages.contact.meta;
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

export default async function Page({ params }: PageProps<'/[lang]'>) {
  const lang = (await params).lang as Locale;
  const dictionary = await getDictionary(lang);

  return (
    <>
      <PageHeader header={dictionary.pages.contact.header} />
      <Article>
        <Form dict={dictionary} />
      </Article>
    </>
  );
}
