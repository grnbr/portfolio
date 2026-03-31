import { NavigationItems, NavSocialItems } from '@/shared/constants/navigation';
import { Dictionary } from '@/shared/dictionaries/types';

import { ProjectItems } from './constants/projects';
import { AppItems, DevTechItems, OsItems } from './constants/techItems';
import { DictionaryData } from './types/sharedTypes';

export const dictionaryData: DictionaryData = {
  navigation: {
    home: {
      href: NavigationItems.Home.href,
      id: NavigationItems.Home.id,
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
              ...NavigationItems.About,
              label: 'About',
            },
            {
              label: 'Work',
              ...NavigationItems.Work,
            },
            {
              label: 'Techs',
              ...NavigationItems.Techstack,
            },
            {
              label: 'Contact',
              ...NavigationItems.Contact,
            },
          ],
          title: 'Links',
        },
        socials: {
          items: [
            {
              ...NavSocialItems.Linkedin,
              label: 'LinkedIn',
            },
            {
              label: 'Telegram',
              ...NavSocialItems.Telegram,
            },
            {
              label: 'Github',
              ...NavSocialItems.Github,
            },
          ],
          title: 'Elsewhere',
        },
      },
      theme: [
        { label: 'Light', value: 'light' },
        { label: 'System', value: 'system' },
        { label: 'Dark', value: 'dark' },
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
            href: NavSocialItems.Gmail.href,
          },
          Telegram: {
            href: NavSocialItems.Telegram.href,
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
              id: 'email',
              label: 'Email:',
              placeholder: 'Enter your email address',
            },
            {
              id: 'name',
              label: 'Name:',
              placeholder: 'Enter your name',
            },
            {
              id: 'subject',
              label: 'Subject:',
              placeholder: 'Enter subject',
            },
          ],
          textarea: {
            id: 'textarea',
            label: null,
            placeholder: 'Write your message here',
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
            ...NavigationItems.About,
            subtitle: 'Who I am and what I do',
            title: 'About me',
          },
          {
            subtitle: 'The dev tools, apps and OS I use',
            ...NavigationItems.Techstack,
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
              ...DevTechItems.Typescript,
              tag: 'Language',
            },
            {
              ...DevTechItems.React,
              tag: 'Library',
            },
            {
              ...DevTechItems.Nextjs,
              tag: 'Framework',
            },
            {
              ...DevTechItems.Scss,
              tag: 'Preprocessor',
            },
            {
              ...DevTechItems.Git,
              tag: 'Version control system',
            },
            {
              ...DevTechItems.Jest,
              tag: 'Testing framework',
            },
            {
              ...DevTechItems.Docker,
              tag: 'Containerization platform',
            },
            {
              ...DevTechItems.Nodejs,
              tag: 'Runtime environment',
            },
          ],
          title: 'Dev',
        },
        {
          groupKey: 'apps',
          items: [
            {
              ...AppItems.Neovim,
              tag: 'Editor',
            },
            {
              ...AppItems.Chrome,
              tag: 'Browser',
            },
          ],
          title: 'Программы',
        },
        {
          groupKey: 'os',
          items: [
            {
              ...OsItems.Linux,
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
