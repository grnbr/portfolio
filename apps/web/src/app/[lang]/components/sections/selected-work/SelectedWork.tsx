import { FC } from 'react';

import Projects from '@/app/[lang]/widgets/projects/Projects';
import { Dictionary } from '@/shared/dictionaries/types';
import Container from '@/shared/ui/containers/Container';

import styles from './SelectedWork.module.scss';

type SelectedWorkProps = {
  dict: Dictionary;
};

const SelectedWork: FC<SelectedWorkProps> = ({ dict }) => {
  const content = dict.pages.home.selectedWork;

  return (
    <Container as="section">
      <h2>{content.title}</h2>
      <Projects className={styles.projects} dict={dict} />
    </Container>
  );
};

export default SelectedWork;
