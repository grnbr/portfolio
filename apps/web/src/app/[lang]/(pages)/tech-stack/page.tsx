import { Metadata } from 'next';
import Image from 'next/image';

import PageHeader from '@/shared/components/page-header/PageHeader';
import { TechGroupName } from '@/shared/dictionaries/types/techTypes';
import { getDictionary } from '@/shared/i18n/get-dictionary';
import { Locale } from '@/shared/i18n/i18n-config';
import Article from '@/shared/ui/containers/Article';
import { type IconComponent } from '@/shared/ui/icon/iconTypes';

import styles from './Page.module.scss';
import { TECH_STACK_TSX_ICONS } from './ui/icons';

export async function generateMetadata(props: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const params = await props.params;
  const dictionary = await getDictionary(params.lang);
  const meta = dictionary.pages['tech-stack'].meta;
  const { description, title } = meta;

  const titlePostfix = dictionary.pages.generic.meta.titlePostfix;

  return {
    description,
    title: title + titlePostfix,
  };
}

export default async function Page({ params }: PageProps<'/[lang]'>) {
  const lang = (await params).lang as Locale;
  const dictionary = await getDictionary(lang);
  const techStack = dictionary.pages['tech-stack'];
  const { content, header } = techStack;

  return (
    <>
      <PageHeader header={header} />
      <Article className={styles.content}>
        {content.map((group) => (
          <section className={styles.group} key={group.groupKey}>
            <h2 className={styles.title}>{group.title}</h2>
            <ul className={styles.itemsContainer}>
              {group.items.map((item) => {
                const getLogoTsx = (
                  groupKey: TechGroupName,
                  id: string,
                ): IconComponent | undefined => {
                  return TECH_STACK_TSX_ICONS[groupKey]?.[id as never];
                };

                const LogoTsx = getLogoTsx(group.groupKey, item.id);
                const svgPath = `/icons/tech-stack/${group.groupKey}/${item.id}-logo.svg`;

                return (
                  <li className={styles.item} key={item.id}>
                    <div className={styles.layoutLeft}>
                      <div className={styles.logoWrapper}>
                        {LogoTsx ? (
                          <LogoTsx />
                        ) : (
                          <Image alt={`${item.id}-logo`} fill src={svgPath} />
                        )}
                      </div>
                      <p className={styles.label}>{item.label}</p>
                    </div>

                    {item.tag && (
                      <div className={styles.layoutRight}>
                        <span className={styles.tag}>{item.tag}</span>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </Article>
    </>
  );
}
