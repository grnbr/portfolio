import { ParagraphWithLinks } from '@/shared/types';
import { Project } from '@/shared/types/data';
import { HeroNavigation, NavHome, Navigation } from '@/shared/types/navigation';

type ButtonDict = {
  href?: string;
  label: string;
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

type Paragraph = {
  text: string[];
  title: string;
};

export type Dictionary = {
  about: {
    afterword: string;
    closingParagraph: ParagraphWithLinks;
    header: {
      subtitle: string;
      title: string;
    };
    textContent: Paragraph[];
  };
  buttons: {
    getInTouch: ButtonDict;
    seeMyResume: ButtonDict;
  };
  contact: {
    form: {
      email: { label: string; placeholder: string };
      name: { label: string; placeholder: string };
      'send-btn': string;
      subject: { label: string; placeholder: string };
      'textarea-placeholder': string;
      title: string;
    };
    subtitle: string;
    title: string;
  };
  'dropdown-nav': {
    href: string;
    title: string;
  }[];
  footer: {
    underLogoText: string;
  };
  header: {
    buttons: {
      more: ButtonDict & { id: 'more' };
    };
  };
  home: {
    contactme: {
      subtitle: string;
      title: string;
    };
    hero: {
      greeting: string;
      intro: string;
      name: string;
      pronoun: string;
    };
    navigation: {
      items: HeroNavigation;
      title: string;
    };
    selectedWork: {
      projects: Project[];
      title: string;
    };
  };
  images: {
    portrait: {
      alt: string;
    };
  };
  navigation: Navigation;

  tech: {
    content: {
      'tech-items': {
        logo: string;
        name: string;
        tag: string;
      }[];
      title: string;
    };
    subtitle: string;
    title: string;
  };

  themes: {
    dark: string;
    light: string;
    title: string;
  };

  work: {
    subtitle: string;
    title: string;
  };
};
