import { FC } from 'react';

import GetInTouchBtn from '@/shared/components/buttons/GetInTouchBtn';
import { Dictionary } from '@/shared/dictionaries/types';

import styles from './ContactMe.module.scss';

type ContactMeProps = {
  dict: Dictionary;
};

const ContactMe: FC<ContactMeProps> = ({ dict }) => {
  const content = dict.home.contactme;

  const getInTouch = dict.buttons.getInTouch;

  return (
    <section className={styles.contactMe}>
      <div className={styles.textContent}>
        <h2 className={styles.title}>{content.title}</h2>
        <p className={styles.subtitle}>{content.subtitle}</p>
      </div>

      <GetInTouchBtn hasIcon label={getInTouch.label} />
    </section>
  );
};

export default ContactMe;
