import { Project, ProjectId } from '../types/projectsTypes';

type ProjectItemsType = {
  [K in ProjectId as Capitalize<K>]: Project<K>;
};
export const ProjectItems: ProjectItemsType = {
  Neomaind: {
    id: 'neomaind',
    showCase: {
      contentType: 'image',
      deviceType: {
        type: 'desktop',
      },
    },
  },
  Tatell: {
    id: 'tatell',
    showCase: {
      contentType: 'video',
      deviceType: {
        model: 'iphone13',
        type: 'mobile',
      },
    },
  },
} as const;
