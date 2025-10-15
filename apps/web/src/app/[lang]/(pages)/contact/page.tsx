import { getDictionary } from "@/get-dictionary";
import { Form, HeadPage } from "../../ui/contact";
import { Locale } from "@/i18n-config";

const ContactPage = async (props: { params: Promise<{ lang: Locale }> }) => {
  const params = await props.params;
  const dictionary = await getDictionary(params.lang);

  return (
    <>
      <HeadPage
        title={dictionary.contact.title}
        subtitle={dictionary.contact.subtitle}
      />
      <Form dictionary={dictionary.contact.form} />
    </>
  );
};

export default ContactPage;
