import { NavigationMap } from '@/shared/dictionaries/constants/navigation';

export type NavigationId = 'about' | 'contact' | 'home' | 'tech-stack' | 'work';
export type SocialNavigationId = 'github' | 'gmail' | 'linkedin' | 'telegram';
export type ResourceNavigationId = 'figma' | 'source-code';

export type NavItem<ID extends NavigationId> = {
  href: ID extends 'home' ? '/' : `/${ID}`;
  id: ID;
};

type NavItemDict<ID extends NavigationId> = NavItem<ID> & {
  label: string;
};

export type SocialNavItemDict<ID extends SocialNavigationId> = {
  href: string;
  id: ID;
  label: string;
};

export type ResourceNavItemDict<ID extends ResourceNavigationId> = {
  href: string;
  id: ID;
  label: string;
};

export type NavHome = NavItemDict<'home'>;

export type PrimaryNavigation = [
  NavHome,
  NavItemDict<'about'>,
  NavItemDict<'work'>,
  NavItemDict<'tech-stack'>,
  NavItemDict<'contact'>,
];

export type SocialNavigation = [
  SocialNavItemDict<'linkedin'>,
  SocialNavItemDict<'telegram'>,
  SocialNavItemDict<'github'>,
  SocialNavItemDict<'gmail'>,
];

export type Navigation = {
  home: NavHome;
  primary: {
    items: PrimaryNavigation;
    title?: string;
  };
  resources: {
    items: [ResourceNavItemDict<'source-code'>, ResourceNavItemDict<'figma'>];
    title?: string;
  };
  socials: {
    items: SocialNavigation;
    title?: string;
  };
};

export type HeroNavigation = [
  (typeof NavigationMap)['About'] & {
    subtitle: string;
    title: string;
  },
  (typeof NavigationMap)['Tech-stack'] & {
    subtitle: string;
    title: string;
  },
];
