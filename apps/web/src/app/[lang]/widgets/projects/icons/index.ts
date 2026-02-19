import { FC } from 'react';

import TattellIcon from '@/app/[lang]/widgets/projects/icons/TattellIcon';
import { ProjectId } from '@/shared/types/data';
import { IconProps } from '@/shared/ui/icon/Icon';

export const PROJECT_ICONS: Record<ProjectId, FC<IconProps>> = {
  tatell: TattellIcon,
};
