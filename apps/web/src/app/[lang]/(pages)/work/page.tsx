import Content from '@/app/[lang]/(pages)/work/components/Content';
import PageHeader from '@/shared/components/page-header/PageHeader';
import { getDictionary } from '@/shared/i18n/get-dictionary';
import { Locale } from '@/shared/i18n/i18n-config';

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
