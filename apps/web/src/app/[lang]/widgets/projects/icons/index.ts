import { FC } from 'react';

import NeomaindIcon from '@/app/[lang]/widgets/projects/icons/NeomaindIcon';
import { ProjectId } from '@/shared/dictionaries/types/projectsTypes';
import { IconProps } from '@/shared/ui/icon/iconTypes';

export const PROJECT_ICONS: Partial<Record<ProjectId, FC<IconProps>>> = {
  neomaind: NeomaindIcon,
};
