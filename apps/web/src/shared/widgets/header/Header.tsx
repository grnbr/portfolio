'use client';
import clsx from 'clsx';
import { FC } from 'react';

import formatHref from '@/shared/helpers/formatHref';
import { Locale } from '@/shared/i18n/i18n-config';
import {
  Navigation,
  NavItemIds,
  NavSocialIds,
} from '@/shared/types/navigation';
import ButtonLink from '@/shared/ui/button/ButtonLink';
import Icon from '@/shared/ui/icon/Icon';
import Logo from '@/shared/ui/icon/icons/Logo';
import { NAV_HEADER_SOCIAL_ICONS } from '@/shared/widgets/header/ui/icons';
import LocaleSwitcher from '@/shared/widgets/header/ui/LocaleSwitcher';
import NavLinks from '@/shared/widgets/header/ui/NavLinks';
import ThemeSwitcher from '@/shared/widgets/header/ui/ThemeSwitcher';

import styles from './Header.module.scss';

type HeaderProps = {
  lang: Locale;
  navigation: Navigation;
};

const Header: FC<HeaderProps> = ({ lang, navigation }) => {
  const LogoElement = (
    <ButtonLink
      aria-label="Home"
      className={styles.logoLink}
      href={`/${lang}`}
      variant="ghost"
    >
      <Logo className={styles.logo} />
    </ButtonLink>
  );

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {LogoElement}

        <div className={styles.desktop}>
          <nav className={clsx(styles.layoutLeft)}>
            {LogoElement}
            <NavLinks lang={lang} navigation={navigation} />
            {/* <ul className={styles.list}>
              <li className={styles.item}>{LogoElement}</li>
              {navigation.primary.map((item, i) => {
                if (item.id === NavItemIds.Home || item.id === NavItemIds.More)
                  return null;

                // TODO add new items like This UI KIT
                switch (item.type) {
                  // case 'action': {
                  //   return (
                  //     <li className={styles.item} key={i}>
                  //       <Button variant="ghost">
                  //         <span className={styles.title}>{item.title}</span>
                  //       </Button>
                  //     </li>
                  //   );
                  // }

                  // case 'link': {

                  // }

                  default: {
                    const formattedHref = formatHref({ href: item.href, lang });

                    return (
                      <li className={styles.item} key={i}>
                        <ButtonLink
                          className={styles.link}
                          href={formattedHref}
                          key={i}
                          variant="ghost"
                        >
                          <span className={styles.title}>{item.title}</span>
                        </ButtonLink>
                      </li>
                    );
                    // return null;
                  }
                }
              })}
            </ul> */}
          </nav>

          <div className={styles.layoutRight}>
            <nav className={styles.socialLinks}>
              <ul className={styles.list}>
                {navigation.socials.map((item, i) => {
                  if (item.id === NavSocialIds.Gmail) return null;

                  const SocialIcon = NAV_HEADER_SOCIAL_ICONS[item.id];

                  return (
                    <ButtonLink href={item.href} key={i} variant="ghost">
                      <Icon options={{ opacity: 'faded' }}>
                        <SocialIcon />
                      </Icon>
                    </ButtonLink>
                  );
                })}
              </ul>
            </nav>

            <div className={styles.divider} />

            <div className={styles.switchers}>
              <LocaleSwitcher currentLang={lang} />
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
