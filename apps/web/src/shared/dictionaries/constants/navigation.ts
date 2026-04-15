import { EMAIL } from '@/shared/constants';

import {
  NavigationId,
  NavigationSocialId,
  NavItem,
  NavSocialItem,
  SocialNavigation,
} from '../types/navigationTypes';

type NavigationMapType = {
  [K in NavigationId as Capitalize<K>]: NavItem<K>;
};
type NavSocialMapType = {
  [K in NavigationSocialId as Capitalize<K>]: NavSocialItem<K>;
};

export const NavigationMap: NavigationMapType = {
  About: { href: '/about', id: 'about' },
  Contact: { href: '/contact', id: 'contact' },
  Home: { href: '/', id: 'home' },
  ['Tech-stack']: { href: '/tech-stack', id: 'tech-stack' },
  Work: { href: '/work', id: 'work' },
} as const;

export const NavSocialMap: NavSocialMapType = {
  Github: {
    href: 'https://github.com/waterrDrinker',
    id: 'github',
    label: 'Github',
  },
  Gmail: {
    href: `mailto:${EMAIL}`,
    id: 'gmail',
    label: 'Gmail',
  },
  Linkedin: {
    href: 'https://www.linkedin.com/in/grigory-neubauer/',
    id: 'linkedin',
    label: 'LinkedIn',
  },
  Telegram: {
    href: 'https://t.me/grnbr',
    id: 'telegram',
    label: 'Telegram',
  },
} as const;

export const NavSocialTuple: SocialNavigation = [
  NavSocialMap.Linkedin,
  NavSocialMap.Telegram,
  NavSocialMap.Github,
  NavSocialMap.Gmail,
];
