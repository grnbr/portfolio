import ContactMe from '@/app/[lang]/components/sections/contact-me/ContactMe';
import Hero from '@/app/[lang]/components/sections/hero/Hero';
import Navigation from '@/app/[lang]/components/sections/navigation/Navigation';
import SelectedWork from '@/app/[lang]/components/sections/selected-work/SelectedWork';
import { getDictionary } from '@/shared/i18n/get-dictionary';
import { Locale } from '@/shared/i18n/i18n-config';

export default async function Home(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const params = await props.params;
  const dictionary = await getDictionary(params.lang);

  return (
    <>
      <Hero dict={dictionary} />
      <SelectedWork dict={dictionary} />
      <Navigation dict={dictionary} />
      <ContactMe dict={dictionary} />
    </>
  );
}
