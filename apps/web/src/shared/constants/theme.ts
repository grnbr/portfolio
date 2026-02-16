const Themes = {
  Dark: 'dark',
  Light: 'light',
} as const;

export type Theme = (typeof Themes)[keyof typeof Themes];

export default Themes;
