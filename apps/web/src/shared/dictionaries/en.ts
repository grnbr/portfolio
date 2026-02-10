import 'server-only';

import { Dictionary } from '@/shared/dictionaries/types';
import { NavItemId, NavSocialId } from '@/shared/types/navigation';

export const dictionary: Dictionary = {
  about: {
    appeal: 'Let’s build something great.',
    'closing-text':
      'Feel free to reach out via e-mail or write me on Telegram.',

    getInTouch: 'Get in touch',

    'iam-paragraph': {
      text: "I'm Grigoriy front-end developer from Moscow, Russia 🇷🇺.",
      title: 'WHO I AM',
    },

    'ido-paragraph': {
      text: "With one year of invaluable experience in my role at AlgaTop –– a tech company based here in Moscow, I have honed my skills in React.js, Next.js, TailwindCSS, and TypeScript, allowing me to craft seamless and interactive user experiences. During my time at AlgaTop, I played a pivotal role in enhancing the user experience and driving sales growth for clients on the Kaspi platform. Leveraging my expertise in frontend development, I contributed to achieving remarkable results, including doubling or tripling sales, elevating clients' stores to the top position, and automating routine tasks effectively.",
      title: 'WHAT I DO',
    },
    subtitle: 'Who I am and what I do',
    title: 'A little bit about me',
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
      title: 'This UI KIt',
    },
  ],

  footer: {
    elsewhere: 'Elsewhere',
    links: {
      links: [
        { href: '/en/about', title: 'About' },
        { href: '/en/work', title: 'Work' },
        { href: '/en/techs', title: 'Tech Stack' },
        { href: '/en/contact', title: 'Contact' },
      ],
      title: 'Links',
    },

    rights: ' Grigoriy N. All Rights Reserved.',

    'underlogo-text': 'Thanks for stopping by',
  },

  getInTouch: {
    href: '/en/contact',
    title: 'Get in touch',
  },

  home: {
    contactme: {
      getInTouch: 'Get in touch',
      subtitle:
        'Want to discuss an opportunity to create something great? I’m ready when you are.',
      title: "Let's work together",
    },

    hero: {
      intro:
        'A front-end engineer helping startups turn their visions into a digital reality. I specialize in designing and building modern mobile and web-based apps.',
      name: 'Grigoriy',
      pronoun: "I'm",
      'resume-btn': 'See my resume',
    },

    widgets: {
      items: [
        {
          href: '/en/about',
          id: '0',
          img: '/images/home/about-face-min.png',
          subtitle: 'Who I am and what I do',
          title: 'About me',
        },
        {
          href: '/en/books',
          id: '1',
          img: '/images/home/Bookshelf-min.png',
          subtitle: 'Books and pieces of wisdom I’ve enjoyed reading',
          title: 'Bookshelf',
        },
        {
          href: '/en/techs',
          id: '2',
          img: '/images/home/Tech-Stack-min.png',
          subtitle: 'The dev tools I use.',
          title: 'Tech Stack',
        },
      ],
      title: 'Get to know me',
    },
  },

  navigation: {
    primary: [
      {
        href: '/',
        id: NavItemId.Home,
        title: 'Home',
        type: 'link',
      },
      {
        href: '/about',
        id: NavItemId.About,
        title: 'About',
        type: 'link',
      },
      {
        href: '/work',
        id: NavItemId.Work,
        title: 'Work',
        type: 'link',
      },
      {
        href: '/contact',
        id: NavItemId.Contact,
        title: 'Contact',
        type: 'link',
      },
      {
        href: '/techs',
        id: NavItemId.Techs,
        title: 'Techs',
        type: 'link',
      },
      {
        id: NavItemId.More,
        title: 'More',
        type: 'action',
      },
    ],
    socials: [
      {
        href: '',
        id: NavSocialId.LinkedIn,
        title: 'LinkedIn',
        type: 'link',
      },
      {
        href: '',
        id: NavSocialId.Telegram,
        title: 'Telegram',
        type: 'link',
      },
      {
        href: '',
        id: NavSocialId.Github,
        title: 'Github',
        type: 'link',
      },
    ],
  },

  projects: {
    placeholder: {
      getInTouch: 'Get in touch',
      icon: '/icons/light/stars.svg',
      subtitle: 'Let’s turn your idea into a visual reality',
      title: 'YOUR PROJECT GOES HERE',
    },

    title: 'Selected work',

    works: [
      {
        href: 'https://algatop.kz/',
        icon: '/icons/works/AlgaTop.svg',
        id: '0',
        name: 'AlgaTop',
        presentationImg: '/images/work/works/algatop-screenshot-min.jpg',
        text: "As a Frontend Developer, I played a pivotal role in enhancing the user experience and driving sales growth for clients on the Kaspi platform. Leveraging my expertise in frontend development, I contributed to achieving remarkable results, including doubling or tripling sales, elevating clients' stores to the top position, and automating routine tasks effectively.",
        'text-btn': 'Visit Site',
        title: 'AlgaTop - Store automation service',
      },
    ],
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
