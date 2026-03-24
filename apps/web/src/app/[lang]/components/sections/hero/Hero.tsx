import Image from 'next/image';
import { FC } from 'react';

import GetInTouchBtn from '@/shared/components/buttons/GetInTouchBtn';
import { Dictionary } from '@/shared/dictionaries/types';
import { Locale } from '@/shared/i18n/i18n-config';
import ButtonLink from '@/shared/ui/button/ButtonLink';
import Container from '@/shared/ui/containers/Container';

import styles from './Hero.module.scss';

type HeroProps = {
  dict: Dictionary;
  locale: Locale;
};

const Hero: FC<HeroProps> = ({ dict, locale }) => {
  const content = dict.pages.home.hero;
  const buttons = dict.pages.generic.buttons;
  const { getInTouch, seeMyResume } = buttons;

  return (
    <Container as="section" className={styles.hero}>
      <div className={styles.textContent}>
        <h1 className={styles.title}>
          <span className={styles.greeting}>{content.greeting}</span>
          <span className={styles.pronoun}>{content.pronoun}</span>{' '}
          {locale === 'ru' && <br />}
          {content.name}
        </h1>

        <p className={styles.intro}>{content.intro}</p>

        <div className={styles.buttons}>
          <ButtonLink
            href={seeMyResume.href ?? '#'}
            rel="noopener noreferrer"
            target="_blank"
            variant="primary"
          >
            {seeMyResume.label}
          </ButtonLink>
          <GetInTouchBtn
            hasIcon={false}
            label={getInTouch.label}
            variant="secondary"
          />
        </div>
      </div>

      <div className={styles.imageContainer}>
        <Image
          alt="Photo of Grigory"
          className={styles.image}
          fill
          priority
          src="/images/home/hero-image.webp"
          style={{ objectFit: 'cover' }}
        />
      </div>
    </Container>
  );
};

export default Hero;
