import { Navigation } from '@/shared/types/navigation';

export type Dictionary = {
  about: {
    appeal: string;
    'closing-text': string;
    getInTouch: string;
    'iam-paragraph': { text: string; title: string };
    'ido-paragraph': { text: string; title: string };
    subtitle: string;
    title: string;
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

  getInTouch: {
    href: string;
    title: string;
  };

  home: {
    contactme: {
      getInTouch: string;
      subtitle: string;
      title: string;
    };

    hero: {
      getInTouch?: string;
      intro: string;
      name: string;
      pronoun: string;
      'resume-btn': string;
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

  projects: {
    placeholder: {
      getInTouch: string;
      icon: string;
      subtitle: string;
      title: string;
    };
    title: string;

    works: {
      href: string;
      icon: string;
      id: string;
      name: string;
      presentationImg: string;
      text: string;
      'text-btn': string;
      title: string;
    }[];
  };

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
