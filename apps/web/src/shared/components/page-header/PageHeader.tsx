import { FC } from 'react';

import { Dictionary } from '@/shared/dictionaries/types';

import styles from './PageHeader.module.scss';

type PageHeaderProps = {
  dict: Dictionary;
};

const PageHeader: FC<PageHeaderProps> = ({ dict }) => {
  return <header className={styles.pageHeader}>first</header>;
};

export default PageHeader;
