import { getDictionary } from "@/get-dictionary";
import { Content, HeadPage } from "../../ui/techs";
import { Locale } from "@/i18n-config";

const TechsPage = async (props: { params: Promise<{ lang: Locale }> }) => {
  const params = await props.params;
  const dictionary = await getDictionary(params.lang);

  return (
    <>
      <HeadPage
        title={dictionary.tech.title}
        subtitle={dictionary.tech.subtitle}
      />
      <Content dictionary={dictionary.tech} />
    </>
  );
};

export default TechsPage;
