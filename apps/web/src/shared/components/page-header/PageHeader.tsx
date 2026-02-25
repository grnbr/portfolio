import clsx from 'clsx';
import { FC } from 'react';

import type { PageHeader as PageHeaderType } from '@/shared/dictionaries/types';

import styles from './PageHeader.module.scss';

type PageHeaderProps = {
  className?: string;
  header: PageHeaderType;
};

const PageHeader: FC<PageHeaderProps> = ({ className, header }) => {
  const { subtitle, title } = header;

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
