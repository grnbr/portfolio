import Image from 'next/image';
import { FC } from 'react';

import LocaleSwitcher from '@/shared/components/LocaleSwitcher';
import { Dictionary } from '@/shared/dictionaries/types';
import { Navigation } from '@/shared/dictionaries/types/navigationTypes';
import { Locale } from '@/shared/i18n/i18n-config';
import ButtonLink from '@/shared/ui/button/ButtonLink';
import Icon from '@/shared/ui/icon/Icon';

import styles from '../Header.module.scss';
import { NAV_HEADER_SOCIAL_ICONS } from './icons';
import ThemeSwitcher from './ThemeSwitcher';

type RightPanelProps = {
  dict: Dictionary;
  lang: Locale;
  navigation: Navigation;
};

const RightPanel: FC<RightPanelProps> = ({ dict, lang, navigation }) => {
  return (
    <div className={styles.rightPanel}>
      <nav className={styles.socialLinks}>
        <ul className={styles.list}>
          {navigation.socials.items.map((item, i) => {
            const SocialIcon = NAV_HEADER_SOCIAL_ICONS[item.id];

            const svgPath = `/icons/navigation/social/${item.id}-logo.svg`;

            return (
              <ButtonLink
                className={styles.link}
                href={item.href}
                key={i}
                target="_blank"
                variant="ghost"
              >
                <Icon
                  className={styles.iconWrapper}
                  options={{ opacity: 'faded' }}
                >
                  {SocialIcon ? (
                    <SocialIcon />
                  ) : (
                    <Image alt={`${item.id}-logo`} fill src={svgPath} />
                  )}
                </Icon>
              </ButtonLink>
            );
          })}
        </ul>
      </nav>

      <div className={styles.divider} />

      <div className={styles.switchers}>
        <LocaleSwitcher currentLang={lang} />
        <ThemeSwitcher dict={dict} />
      </div>
    </div>
  );
};

export default RightPanel;
