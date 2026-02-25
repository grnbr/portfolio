import { FC } from 'react';

import Projects from '@/app/[lang]/widgets/projects/Projects';
import { Dictionary } from '@/shared/dictionaries/types';
import Article from '@/shared/ui/containers/Article';

import styles from './Content.module.scss';

type ContentProps = {
  dict: Dictionary;
};

const Content: FC<ContentProps> = ({ dict }) => {
  return (
    <Article className={styles.content}>
      <Projects dict={dict} isEmptyState />
    </Article>
  );
};

export default Content;
