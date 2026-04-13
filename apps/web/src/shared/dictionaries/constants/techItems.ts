import {
  AppItemId,
  DevTechItemId,
  OsItemId,
  TechItem,
} from '../types/techTypes';

type DevTechMapType = {
  [K in DevTechItemId as Capitalize<K>]: TechItem<K>;
};

export const DevTechMap: DevTechMapType = {
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
} as const;

type AppMapType = {
  [K in AppItemId as Capitalize<K>]: TechItem<K>;
};

export const AppMap: AppMapType = {
  Chrome: {
    id: 'chrome',
    label: 'Chrome',
  },
  Neovim: {
    id: 'neovim',
    label: 'Neovim',
  },
} as const;

type OsMapType = {
  [K in OsItemId as Capitalize<K>]: TechItem<K>;
};

export const OsMap: OsMapType = {
  Linux: {
    id: 'linux',
    label: 'Linux',
  },
} as const;
