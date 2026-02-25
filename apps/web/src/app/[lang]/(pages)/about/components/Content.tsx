import clsx from 'clsx';
import Image from 'next/image';
import { FC } from 'react';

import GetInTouchBtn from '@/shared/components/buttons/GetInTouchBtn';
import ParagraphWithLinks from '@/shared/components/paragraphs/ParagraphWithLinks';
import { Dictionary } from '@/shared/dictionaries/types';
import Container from '@/shared/ui/Container';

import styles from './Content.module.scss';

type ContentProps = {
  dict: Dictionary;
};

const Content: FC<ContentProps> = ({ dict }) => {
  const getInTouch = dict.buttons.getInTouch;
  const portrait = dict.images.portrait;
  const about = dict.about;
  const textContent = about.textContent;

  return (
    <Container as="article" className={styles.content}>
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <Image
            alt={portrait.alt}
            className={styles.image}
            fill
            src={'/images/about/photo-min.webp'}
          />
        </div>
        <GetInTouchBtn
          className={styles.getInTouchBtn}
          label={getInTouch.label}
        />
      </div>

      <div className={styles.textContainer}>
        <div className={styles.paragraph}>
          <h3 className={styles.title}>{textContent[0]?.title}</h3>
          <p className={styles.text}>
            {textContent[0]?.text[0]}{' '}
            <span className={styles.highlight}>{textContent[0]?.text[1]}</span>{' '}
            {textContent[0]?.text[2]}
          </p>
        </div>

        <div className={styles.paragraph}>
          <h3 className={styles.title}>{textContent[1]?.title}</h3>
          <p className={styles.text}>{textContent[1]?.text[0]}</p>
        </div>

        <ParagraphWithLinks
          className={clsx(styles.text, styles.closingParagraph)}
          linkClassName={styles.link}
          paragraph={about.closingParagraph}
        />

        <p className={clsx(styles.text, styles.afterword)}>{about.afterword}</p>
      </div>

      <GetInTouchBtn
        className={styles.getInTouchBtn}
        label={getInTouch.label}
      />
    </Container>
  );
};

export default Content;
