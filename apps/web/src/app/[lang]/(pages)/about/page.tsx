import Content from '@/app/[lang]/(pages)/about/components/Content';
import PageHeader from '@/shared/components/page-header/PageHeader';
import { getDictionary } from '@/shared/i18n/get-dictionary';
import { Locale } from '@/shared/i18n/i18n-config';

import styles from './Page.module.scss';

export default async function Page({ params }: PageProps<'/[lang]'>) {
  const lang = (await params).lang as Locale;
  const dictionary = await getDictionary(lang);
  const pageHeader = dictionary.about.header;

  return (
    <>
      <PageHeader
        className={styles.pageHeader}
        subtitle={pageHeader.subtitle}
        title={pageHeader.title}
      />
      <Content dict={dictionary} />
    </>
  );
}
