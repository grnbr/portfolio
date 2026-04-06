import {
  AppItems,
  AppItemsKeys,
  DevTechItems,
  DevTechItemsKeys,
  OsItems,
  OsItemsKeys,
} from '../constants/techItems';

export type TechGroupKeyMap = {
  Apps: 'apps';
  Dev: 'dev';
  Os: 'os';
};
export type TechGroupKeys = keyof TechGroupKeyMap;
export type TechGroupKeyValues = TechGroupKeyMap[keyof TechGroupKeyMap];

export type DictTechItem = {
  tag?: string;
};

export type DevTechStackItem<K extends DevTechItemsKeys> =
  (typeof DevTechItems)[K] & DictTechItem;

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

export type AppItem<K extends AppItemsKeys> = (typeof AppItems)[K] &
  DictTechItem;

type AppTechStackItems = [AppItem<'Neovim'>, AppItem<'Chrome'>];

export type OsItem<K extends OsItemsKeys> = (typeof OsItems)[K] & DictTechItem;

type OsTechStackItems = [OsItem<'Linux'>];
type TechGroup<K extends TechGroupKeys, I> = {
  groupKey: TechGroupKeyMap[K];
  items: I;
  title: string;
};

export type TechStackGroups = [
  TechGroup<'Dev', DevTechStackItems>,
  TechGroup<'Apps', AppTechStackItems>,
  TechGroup<'Os', OsTechStackItems>,
];
