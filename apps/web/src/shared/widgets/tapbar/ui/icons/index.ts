import BagIcon from '@/shared/ui/icons/BagIcon';
import TechIcon from '@/shared/ui/icons/BrowserIcon';
import HomeIcon from '@/shared/ui/icons/HomeIcon';
import MessageIcon from '@/shared/ui/icons/MessageIcon';
import UserIcon from '@/shared/ui/icons/UserIcon';

export const NAV_ICONS = {
  about: UserIcon,
  contact: MessageIcon,
  home: HomeIcon,
  techs: TechIcon,
  work: BagIcon,
} as const;

export type NavIconKey = keyof typeof NAV_ICONS;
