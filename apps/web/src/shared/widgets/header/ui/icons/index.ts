import { FC } from 'react';

import { NavSocialMap } from '@/shared/dictionaries/constants/navigation';
import { NavigationSocialId } from '@/shared/dictionaries/types/navigationTypes';
import GithubIcon from '@/shared/ui/icon/icons/socials/GithubIcon';
import LinkedInIcon from '@/shared/ui/icon/icons/socials/LinkedInIcon';
import TelegramIcon from '@/shared/ui/icon/icons/socials/TelegramIcon';
import { IconProps } from '@/shared/ui/icon/iconTypes';

type NavigationSocialIdKeys = Exclude<
  NavigationSocialId,
  typeof NavSocialMap.Gmail.id
>;

export const NAV_HEADER_SOCIAL_ICONS: Record<
  NavigationSocialIdKeys,
  FC<IconProps>
> = {
  github: GithubIcon,
  linkedin: LinkedInIcon,
  telegram: TelegramIcon,
} as const satisfies Record<NavigationSocialIdKeys, FC<IconProps>>;
