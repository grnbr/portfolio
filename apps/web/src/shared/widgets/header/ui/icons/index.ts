import { FC } from 'react';

import { NavSocialIds } from '@/shared/constants/navigation';
import { NavigationSocialId } from '@/shared/types/navigation';
import { IconProps } from '@/shared/ui/icon/Icon';
import GithubIcon from '@/shared/ui/icon/icons/socials/Github';
import LinkedInIcon from '@/shared/ui/icon/icons/socials/LinkedIn';
import TelegramIcon from '@/shared/ui/icon/icons/socials/Telegram';

export const NAV_HEADER_SOCIAL_ICONS: Record<
  Exclude<NavigationSocialId, typeof NavSocialIds.Gmail>,
  FC<IconProps>
> = {
  github: GithubIcon,
  linkedin: LinkedInIcon,
  telegram: TelegramIcon,
} as const;
