import { EMAIL } from '.';
import {
  NavigationId,
  NavigationSocialId,
} from '../dictionaries/types/navigationTypes';

type NavigationItem<ID extends string> = {
  href: string;
  id: ID;
};

type NavigationItemsKeys = Capitalize<NavigationId>;
type NavSocialKeys = Capitalize<NavigationSocialId>;

export const NavigationItems = {
  About: { href: '/about', id: 'about' },
  Contact: { href: '/contact', id: 'contact' },
  Home: { href: '/', id: 'home' },
  Techstack: { href: '/tech-stack', id: 'techstack' },
  Work: { href: '/work', id: 'work' },
} as const satisfies Record<NavigationItemsKeys, NavigationItem<NavigationId>>;

export const NavSocialItems = {
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
} as const satisfies Record<NavSocialKeys, NavigationItem<NavigationSocialId>>;
