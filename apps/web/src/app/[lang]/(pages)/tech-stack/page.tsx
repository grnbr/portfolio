export default async function Page({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params;
  return <></>;
}
