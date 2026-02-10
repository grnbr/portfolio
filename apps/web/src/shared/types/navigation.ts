export enum NavItemId {
  About = 'about',
  Contact = 'contact',
  Home = 'home',
  More = 'more',
  Techs = 'techs',
  Work = 'work',
}

export enum NavSocialId {
  Github = 'github',
  Gmail = 'gmail',
  LinkedIn = 'linkedin',
  Telegram = 'telegram',
}

type NavLinkId = Exclude<NavItemId, NavItemId.More>;

type NavLinkItem = {
  href: string;
  id: NavLinkId;
  title: string;
  type: 'link';
};

type NavActionItem = {
  id: NavItemId.More;
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
