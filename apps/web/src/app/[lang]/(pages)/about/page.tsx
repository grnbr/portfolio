import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { Content } from "../../ui/about";
import { HeadPage } from "../../ui/about";

const AboutPage = async (props: { params: Promise<{ lang: Locale }> }) => {
  const params = await props.params;
  const dictionary = await getDictionary(params.lang);

  return (
    <>
      <HeadPage
        title={dictionary.about.title}
        subtitle={dictionary.about.subtitle}
      />
      <Content dictionary={dictionary} />
    </>
  );
};

export default AboutPage;
