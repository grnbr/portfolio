export const NavItemIds = {
  About: 'about',
  Contact: 'contact',
  Home: 'home',
  More: 'more',
  Techs: 'techs',
  Work: 'work',
} as const;

export const NavSocialIds = {
  Github: 'github',
  Gmail: 'gmail',
  LinkedIn: 'linkedin',
  Telegram: 'telegram',
} as const;

export type NavItemId = (typeof NavItemIds)[keyof typeof NavItemIds];
export type NavSocialId = (typeof NavSocialIds)[keyof typeof NavSocialIds];

type NavLinkId = Exclude<NavItemId, typeof NavItemIds.More>;

type NavLinkItem = {
  href: string;
  id: NavLinkId;
  title: string;
  type: 'link';
};

type NavActionItem = {
  id: typeof NavItemIds.More;
  title: string;
  type: 'action';
};

type NavLinkSocialItem = {
  href: string;
  id: NavSocialId;
  title: string;
  type: 'link';
};

export type NavigationItem = NavActionItem | NavLinkItem;
export type NavigationSocialItem = NavLinkSocialItem;

export type Navigation = {
  primary: NavigationItem[];
  socials: NavigationSocialItem[];
};
