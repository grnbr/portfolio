import { FC } from 'react';

import Projects from '@/app/[lang]/widgets/projects/Projects';
import { Dictionary } from '@/shared/dictionaries/types';

type SelectedWorkProps = {
  dict: Dictionary;
};

const SelectedWork: FC<SelectedWorkProps> = ({ dict }) => {
  const content = dict.home.selectedWork;

  return (
    <section>
      <h2>{content.title}</h2>
      <Projects projects={content.projects} />
    </section>
  );
};

export default SelectedWork;
