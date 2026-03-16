import { Project } from '@/shared/types/data';
import { HeroNavigation, Navigation } from '@/shared/types/navigationTypes';

import { TechStackGroups } from '../types/techTypes';
import { ButtonDict, PageHeader, Paragraph, ParagraphWithLinks } from './sharedTypes';

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

    techStack: {
      content: TechStackGroups;
      header: PageHeader;
    };

    work: {
      header: PageHeader;
    };
  };
};
