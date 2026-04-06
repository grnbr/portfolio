export type TechItem<I extends string = string> = {
  id: I;
  label: string;
};

export type DevTechItemsId =
  | 'docker'
  | 'git'
  | 'jest'
  | 'nextjs'
  | 'nodejs'
  | 'react'
  | 'react-query'
  | 'scss'
  | 'typescript';

export type DevTechItemsKeys = Capitalize<DevTechItemsId>;

export const DevTechItems = {
  Docker: {
    id: 'docker',
    label: 'Docker',
  },

  Git: {
    id: 'git',
    label: 'Git',
  },

  Jest: {
    id: 'jest',
    label: 'Jest',
  },

  Nextjs: {
    id: 'nextjs',
    label: 'Next.js',
  },

  Nodejs: {
    id: 'nodejs',
    label: 'Node.js',
  },

  React: {
    id: 'react',
    label: 'React',
  },

  'React-query': {
    id: 'react-query',
    label: 'React Query',
  },

  Scss: {
    id: 'scss',
    label: 'SCSS',
  },

  Typescript: {
    id: 'typescript',
    label: 'TypeScript',
  },
} as const satisfies Record<DevTechItemsKeys, TechItem<DevTechItemsId>>;

export type AppItemsId = 'chrome' | 'neovim';

export type AppItemsKeys = Capitalize<AppItemsId>;

export const AppItems = {
  Chrome: {
    id: 'chrome',
    label: 'Chrome',
  },
  Neovim: {
    id: 'neovim',
    label: 'Neovim',
  },
} as const satisfies Record<AppItemsKeys, TechItem<AppItemsId>>;

export type OsItemsId = 'linux';

export type OsItemsKeys = Capitalize<OsItemsId>;

export const OsItems = {
  Linux: {
    id: 'linux',
    label: 'Linux',
  },
} as const satisfies Record<OsItemsKeys, TechItem<OsItemsId>>;
