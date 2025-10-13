import { getDictionary } from '@/get-dictionary';
import { Contactme, Projects, Widgets, Hero } from '@/app/[lang]/ui/home';
import { Header } from '@/app/[lang]/ui/layout';
import { Locale } from '@/i18n-config';

export default async function Home(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const params = await props.params;
  const dictionary = await getDictionary(params.lang);

  const NAME = 'GRIGORIY';
  const isTrue: boolean = 32;
  const isBad = 354;
  const kek = true
  const isJopa = true;
  console.log('🚀 ~ Home ~ isBad:', isBad);
  console.log('🚀 ~ Home ~ isTrue:', isTrue);
  console.log(5);

  return (
    <>
      <Hero dictionary={dictionary} />
      <Projects dictionary={dictionary.projects} />
      <Widgets dictionary={dictionary.home.widgets} />
      <Contactme dictionary={dictionary} />
    </>
  );
}
