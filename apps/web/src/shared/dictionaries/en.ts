import 'server-only';

import { NavigationItems, NavSocialIds } from '@/shared/constants/navigation';
import { Dictionary, DictionaryData } from '@/shared/dictionaries/types';

export const dictionaryData: DictionaryData = {
  navigation: {
    home: {
      href: NavigationItems.Home.href,
      id: NavigationItems.Home.id,
      label: 'Home',
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

export const dictionary: Dictionary = {
  about: {
    appeal: 'Let’s build something great.',
    'closing-text':
      'Feel free to reach out via e-mail or write me on Telegram.',

    'iam-paragraph': {
      text: "I'm Grigory front-end developer from Moscow, Russia 🇷🇺.",
      title: 'WHO I AM',
    },

    'ido-paragraph': {
      text: "With one year of invaluable experience in my role at AlgaTop –– a tech company based here in Moscow, I have honed my skills in React.js, Next.js, TailwindCSS, and TypeScript, allowing me to craft seamless and interactive user experiences. During my time at AlgaTop, I played a pivotal role in enhancing the user experience and driving sales growth for clients on the Kaspi platform. Leveraging my expertise in frontend development, I contributed to achieving remarkable results, including doubling or tripling sales, elevating clients' stores to the top position, and automating routine tasks effectively.",
      title: 'WHAT I DO',
    },
    subtitle: 'Who I am and what I do',
    title: 'A little bit about me',
  },
  buttons: {
    getInTouch: {
      href: '/contact',
      label: 'Get in touch',
    },
    seeMyResume: {
      href: '/resume/Grigory_Neubauer_Frontend_Resume.pdf',
      label: 'See my resume',
    },
  },

  contact: {
    form: {
      email: {
        label: 'Email:',
        placeholder: 'Enter your email address',
      },

      name: {
        label: 'Name:',
        placeholder: 'Enter your name',
      },
      'send-btn': 'Send',
      subject: {
        label: 'Subject:',
        placeholder: 'Enter subject',
      },

      'textarea-placeholder': 'Write your message here',
      title: 'New message',
    },
    subtitle: 'Let’s build something awesome.',

    title: 'Get in touch',
  },

  'dropdown-nav': [
    {
      href: 'https://www.figma.com/community/file/1266863403759514317',
      title: 'This UI Kit',
    },
  ],

  footer: {
    underLogoText: 'Thanks for stopping by',
  },
  header: {
    buttons: {
      more: {
        id: 'more',
        label: 'More',
      },
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
      projects: dictionaryData.projects,
      title: 'Selected Work',
    },
  },
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
          href: NavigationItems.Contact.href,
          id: NavigationItems.Contact.id,
          label: 'Contact',
        },
        {
          href: NavigationItems.TechStack.href,
          id: NavigationItems.TechStack.id,
          label: 'Techs',
        },
      ],
      title: 'Links',
    },
    socials: {
      items: [
        {
          href: '',
          id: NavSocialIds.LinkedIn,
          label: 'LinkedIn',
        },
        {
          href: '',
          id: NavSocialIds.Telegram,
          label: 'Telegram',
        },
        {
          href: '',
          id: NavSocialIds.Github,
          label: 'Github',
        },
      ],
      title: 'Elsewhere',
    },
  },

  tech: {
    content: {
      'tech-items': [
        { logo: '/images/techs/html-logo.svg', name: 'HTML', tag: 'Language' },
        { logo: '/images/techs/css-logo.svg', name: 'CSS', tag: 'Language' },
        {
          logo: '/images/techs/js-logo.svg',
          name: 'JavaScript',
          tag: 'Language',
        },
        {
          logo: '/images/techs/git-logo.svg',
          name: 'Git',
          tag: 'Version Control',
        },
        { logo: '/images/techs/react-logo.svg', name: 'React', tag: 'Library' },
        {
          logo: '/images/techs/sass-logo.svg',
          name: 'Sass',
          tag: 'Extension Language',
        },
        {
          logo: '/images/techs/ts-logo.svg',
          name: 'TypeScript',
          tag: 'Language',
        },
        {
          logo: '/images/techs/tailwind-logo.svg',
          name: 'Tailwind',
          tag: 'Framework',
        },
        {
          logo: '/images/techs/nextjs-logo.svg',
          name: 'Next.js',
          tag: 'Framework',
        },
        {
          logo: '/images/techs/redux-logo.svg',
          name: 'Redux',
          tag: 'State Manager',
        },
      ],
      title: 'Front-end',
    },
    subtitle: 'The dev tools I use.',

    title: 'Tech Stack',
  },

  themes: {
    dark: 'Dark',
    light: 'Light',
    title: 'Theme: ',
  },

  work: {
    subtitle: 'Projects and ideas I’ve worked on',
    title: 'Work',
  },
} as const;

export type DictionaryEn = typeof dictionary;
