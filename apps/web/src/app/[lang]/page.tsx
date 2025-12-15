import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';

export default async function Home(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const params = await props.params;
  const dictionary = await getDictionary(params.lang);

  return <></>;
}
