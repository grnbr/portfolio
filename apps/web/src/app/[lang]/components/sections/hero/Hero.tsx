import Image from 'next/image';
import { FC } from 'react';

import GetInTouchBtn from '@/shared/components/buttons/GetInTouchBtn';
import { Dictionary } from '@/shared/dictionaries/types';
import ButtonLink from '@/shared/ui/button/ButtonLink';
import Container from '@/shared/ui/Container';

import styles from './Hero.module.scss';

type HeroProps = {
  dict: Dictionary;
};

const Hero: FC<HeroProps> = ({ dict }) => {
  const content = dict.home.hero;
  const buttons = dict.buttons;
  const { getInTouch, seeMyResume } = buttons;

  return (
    <Container as="section" className={styles.hero}>
      <div className={styles.imageContainer}>
        <Image
          alt="Photo of Grigory"
          className={styles.image}
          fill
          objectFit="cover"
          priority
          src="/images/home/hero-image.webp"
        />
      </div>

      <div className={styles.textContent}>
        <h1 className={styles.title}>
          <span className={styles.greeting}>{content.greeting}</span>
          <span className={styles.pronoun}>{content.pronoun}</span>{' '}
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
    </Container>
  );
};

export default Hero;
