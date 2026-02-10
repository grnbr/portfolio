import { getDictionary } from '@/shared/i18n/get-dictionary';
import { Locale } from '@/shared/i18n/i18n-config';
import Loader from '@/shared/ui/loader/Loader';

export default async function Home(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const params = await props.params;
  const dictionary = await getDictionary(params.lang);

  return (
    <>
      {/* <Loader /> */}
    </>
  );
}
