import { Project } from "@/shared/types/data";
import { NavHome } from "@/shared/types/navigationTypes";

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

type Socials = {
  Email: {
    href: string;
    text: string;
  };
  Github: {
    href: string;
  };
  LinkedIn: {
    href: string;
    text: string;
  };
  Resume: {
    href: string;
    text: string;
  };
  Telegram: {
    href: string;
    text: string;
  };
};

export type DictionaryData = {
  navigation: {
    home: NavHome;
    socials: Socials;
  };
  projects: Project[];
};
