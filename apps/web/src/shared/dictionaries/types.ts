import { ParagraphWithLinks } from '@/shared/types';
import { Project } from '@/shared/types/data';
import { HeroNavigation, NavHome, Navigation } from '@/shared/types/navigation';

export type PageHeader = {
  subtitle: string;
  title: string;
};

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
  layout: {
    footer: {
      underLogoText: string;
    };

    generic: {
      navigation: Navigation;
    };
    header: {
      buttons: {
        more: ButtonDict & { id: 'more' };
      };
    };

    themes: {
      dark: string;
      light: string;
      title: string;
    };
  };

  pages: {
    about: {
      afterword: string;
      closingParagraph: ParagraphWithLinks;
      header: PageHeader;
      textContent: Paragraph[];
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
    generic: {
      buttons: {
        getInTouch: ButtonDict;
        seeMyResume: ButtonDict;
      };
      images: {
        portrait: {
          alt: string;
        };
      };
      projects: {
        emptyState: {
          subtitle: string;
          title: string;
        };
        items: Project[];
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
        title: string;
      };
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

    work: {
      header: PageHeader;
    };
  };
};
