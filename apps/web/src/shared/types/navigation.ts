import { NavigationItems, NavSocialIds } from '@/shared/constants/navigation';

export type NavigationId =
  (typeof NavigationItems)[keyof typeof NavigationItems]['id'];
export type NavigationHref =
  (typeof NavigationItems)[keyof typeof NavigationItems]['href'];

export type NavigationSocialId =
  (typeof NavSocialIds)[keyof typeof NavSocialIds];

// type NavigationItem = {
//   href: NavigationHref;
//   id: NavigationId;
//   label: string;
// };

// type NavigationSocialItem = {
//   href: string;
//   id: NavigationSocialId;
//   label: string;
// };

// export type PrimaryNavigation = NavigationItem[];

type NavItem<K extends keyof typeof NavigationItems> = {
  href: (typeof NavigationItems)[K]['href'];
  id: (typeof NavigationItems)[K]['id'];
  label: string;
};

type NavSocialItem<K extends keyof typeof NavSocialIds> = {
  href: string;
  id: (typeof NavSocialIds)[K];
  label: string;
};

export type NavHome = NavItem<'Home'>;

export type PrimaryNavigation = [
  NavHome,
  NavItem<'About'>,
  NavItem<'Work'>,
  NavItem<'Contact'>,
  NavItem<'TechStack'>,
];

type SocialNavigation = [
  NavSocialItem<'LinkedIn'>,
  NavSocialItem<'Telegram'>,
  NavSocialItem<'Github'>,
];

export type Navigation = {
  home: NavHome;
  primary: {
    items: PrimaryNavigation;
    title: null | string;
  };
  socials: {
    items: SocialNavigation;
    title: null | string;
  };
};

export type HeroNavigation = [
  {
    href: (typeof NavigationItems)['About']['href'];
    id: (typeof NavigationItems)['About']['id'];
    img: '/images/home/navigation/about-min.png';
    subtitle: string;
    title: string;
  },
  {
    href: (typeof NavigationItems)['TechStack']['href'];
    id: (typeof NavigationItems)['TechStack']['id'];
    img: '/images/home/navigation/tech-stack-min.png';
    subtitle: string;
    title: string;
  },
];
