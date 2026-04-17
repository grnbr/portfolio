'use client';
import { FC } from 'react';

import Logo from '@/shared/components/logo/Logo';
import { Dictionary } from '@/shared/dictionaries/types';
import { Locale } from '@/shared/i18n/i18n-config';
import Container from '@/shared/ui/containers/Container';
import Navigation from '@/shared/widgets/header/ui/Navigation';

import styles from './Header.module.scss';
import RightPanel from './ui/RightPanel';

type HeaderProps = {
  dict: Dictionary;
  lang: Locale;
};

const Header: FC<HeaderProps> = ({ dict, lang }) => {
  const navigation = dict.layout.generic.navigation;

  const LogoJSX = (
    <Logo
      className={styles.logoLink}
      homeNavDictItem={navigation.home}
      lang={lang}
    />
  );

  return (
    <Container as="header" className={styles.header} id="header">
      <div className={styles.container}>
        {LogoJSX}

        <div className={styles.desktop}>
          <Navigation dict={dict} lang={lang} logo={LogoJSX} />
          <RightPanel dict={dict} lang={lang} navigation={navigation} />
        </div>
      </div>
    </Container>
  );
};

export default Header;
