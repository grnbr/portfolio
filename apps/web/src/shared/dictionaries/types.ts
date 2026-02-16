import { Navigation } from '@/shared/types/navigation';

type ButtonDict = {
  href?: string;
  icon?: string;
  label: string;
};

type Project = {
  href: string;
  icon: string;
  id: string;
  img: string;
  text: string;
  textBtn: 'Visit Site';
  title: string;
};

export type DictionaryData = {
  projects: Project[];
};

export type Dictionary = {
  about: {
    appeal: string;
    'closing-text': string;
    'iam-paragraph': { text: string; title: string };
    'ido-paragraph': { text: string; title: string };
    subtitle: string;
    title: string;
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
    elsewhere: string;
    links: {
      links: { href: string; title: string }[];
      title: string;
    };
    rights: string;
    'underlogo-text': string;
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
    selectedWork: {
      projects: Project[];
      title: string;
    };
    widgets: {
      items: {
        href: string;
        id: string;
        img: string;
        subtitle: string;
        title: string;
      }[];
      title: string;
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
