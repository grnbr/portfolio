import { NavHome } from '@/shared/dictionaries/types/navigationTypes';

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

export type FormField<Id extends string> = {
  id: Id;
  label: null | string;
  placeholder: string;
};

export type DictionaryData = {
  navigation: {
    home: NavHome;
  };
};
