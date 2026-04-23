import { EMAIL } from '@/shared/constants';

import {
  NavigationId,
  NavItem,
  ResourceNavigationId,
  ResourceNavItemDict,
  SocialNavigation,
  SocialNavigationId,
  SocialNavItemDict,
} from '../types/navigationTypes';

type NavigationMapType = {
  [K in NavigationId as Capitalize<K>]: NavItem<K>;
};
type SocialNavMapType = {
  [K in SocialNavigationId as Capitalize<K>]: SocialNavItemDict<K>;
};
type ResourceNavMapType = {
  [K in ResourceNavigationId as Capitalize<K>]: Omit<
    ResourceNavItemDict<K>,
    'label'
  >;
};

const GITHUB_URL = 'https://github.com/grnbr';

export const NavigationMap: NavigationMapType = {
  About: { href: '/about', id: 'about' },
  Contact: { href: '/contact', id: 'contact' },
  Home: { href: '/', id: 'home' },
  ['Tech-stack']: { href: '/tech-stack', id: 'tech-stack' },
  Work: { href: '/work', id: 'work' },
} as const;

export const SocialNavMap: SocialNavMapType = {
  Github: {
    href: GITHUB_URL,
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
  SocialNavMap.Linkedin,
  SocialNavMap.Telegram,
  SocialNavMap.Github,
  SocialNavMap.Gmail,
];

export const ResourceNavMap: ResourceNavMapType = {
  Figma: {
    href: 'https://www.figma.com/files/team/1248244319164565493/resources/community/file/1266863403759514317?q_id=2452efbd-7d9b-49e4-9e98-e07e2e4cbc06',
    id: 'figma',
  },
  'Source-code': {
    href: `${GITHUB_URL}/Portfolio`,
    id: 'source-code',
  },
} as const;
