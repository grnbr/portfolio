import Image from 'next/image';
import { FC } from 'react';

import { PROJECT_ICONS } from '@/app/[lang]/widgets/projects/icons';
import { Project } from '@/shared/types/data';
import ButtonLink from '@/shared/ui/button/ButtonLink';
import Icon from '@/shared/ui/icon/Icon';
import ArrowRightIcon from '@/shared/ui/icon/icons/ArrowRightIcon';

import styles from './Projects.module.scss';

type ProjectsProps = {
  projects: Project[];
};

const Projects: FC<ProjectsProps> = ({ projects }) => {
  return (
    <ul className={styles.projects}>
      {projects.map((project) => {
        const ProjectIcon = PROJECT_ICONS[project.id];

        return (
          <li className={styles.project} key={project.id}>
            <div className={styles.content}>
              <span className={styles.iconWrapper}>
                <ProjectIcon />
              </span>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              {project.linkBtn && (
                <ButtonLink href={project.linkBtn.href} target="_blank">
                  {project.linkBtn.label}
                  <Icon>
                    <ArrowRightIcon />
                  </Icon>
                </ButtonLink>
              )}
            </div>

            <div className={styles.imageContainer}>
              <Image
                alt={`${project.id}-image`}
                className={styles.image}
                fill
                src={project.img}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Projects;
