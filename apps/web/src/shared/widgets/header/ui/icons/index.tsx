import { FC } from 'react';

import { NavigationSocialId } from '@/shared/dictionaries/types/navigationTypes';
import MessageIcon from '@/shared/ui/icon/icons/MessageIcon';
import GithubIcon from '@/shared/ui/icon/icons/socials/GithubIcon';
import LinkedInIcon from '@/shared/ui/icon/icons/socials/LinkedInIcon';
import { IconProps } from '@/shared/ui/icon/iconTypes';

export const NAV_HEADER_SOCIAL_ICONS: Partial<
  Record<NavigationSocialId, FC<IconProps>>
> = {
  github: GithubIcon,
  gmail: (props) => <MessageIcon {...props} options={{ variant: 'fill' }} />,
  linkedin: LinkedInIcon,
} as const;
