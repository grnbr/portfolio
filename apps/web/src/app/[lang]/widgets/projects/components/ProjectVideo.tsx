'use client';

import clsx from 'clsx';
import { FC, useEffect, useRef, useState } from 'react';

import { ProjectId, ShowCase } from '@/shared/dictionaries/types/projectsTypes';
import Loader from '@/shared/ui/loader/Loader';

import styles from './ProjectShowcase.module.scss';

type ProjectVideoProps = {
  deviceClassName: string;
  deviceType: ShowCase['deviceType'];
  projectId: ProjectId;
};

const ProjectVideo: FC<ProjectVideoProps> = ({
  deviceClassName,
  deviceType,
  projectId,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) video.play();
        else video.pause();
      },
      { threshold: 0.3 },
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {!isPlaying && (
        <div className={styles.loaderWrapper}>
          <Loader options={{ color: 'white' }} />
        </div>
      )}
      <video
        className={clsx(styles.video, deviceClassName)}
        loop
        muted
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        playsInline
        preload="none"
        ref={videoRef}
      >
        <source src={`/projects/${projectId}/${deviceType.type}-video.webm`} />
      </video>
    </>
  );
};

export default ProjectVideo;
