import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { Dictionary } from '@/shared/dictionaries/types';
import Container from '@/shared/ui/Container';

import styles from './Navigation.module.scss';

type NavigationProps = {
  dict: Dictionary;
};

const Navigation: FC<NavigationProps> = ({ dict }) => {
  const content = dict.home.navigation;

  return (
    <Container as="section" className={styles.navigation}>
      <h2 className={styles.title}>{content.title}</h2>

      <ul className={styles.cards}>
        {content.items.map((item) => {
          return (
            <li className={styles.card} key={item.id}>
              <Link href={item.href}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.subtitle}>{item.subtitle}</p>

                <div className={styles.imageContainer}>
                  <Image
                    alt={`${item.id}-card-image`}
                    fill
                    objectPosition="bottom"
                    src={item.img}
                  />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default Navigation;
