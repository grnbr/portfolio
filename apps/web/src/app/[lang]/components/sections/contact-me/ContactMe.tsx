import { FC } from 'react';

import GetInTouchBtn from '@/shared/components/buttons/GetInTouchBtn';
import { Dictionary } from '@/shared/dictionaries/types';
import Container from '@/shared/ui/Container';

import styles from './ContactMe.module.scss';

type ContactMeProps = {
  dict: Dictionary;
};

const ContactMe: FC<ContactMeProps> = ({ dict }) => {
  const content = dict.home.contactme;

  const getInTouch = dict.buttons.getInTouch;

  return (
    <Container as="section" className={styles.contactMe}>
      <div className={styles.textContent}>
        <h2 className={styles.title}>{content.title}</h2>
        <p className={styles.subtitle}>{content.subtitle}</p>
      </div>

      <div className={styles.buttonContainer}>
        <GetInTouchBtn hasIcon label={getInTouch.label} />
      </div>
    </Container>
  );
};

export default ContactMe;
