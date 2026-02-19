import { Navigation, NavSocialIds } from '@/shared/constants/navigation';

export type NavigationId = (typeof Navigation)[keyof typeof Navigation]['id'];
export type NavigationHref =
  (typeof Navigation)[keyof typeof Navigation]['href'];

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

type NavItem<K extends keyof typeof Navigation> = {
  href: (typeof Navigation)[K]['href'];
  id: (typeof Navigation)[K]['id'];
  label: string;
};

type NavSocialItem<K extends keyof typeof NavSocialIds> = {
  href: string;
  id: (typeof NavSocialIds)[K];
  label: string;
};

export type HeaderPrimaryNavigation = [
  NavItem<'Home'>,
  NavItem<'About'>,
  NavItem<'Work'>,
  NavItem<'Contact'>,
  NavItem<'TechStack'>,
];

type HeaderSocialNavigation = [
  NavSocialItem<'LinkedIn'>,
  NavSocialItem<'Telegram'>,
  NavSocialItem<'Github'>,
];

export type HeaderNavigation = {
  primary: HeaderPrimaryNavigation;
  socials: HeaderSocialNavigation;
};

export type HeroNavigation = [
  {
    href: (typeof Navigation)['About']['href'];
    id: (typeof Navigation)['About']['id'];
    img: '/images/home/navigation/about-min.png';
    subtitle: string;
    title: string;
  },
  {
    href: (typeof Navigation)['TechStack']['href'];
    id: (typeof Navigation)['TechStack']['id'];
    img: '/images/home/navigation/tech-stack-min.png';
    subtitle: string;
    title: string;
  },
];
