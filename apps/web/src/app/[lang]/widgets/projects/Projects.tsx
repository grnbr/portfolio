import clsx from 'clsx';
import Image from 'next/image';
import { FC } from 'react';

import { PROJECT_ICONS } from '@/app/[lang]/widgets/projects/icons';
import GetInTouchBtn from '@/shared/components/buttons/GetInTouchBtn';
import { Dictionary } from '@/shared/dictionaries/types';
import { Project } from '@/shared/types/data';
import ButtonLink from '@/shared/ui/button/ButtonLink';
import Icon from '@/shared/ui/icon/Icon';
import ArrowRightIcon from '@/shared/ui/icon/icons/ArrowRightIcon';
import StarsIcon from '@/shared/ui/icon/icons/StarsIcon';

import styles from './Projects.module.scss';

type ProjectsProps = {
  className?: string;
  dict: Dictionary;
  isEmptyState?: boolean;
};

const Projects: FC<ProjectsProps> = ({
  className,
  dict,
  isEmptyState = false,
}) => {
  const projects = dict.pages.generic.projects;
  const getInTouchBtn = dict.pages.generic.buttons.getInTouch;

  const { emptyState, items } = projects;

  return (
    <ul className={clsx(styles.projects, className)}>
      {items.map((project) => {
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

      {isEmptyState && (
        <li className={clsx(styles.emptyState)}>
          <div className={styles.content}>
            <StarsIcon className={styles.icon} />
            <h3 className={styles.title}>{emptyState.title}</h3>
            <p className={styles.subtitle}>{emptyState.subtitle}</p>
            <GetInTouchBtn label={getInTouchBtn.label} />
          </div>
        </li>
      )}
    </ul>
  );
};

export default Projects;
