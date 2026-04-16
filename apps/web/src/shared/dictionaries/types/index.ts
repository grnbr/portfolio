import {
  HeroNavigation,
  Navigation,
} from '@/shared/dictionaries/types/navigationTypes';
import { ProjectList } from '@/shared/dictionaries/types/projectsTypes';

import { TechStackGroups } from '../types/techTypes';
import { ContactInputsTuple, ContactTextareaMap } from './contactTypes';
import {
  ButtonDict,
  FormField,
  Page,
  PageHeader,
  Paragraph,
  ParagraphWithLinks,
  ThemeList,
} from './sharedTypes';

export type Dictionary = {
  layout: {
    footer: {
      underLogoText: string;
    };

    generic: {
      navigation: Navigation;
      theme: ThemeList;
    };
    header: {
      buttons: {
        more: ButtonDict & { id: 'more' };
        themeSwitcher: {
          ariaLabel: {
            close: string;
            open: string;
          };
        };
      };
    };
  };

  pages: {
    about: Page & {
      afterword: string;
      closingParagraph: ParagraphWithLinks;
      header: PageHeader;
      textContent: Paragraph[];
    };

    contact: Page & {
      form: {
        buttons: {
          send: {
            label: string;
          };
        };
        fields: {
          inputs: ContactInputsTuple;
          textarea: FormField<typeof ContactTextareaMap.Message>;
        };
        modal: {
          success: {
            closeBtn: string;
            title: string;
          };
        };
        title: string;
      };
      header: PageHeader;
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
      meta: {
        titlePostfix: string;
      };
      projects: {
        emptyState: {
          subtitle: string;
          title: string;
        };
        items: ProjectList;
      };
    };

    home: Page & {
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

    'tech-stack': Page & {
      content: TechStackGroups;
      header: PageHeader;
    };

    work: Page & {
      header: PageHeader;
    };
  };
};
