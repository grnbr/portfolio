type NavigationItem = {
  href: string;
  id: string;
};

export const NavigationItems = {
  About: { href: '/about', id: 'about' },
  Contact: { href: '/contact', id: 'contact' },
  Home: { href: '/', id: 'home' },
  TechStack: { href: '/tech-stack', id: 'tech-stack' },
  Work: { href: '/work', id: 'work' },
} as const satisfies Record<string, NavigationItem>;

export const NavSocialIds = {
  Github: 'github',
  Gmail: 'gmail',
  LinkedIn: 'linkedin',
  Telegram: 'telegram',
} as const satisfies Record<string, string>;
