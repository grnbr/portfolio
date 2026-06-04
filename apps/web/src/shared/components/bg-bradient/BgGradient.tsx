import clsx from 'clsx';
import { FC } from 'react';

import styles from './BgGradient.module.scss';

type BgGradientProps = {
  component: 'footer' | 'header';
};

const BgGradient: FC<BgGradientProps> = ({ component }) => {
  return (
    <div
      className={clsx(
        styles.container,
        component === 'header' ? styles.headerGradient : styles.footerGradient,
      )}
    >
      <div className={styles.gradientLeft} />
      <div className={styles.gradientCenter} />
      <div className={styles.gradientRight} />
    </div>
  );
};

export default BgGradient;
