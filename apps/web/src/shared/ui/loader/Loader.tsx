import clsx from 'clsx';
import { FC } from 'react';

import styles from './Loader.module.scss';

type LoaderProps = {
  className?: string;
  options?: {
    color?: 'default' | 'inverted' | 'white';
  };
};

const Loader: FC<LoaderProps> = ({ className, options }) => {
  const { color = 'default' } = options ?? {};

  return <span className={clsx(styles.loader, className, styles[color])} />;
};

export default Loader;
