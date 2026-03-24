import clsx from 'clsx';
import Image from 'next/image';
import { FC } from 'react';

import { ProjectId, ShowCase } from '@/shared/dictionaries/types/projectsTypes';

import styles from './ProjectShowcase.module.scss';
import ProjectVideo from './ProjectVideo';

type ProjectShowcaseProps = {
  projectId: ProjectId;
  showCase: ShowCase;
};

const ProjectShowcase: FC<ProjectShowcaseProps> = ({ projectId, showCase }) => {
  const { contentType, deviceType } = showCase;

  const getFrameOverlay = (deviceType: ShowCase['deviceType']): string => {
    if (deviceType.type === 'mobile')
      return `/projects/${deviceType.model}-frame-overlay.png`;
    return `/projects/${deviceType.type}-frame-overlay.png`;
  };

  const deviceClassName = clsx(
    styles[deviceType.type],
    deviceType.type === 'mobile' && [styles[deviceType.model]],
  );

  return (
    <div className={styles.projectShowcase}>
      <div className={clsx(styles.showcase, deviceClassName)}>
        <Image
          alt={`${deviceType} frame overlay`}
          className={styles.overlay}
          fill
          src={getFrameOverlay(deviceType)}
        />
        {contentType === 'video' ? (
          <>
            <div className={clsx(styles.posterWrapper, deviceClassName)}>
              <Image
                alt={`${deviceType.type} video poster`}
                className={clsx(styles.videoPoster)}
                fill
                src={`/projects/${projectId}/${deviceType.type}-video-poster.webp`}
              />
            </div>
            <ProjectVideo
              deviceClassName={deviceClassName}
              deviceType={deviceType}
              projectId={projectId}
            />
          </>
        ) : (
          <div className={clsx(styles.imageWrapper, deviceClassName)}>
            <Image
              alt={`${projectId}-showcase`}
              className={clsx(styles.screen, deviceClassName)}
              fill
              src={`/projects/${projectId}/${deviceType.type}-image.webp`}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectShowcase;
