import 'server-only';

import { NavigationItems, NavSocialIds } from '@/shared/constants/navigation';
import { Dictionary } from '@/shared/dictionaries/types';

import { AppItems, DevTechItems, OsItems } from './constants/techItems';
import { DictionaryData } from './types/sharedTypes';

export const dictionaryData: DictionaryData = {
  navigation: {
    home: {
      href: NavigationItems.Home.href,
      id: NavigationItems.Home.id,
      label: 'Home',
    },
    socials: {
      Email: {
        href: 'mailto:grigoriynbr@gmail.com',
        text: 'e-mail',
      },
      Github: {
        href: 'https://github.com/waterrDrinker',
      },
      LinkedIn: {
        href: 'www.linkedin.com/in/григорий-найбауер-248a57381',
        text: 'LinkedIn',
      },
      Resume: {
        href: 'mailto:grigoriynbr@gmail.com',
        text: 'Resume',
      },
      Telegram: {
        href: 'https://t.me/grnbr',
        text: 'Telegram',
      },
    },
  },
  projects: [
    {
      description:
        'Tatell разрабатывает бренды и продукты с нуля: от идеи и формулы до дизайна, упаковки, сертификации и запуска.',
      id: 'tatell',
      img: '/images/projects/Subbi.png',
      linkBtn: {
        href: 'https://tatellstudio.com/',
        label: 'Visit Site',
      },
      title: 'Tatell — создание брендов и продуктов под ключ',
    },
  ],
} as const;

const navSocials = dictionaryData.navigation.socials;

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
            { ...dictionaryData.navigation.home },
            {
              href: NavigationItems.About.href,
              id: NavigationItems.About.id,
              label: 'About',
            },
            {
              href: NavigationItems.Work.href,
              id: NavigationItems.Work.id,
              label: 'Work',
            },
            {
              href: NavigationItems.TechStack.href,
              id: NavigationItems.TechStack.id,
              label: 'Techs',
            },
            {
              href: NavigationItems.Contact.href,
              id: NavigationItems.Contact.id,
              label: 'Contact',
            },
          ],
          title: 'Links',
        },
        socials: {
          items: [
            {
              href: navSocials.LinkedIn.href,
              id: NavSocialIds.LinkedIn,
              label: 'LinkedIn',
            },
            {
              href: navSocials.Telegram.href,
              id: NavSocialIds.Telegram,
              label: 'Telegram',
            },
            {
              href: navSocials.Github.href,
              id: NavSocialIds.Github,
              label: 'Github',
            },
          ],
          title: 'Elsewhere',
        },
      },
    },
    header: {
      buttons: {
        more: {
          id: 'more',
          label: 'More',
        },
      },
    },
    themes: {
      dark: 'Dark',
      light: 'Light',
      title: 'Theme: ',
    },
  },

  pages: {
    about: {
      afterword: 'Let’s build something great.',
      closingParagraph: {
        links: {
          'e-mail': {
            href: navSocials.Email.href,
          },
          Telegram: {
            href: navSocials.Telegram.href,
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
          subtitle: 'Let’s turn your idea into a visual reality',
          title: 'Your project goes here',
        },
        items: dictionaryData.projects,
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
            href: NavigationItems.About.href,
            id: NavigationItems.About.id,
            img: '/images/home/navigation/about-min.png',
            subtitle: 'Who I am and what I do',
            title: 'About me',
          },
          {
            href: NavigationItems.TechStack.href,
            id: NavigationItems.TechStack.id,
            img: '/images/home/navigation/tech-stack-min.png',
            subtitle: 'The dev tools I use.',
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
