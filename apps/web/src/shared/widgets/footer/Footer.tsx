import { FC } from 'react';

import Logo from '@/shared/components/logo/Logo';
import { Dictionary } from '@/shared/dictionaries/types';
import formatHref from '@/shared/helpers/formatHref';
import { Locale } from '@/shared/i18n/i18n-config';
import ButtonLink from '@/shared/ui/button/ButtonLink';

import styles from './Footer.module.scss';

type FooterProps = {
  dict: Dictionary;
  lang: Locale;
};

const Footer: FC<FooterProps> = ({ dict, lang }) => {
  const navigation = dict.layout.generic.navigation;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.navigation}>
          <nav className={styles.socials}>
            {navigation.socials.title && (
              <p className={styles.title}>{navigation.socials.title}</p>
            )}
            <ul className={styles.list}>
              {navigation.socials.items.map((item) => (
                <li className={styles.item} key={item.id}>
                  <ButtonLink className={styles.link} href={item.href}>
                    {item.label}
                  </ButtonLink>
                </li>
              ))}
            </ul>
          </nav>

          <nav className={styles.primary}>
            {navigation.primary.title && (
              <p className={styles.title}>{navigation.primary.title}</p>
            )}

            <ul className={styles.list}>
              {navigation.primary.items.map((item) => {
                const formattedHref = formatHref({ href: item.href, lang });

                return (
                  <li className={styles.item} key={item.id}>
                    <ButtonLink
                      aria-label={item.label}
                      className={styles.link}
                      href={formattedHref}
                    >
                      {item.label}
                    </ButtonLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className={styles.logoContainer}>
          <Logo
            className={styles.logo}
            homeNavDictItem={navigation.home}
            lang={lang}
          />
          <p className={styles.underLogoText}>
            {dict.layout.footer.underLogoText}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
