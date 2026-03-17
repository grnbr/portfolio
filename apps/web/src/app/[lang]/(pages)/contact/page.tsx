import PageHeader from '@/shared/components/page-header/PageHeader';
import { getDictionary } from '@/shared/i18n/get-dictionary';
import { Locale } from '@/shared/i18n/i18n-config';
import Article from '@/shared/ui/containers/Article';

import Form from './components/Form';

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
