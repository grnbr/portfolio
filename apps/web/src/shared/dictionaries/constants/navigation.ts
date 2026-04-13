import { EMAIL } from '@/shared/constants';

import {
  NavigationId,
  NavigationSocialId,
  NavItem,
} from '../types/navigationTypes';

type NavigationMapType = {
  [K in NavigationId as Capitalize<K>]: NavItem<K, true>;
};
type NavSocialMapType = {
  [K in NavigationSocialId as Capitalize<K>]: NavItem<K>;
};

export const NavigationMap: NavigationMapType = {
  About: { href: '/about', id: 'about' },
  Contact: { href: '/contact', id: 'contact' },
  Home: { href: '/', id: 'home' },
  ['Tech-stack']: { href: '/tech-stack', id: 'tech-stack' },
  Work: { href: '/work', id: 'work' },
} as const;

export const NavSocialMap: NavSocialMapType = {
  Github: { href: 'https://github.com/waterrDrinker', id: 'github' },
  Gmail: {
    href: `mailto:${EMAIL}`,
    id: 'gmail',
  },
  Linkedin: {
    href: 'www.linkedin.com/in/григорий-найбауер-248a57381',
    id: 'linkedin',
  },
  Telegram: {
    href: 'https://t.me/grnbr',
    id: 'telegram',
  },
} as const;
