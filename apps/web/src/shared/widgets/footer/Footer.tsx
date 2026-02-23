import { FC } from 'react';

import Logo from '@/shared/components/logo/Logo';
import { Dictionary } from '@/shared/dictionaries/types';
import ButtonLink from '@/shared/ui/button/ButtonLink';

import styles from './Footer.module.scss';

type FooterProps = {
  dict: Dictionary;
};

const Footer: FC<FooterProps> = ({ dict }) => {
  const navigation = dict.navigation;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.navigation}>
          <nav className={styles.socials}>
            <h2 className={styles.title}>{navigation.socials.title}</h2>
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
            <h2 className={styles.title}>{navigation.primary.title}</h2>
            <ul className={styles.list}>
              {navigation.primary.items.map((item) => (
                <li className={styles.item} key={item.id}>
                  <ButtonLink className={styles.link} href={item.href}>
                    {item.label}
                  </ButtonLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.logoContainer}>
          <Logo className={styles.logo} home={navigation.home} />
          <p className={styles.underLogoText}>{dict.footer.underLogoText}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
