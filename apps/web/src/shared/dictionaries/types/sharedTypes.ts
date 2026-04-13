import { z } from 'zod';

export type ZodIssueCode = z.core.$ZodIssueCode;

import { NavHome } from '@/shared/dictionaries/types/navigationTypes';

import { ThemeItem } from '../../types/theme';

export type PageHeader = {
  subtitle: string;
  title: string;
};

export type ButtonDict = {
  href?: string;
  label: string;
};

export type Paragraph = {
  text: string[];
  title: string;
};

export type ParagraphWithLinks = {
  links: Record<string, { href: string }>;
  text: string;
};

export type FormField<
  Id extends string,
  Type extends React.HTMLInputTypeAttribute | undefined = undefined,
> = (Type extends undefined ? object : { type: Type }) & {
  errors?: {
    [K in ZodIssueCode]?: string;
  };
  id: Id;
  label: null | string;
  placeholder: string;
};

export type DictionaryData = {
  navigation: {
    home: NavHome;
  };
};

export type ThemeList = [
  ThemeItem<'light'>,
  ThemeItem<'system'>,
  ThemeItem<'dark'>,
];
