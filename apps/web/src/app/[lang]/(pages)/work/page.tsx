import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { Content, HeadPage } from "../../ui/work";

const WorkPage = async (props: { params: Promise<{ lang: Locale }> }) => {
  const params = await props.params;
  const dictionary = await getDictionary(params.lang);

  return (
    <>
      <HeadPage
        title={dictionary.work.title}
        subtitle={dictionary.work.subtitle}
      />
      <Content dictionary={dictionary} />
    </>
  );
};

export default WorkPage;
