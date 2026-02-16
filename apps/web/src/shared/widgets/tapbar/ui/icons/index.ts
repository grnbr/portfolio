import { FC } from 'react';

import { NavItemId, NavItemIds } from '@/shared/types/navigation';
import { IconProps } from '@/shared/ui/icon/Icon';
import BagIcon from '@/shared/ui/icon/icons/BagIcon';
import TechIcon from '@/shared/ui/icon/icons/BrowserIcon';
import HomeIcon from '@/shared/ui/icon/icons/HomeIcon';
import MessageIcon from '@/shared/ui/icon/icons/MessageIcon';
import UserIcon from '@/shared/ui/icon/icons/UserIcon';

export const NAV_TAPBAR_ICONS: Record<
  Exclude<NavItemId, typeof NavItemIds.More>,
  FC<IconProps>
> = {
  about: UserIcon,
  contact: MessageIcon,
  home: HomeIcon,
  techs: TechIcon,
  work: BagIcon,
} as const;
