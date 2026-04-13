import { NavigationMap } from '@/shared/dictionaries/constants/navigation';

export type NavigationId = 'about' | 'contact' | 'home' | 'tech-stack' | 'work';
export type NavigationSocialId = 'github' | 'gmail' | 'linkedin' | 'telegram';

export type NavItem<ID extends string, Primary extends boolean = false> = {
  href: Primary extends true ? (ID extends 'home' ? '/' : `/${ID}`) : string;
  id: ID;
};
type NavItemDict<ID extends NavigationId> = NavItem<ID, true> & {
  label: string;
};
type NavSocialItemDict<ID extends NavigationSocialId> = NavItem<ID> & {
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

type SocialNavigation = [
  NavSocialItemDict<'linkedin'>,
  NavSocialItemDict<'telegram'>,
  NavSocialItemDict<'github'>,
];

export type Navigation = {
  home: NavHome;
  primary: {
    items: PrimaryNavigation;
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
