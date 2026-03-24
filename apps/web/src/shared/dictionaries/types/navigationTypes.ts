import { NavigationItems, NavSocialItems } from '@/shared/constants/navigation';

export type NavigationId = 'about' | 'contact' | 'home' | 'techstack' | 'work';
export type NavigationSocialId = 'github' | 'gmail' | 'linkedin' | 'telegram';
export type NavigationHref =
  (typeof NavigationItems)[keyof typeof NavigationItems]['href'];
export type NavSocialHrefs =
  (typeof NavSocialItems)[keyof typeof NavSocialItems]['href'];

type NavItem<K extends keyof typeof NavigationItems> = {
  href: (typeof NavigationItems)[K]['href'];
  id: (typeof NavigationItems)[K]['id'];
  label: string;
};

type NavSocialItem<K extends keyof typeof NavSocialItems> = {
  href: (typeof NavSocialItems)[K]['href'];
  id: (typeof NavSocialItems)[K]['id'];
  label: string;
};

export type NavHome = NavItem<'Home'>;

export type PrimaryNavigation = [
  NavHome,
  NavItem<'About'>,
  NavItem<'Work'>,
  NavItem<'Techstack'>,
  NavItem<'Contact'>,
];

type SocialNavigation = [
  NavSocialItem<'Linkedin'>,
  NavSocialItem<'Telegram'>,
  NavSocialItem<'Github'>,
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
  {
    href: (typeof NavigationItems)['About']['href'];
    id: (typeof NavigationItems)['About']['id'];
    subtitle: string;
    title: string;
  },
  {
    href: (typeof NavigationItems)['Techstack']['href'];
    id: (typeof NavigationItems)['Techstack']['id'];
    subtitle: string;
    title: string;
  },
];
