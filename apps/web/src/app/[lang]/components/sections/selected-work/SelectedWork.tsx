import { FC } from 'react';

import Projects from '@/app/[lang]/widgets/projects/Projects';
import { Dictionary } from '@/shared/dictionaries/types';
import Container from '@/shared/ui/Container';

type SelectedWorkProps = {
  dict: Dictionary;
};

const SelectedWork: FC<SelectedWorkProps> = ({ dict }) => {
  const content = dict.home.selectedWork;

  return (
    <Container as="section">
      <h2>{content.title}</h2>
      <Projects projects={content.projects} />
    </Container>
  );
};

export default SelectedWork;
