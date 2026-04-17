import clsx from 'clsx';
import Image from 'next/image';
import { FC } from 'react';

import GetInTouchBtn from '@/shared/components/buttons/GetInTouchBtn';
import { Dictionary } from '@/shared/dictionaries/types';
import ButtonLink from '@/shared/ui/button/ButtonLink';
import Icon from '@/shared/ui/icon/Icon';
import ArrowRightIcon from '@/shared/ui/icon/icons/ArrowRightIcon';
import StarsIcon from '@/shared/ui/icon/icons/StarsIcon';

import ProjectShowcase from './components/ProjectShowcase';
import { PROJECT_ICONS } from './icons';
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
        const LogoTsx = PROJECT_ICONS[project.id];

        return (
          <li className={styles.project} key={project.id}>
            <div className={styles.textContent}>
              <span className={styles.logoWrapper}>
                {LogoTsx ? (
                  <LogoTsx />
                ) : (
                  <Image
                    alt={`${project.id}-logo`}
                    height="70"
                    src={`/projects/${project.id}/logo.svg`}
                    width="70"
                  />
                )}
              </span>

              <h2 className={styles.title}>{project.title}</h2>
              <div className={styles.description}>
                {project.description.map((item, i) =>
                  item.type === 'text' ? (
                    <p className={styles.text} key={i}>
                      {item.value}
                    </p>
                  ) : (
                    <ul className={styles.list} key={i}>
                      {item.items.map((item, i) => (
                        <li className={styles.listItem} key={i}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  ),
                )}
              </div>
              {project.linkBtn && (
                <ButtonLink href={project.linkBtn.href} target="_blank">
                  {project.linkBtn.label}
                  <Icon>
                    <ArrowRightIcon />
                  </Icon>
                </ButtonLink>
              )}
            </div>

            <div className={styles.showcaseContainer}>
              <ProjectShowcase
                projectId={project.id}
                showCase={project.showCase}
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
