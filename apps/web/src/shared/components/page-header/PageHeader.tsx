import clsx from 'clsx';
import { FC } from 'react';

import styles from './PageHeader.module.scss';

type PageHeaderProps = {
  className?: string;
  subtitle: string;
  title: string;
};

const PageHeader: FC<PageHeaderProps> = ({ className, subtitle, title }) => {
  return (
    <header className={clsx(styles.pageHeader, className)}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </header>
  );
};

export default PageHeader;
