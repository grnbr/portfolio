import {
  NavigationMap,
  NavSocialMap,
  NavSocialTuple,
} from '@/shared/dictionaries/constants/navigation';
import { Dictionary } from '@/shared/dictionaries/types';

import { ThemeMap } from '../types/theme';
import { ProjectItems } from './constants/projects';
import { AppMap, DevTechMap, OsMap } from './constants/techItems';
import { ContactInputMap } from './types/contactTypes';
import { DictionaryData } from './types/sharedTypes';

export const dictionaryData: DictionaryData = {
  navigation: {
    home: {
      href: NavigationMap.Home.href,
      id: NavigationMap.Home.id,
      label: 'Home',
    },
  },
} as const;

export const dictionary: Dictionary = {
  layout: {
    footer: {
      underLogoText: 'Thanks for stopping by',
    },
    generic: {
      navigation: {
        home: dictionaryData.navigation.home,
        primary: {
          items: [
            dictionaryData.navigation.home,
            {
              ...NavigationMap.About,
              label: 'About',
            },
            {
              label: 'Work',
              ...NavigationMap.Work,
            },
            {
              label: 'Techs',
              ...NavigationMap['Tech-stack'],
            },
            {
              label: 'Contact',
              ...NavigationMap.Contact,
            },
          ],
          title: 'Links',
        },
        socials: {
          items: NavSocialTuple,
          title: 'Elsewhere',
        },
      },
      theme: [
        { label: 'Light', value: ThemeMap.Light },
        { label: 'System', value: ThemeMap.System },
        { label: 'Dark', value: ThemeMap.Dark },
      ],
    },
    header: {
      buttons: {
        more: {
          id: 'more',
          label: 'More',
        },
        themeSwitcher: {
          ariaLabel: {
            close: 'Close Theme Menu',
            open: 'Open Theme Menu',
          },
        },
      },
    },
  },

  pages: {
    about: {
      afterword: 'Let’s build something great.',
      closingParagraph: {
        links: {
          'e-mail': {
            href: NavSocialMap.Gmail.href,
          },
          Telegram: {
            href: NavSocialMap.Telegram.href,
          },
        },
        text: 'Feel free to reach out via e-mail or write me on Telegram.',
      },
      header: {
        subtitle: 'Who I am and what I do',
        title: 'A little bit about me',
      },
      textContent: [
        {
          text: [
            "I'm",
            'Grigory',
            'front-end developer from Moscow, Russia 🇷🇺.',
          ],
          title: 'Who I am',
        },
        {
          text: [
            "With one year of invaluable experience in my role at AlgaTop –– a tech company based here in Moscow, I have honed my skills in React.js, Next.js, TailwindCSS, and TypeScript, allowing me to craft seamless and interactive user experiences. During my time at AlgaTop, I played a pivotal role in enhancing the user experience and driving sales growth for clients on the Kaspi platform. Leveraging my expertise in frontend development, I contributed to achieving remarkable results, including doubling or tripling sales, elevating clients' stores to the top position, and automating routine tasks effectively.",
          ],
          title: 'What I do',
        },
      ],
    },
    contact: {
      form: {
        buttons: {
          send: {
            label: 'Send',
          },
        },

        fields: {
          inputs: [
            {
              ...ContactInputMap.Email,
              errors: {
                invalid_format: 'Invalid email address',
                too_small: 'Email is required',
              },
              label: 'Email:',
              placeholder: 'Enter your email address',
            },
            {
              ...ContactInputMap.Name,
              label: 'Name:',
              placeholder: 'Enter your name',
            },
            {
              ...ContactInputMap.Subject,
              label: 'Subject:',
              placeholder: 'Enter subject',
            },
          ],
          textarea: {
            errors: {
              too_small: 'Message is required',
            },
            id: 'message',
            label: null,
            placeholder: 'Write your message here',
          },
        },

        modal: {
          success: {
            closeBtn: 'Close',
            title: 'Message sent!',
          },
        },

        title: 'New message',
      },
      header: {
        subtitle: 'Let’s build something awesome',
        title: 'Get in touch',
      },
    },
    generic: {
      buttons: {
        getInTouch: {
          label: 'Get in touch',
        },
        seeMyResume: {
          href: '/resume/Grigory_Neubauer_Frontend_Resume.pdf',
          label: 'See my resume',
        },
      },
      images: {
        portrait: {
          alt: 'Grigory',
        },
      },
      projects: {
        emptyState: {
          subtitle: "Let's turn your idea into visual reality",
          title: 'Your project here',
        },
        items: [
          {
            ...ProjectItems.Tatell,
            description: [
              {
                type: 'text',
                value: 'Developed a landing page for Tatell. Key features:',
              },
              {
                items: [
                  'animated intro',
                  'flexible typography and UI for popular resolutions',
                  'scrollable presentation section',
                  'contact form with email delivery',
                ],
                type: 'list',
              },
            ],
            title: 'Tatell — end-to-end brand and product creation',
          },
          {
            ...ProjectItems.Neomaind,
            description: [
              {
                type: 'text',
                value:
                  'Inherited a project with a ready UI kit, performed large-scale refactoring and optimization. Developed two products to stable release — an e-commerce store and an admin panel. Integrated the client-side of a payment gateway, reduced page load time by ~40%, and introduced testing that decreased production errors.',
              },
            ],
            title:
              'Neomaind Shop — next-generation designer furniture marketplace',
          },
        ],
      },
    },
    home: {
      contactme: {
        subtitle:
          'Want to discuss an opportunity to create something great? I’m ready when you are.',
        title: "Let's work together",
      },
      hero: {
        greeting: 'Hi 👋',
        intro:
          'A front-end engineer helping startups turn their visions into a digital reality. I specialize in designing and building modern mobile and web-based apps.',
        name: 'Grigory',
        pronoun: 'I’m',
      },
      navigation: {
        items: [
          {
            ...NavigationMap.About,
            subtitle: 'Who I am and what I do',
            title: 'About me',
          },
          {
            subtitle: 'The dev tools, apps and OS I use',
            ...NavigationMap['Tech-stack'],
            title: 'Tech Stack',
          },
        ],
        title: 'Get to know me',
      },
      selectedWork: {
        title: 'Selected Work',
      },
    },
    techStack: {
      content: [
        {
          groupKey: 'dev',
          items: [
            {
              ...DevTechMap.Typescript,
              tag: 'Language',
            },
            {
              ...DevTechMap.React,
              tag: 'Library',
            },
            {
              ...DevTechMap.Nextjs,
              tag: 'Framework',
            },
            {
              ...DevTechMap['React-query'],
              tag: 'Data Fetching library',
            },
            {
              ...DevTechMap.Scss,
              tag: 'Preprocessor',
            },
            {
              ...DevTechMap.Git,
              tag: 'Version control system',
            },
            {
              ...DevTechMap.Jest,
              tag: 'Testing framework',
            },
            {
              ...DevTechMap.Docker,
              tag: 'Containerization platform',
            },
            {
              ...DevTechMap.Nodejs,
              tag: 'Runtime environment',
            },
          ],
          title: 'Dev',
        },
        {
          groupKey: 'apps',
          items: [
            {
              ...AppMap.Neovim,
              tag: 'Editor',
            },
            {
              ...AppMap.Chrome,
              tag: 'Browser',
            },
          ],
          title: 'Программы',
        },
        {
          groupKey: 'os',
          items: [
            {
              ...OsMap.Linux,
            },
          ],
          title: 'Операционные системы',
        },
      ],
      header: {
        subtitle: 'The dev tools I use',
        title: 'Tech Stack',
      },
    },
    work: {
      header: {
        subtitle: 'Projects and ideas I’ve worked on',
        title: 'Projects',
      },
    },
  },
} as const;

export type DictionaryEn = typeof dictionary;
