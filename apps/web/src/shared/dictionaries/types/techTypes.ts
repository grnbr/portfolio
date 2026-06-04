import { AppMap, DevTechMap, OsMap } from '../constants/techItems';

export type TechGroupName = 'apps' | 'dev' | 'os';

export type TechGroupKeyMap = {
  Apps: 'apps';
  Dev: 'dev';
  Os: 'os';
};

export type DevTechItemId =
  | 'docker'
  | 'git'
  | 'jest'
  | 'nextjs'
  | 'nodejs'
  | 'react'
  | 'react-query'
  | 'scss'
  | 'typescript';
export type AppItemId = 'chrome' | 'neovim';
export type OsItemId = 'linux';
type DevTechItemKey = Capitalize<DevTechItemId>;
type AppItemKey = Capitalize<AppItemId>;
type OsItemKey = Capitalize<OsItemId>;

export type TechItem<ID extends string> = {
  id: ID;
  label: string;
};

export type TechItemDict = {
  tag?: string;
};

export type DevTechStackItem<K extends DevTechItemKey> =
  (typeof DevTechMap)[K] & TechItemDict;
export type AppItem<K extends AppItemKey> = (typeof AppMap)[K] & TechItemDict;
export type OsItem<K extends OsItemKey> = (typeof OsMap)[K] & TechItemDict;

type DevTechStackItems = [
  DevTechStackItem<'Typescript'>,
  DevTechStackItem<'React'>,
  DevTechStackItem<'Nextjs'>,
  DevTechStackItem<'React-query'>,
  DevTechStackItem<'Scss'>,
  DevTechStackItem<'Git'>,
  DevTechStackItem<'Jest'>,
  DevTechStackItem<'Docker'>,
  DevTechStackItem<'Nodejs'>,
];

type AppTechStackItems = [AppItem<'Neovim'>, AppItem<'Chrome'>];

type OsTechStackItems = [OsItem<'Linux'>];

type TechGroup<K extends TechGroupName, I> = {
  groupKey: K;
  items: I;
  title: string;
};

export type TechStackGroups = [
  TechGroup<'dev', DevTechStackItems>,
  TechGroup<'apps', AppTechStackItems>,
  TechGroup<'os', OsTechStackItems>,
];
