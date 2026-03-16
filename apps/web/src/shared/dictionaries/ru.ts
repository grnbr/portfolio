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
      label: 'Главная',
    },
    socials: {
      Email: {
        href: 'mailto:grigoriynbr@gmail.com',
        text: 'почта',
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
        text: 'резюме',
      },
      Telegram: {
        href: 'https://t.me/grnbr',
        text: 'телеграм',
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
        label: 'Посетить сайт',
      },
      title: 'Tatell — создание брендов и продуктов под ключ',
    },
  ],
} as const;

const navSocials = dictionaryData.navigation.socials;

export const dictionary: Dictionary = {
  layout: {
    footer: {
      underLogoText: 'Спасибо за визит',
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
              label: 'Обо мне',
            },
            {
              href: NavigationItems.Work.href,
              id: NavigationItems.Work.id,
              label: 'Работа',
            },
            {
              href: NavigationItems.TechStack.href,
              id: NavigationItems.TechStack.id,
              label: 'Стек',
            },
            {
              href: NavigationItems.Contact.href,
              id: NavigationItems.Contact.id,
              label: 'Связь',
            },
          ],
          title: null,
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
          title: null,
        },
      },
    },
    header: {
      buttons: {
        more: {
          id: 'more',
          label: 'Еще',
        },
      },
    },
    themes: {
      dark: 'Темная',
      light: 'Светлая',
      title: 'Тема: ',
    },
  },

  pages: {
    about: {
      afterword: 'Давайте создадим нечто великое.',
      closingParagraph: {
        links: {
          Telegram: {
            href: navSocials.Telegram.href,
          },
          почте: {
            href: navSocials.Email.href,
          },
        },
        text: 'Не стесняйтесь связаться со мной по почте или пишите мне в Telegram.',
      },
      header: {
        subtitle: 'Кто я и чем я занимаюсь',
        title: 'Немного обо мне',
      },
      textContent: [
        {
          text: ['Я', 'Григорий', 'фронтенд разработчик из Москвы, Россия 🇷🇺.'],
          title: 'Кто я',
        },
        {
          text: [
            'Обладая годом ценного опыта в своей роли в AlgaTop –– технологической компании находящейся здесь, в Москве, я отточил свои навыки в React.js, Next.js, TailwindCSS и TypeScript, что позволяет мне создавать плавные и интерактивные пользовательские интерфейсы. Во время работы в AlgaTop, я сыграл ключевую роль в улучшении пользовательского опыта и стимулировании роста продаж для клиентов на платформе Kaspi. Используя свои знания в области фронтенд разработки, я внес свой вклад в достижение впечатляющих результатов, включая удвоение или утроение продаж, поднятие магазинов клиентов на верхние позиции и эффективную автоматизацию рутинных задач.',
          ],
          title: 'Чем я занимаюсь',
        },
      ],
    },
    contact: {
      form: {
        email: {
          label: 'Email:',
          placeholder: 'Введите ваш адрес электронной почты',
        },

        name: {
          label: 'Имя:',
          placeholder: 'Введите ваше имя',
        },
        'send-btn': 'Отправить',
        subject: {
          label: 'Тема:',
          placeholder: 'Введите тему',
        },

        'textarea-placeholder': 'Напишите ваше сообщение здесь',
        title: 'Новое сообщение',
      },
      subtitle: 'Давайте создадим что-то потрясающее.',

      title: 'Связаться',
    },
    generic: {
      buttons: {
        getInTouch: {
          label: 'Связаться',
        },
        seeMyResume: {
          href: '/resume/Григорий_Найбауер_Frontend_Resume.pdf',
          label: 'Посмотреть мое резюме',
        },
      },
      images: {
        portrait: {
          alt: 'Григорий',
        },
      },
      projects: {
        emptyState: {
          subtitle: 'Давайте превратим вашу идею в визуальную реальность',
          title: 'Ваш проект здесь',
        },
        items: dictionaryData.projects,
      },
    },
    home: {
      contactme: {
        subtitle:
          'Хотите обсудить возможность создания чего-то великого? Я готов, когда вы готовы.',
        title: 'Давайте поработаем вместе',
      },

      hero: {
        greeting: 'Привет 👋',
        intro:
          'Я фронтенд-разработчик, помогающий стартапам превращать их видения в цифровую реальность. Я специализируюсь на проектировании и создании современных мобильных и веб-приложений.',
        name: 'Гриша',
        pronoun: 'Меня зовут',
      },
      navigation: {
        items: [
          {
            href: NavigationItems.About.href,
            id: NavigationItems.About.id,
            img: '/images/home/navigation/about-min.png',
            subtitle: 'Кто я и чем занимаюсь',
            title: 'Обо мне',
          },
          {
            href: NavigationItems.TechStack.href,
            id: NavigationItems.TechStack.id,
            img: '/images/home/navigation/tech-stack-min.png',
            subtitle:
              'Инструменты разработки, приложения, устройства и игры, которыми я пользуюсь и играю.',
            title: 'Технологический стек',
          },
        ],
        title: 'Узнать больше обо мне',
      },
      selectedWork: {
        title: 'Избранные работы',
      },
    },
    techStack: {
      content: [
        {
          groupKey: 'dev',
          items: [
            {
              ...DevTechItems.Typescript,
              tag: 'Язык'
            },
            {
              ...DevTechItems.React,
              tag: 'Библиотека'
            },
            {
              ...DevTechItems.Nextjs,
              tag: 'Фреймворк'
            },
            {
              ...DevTechItems.Scss,
              tag: 'Препроцессор'
            },
            {
              ...DevTechItems.Git,
              tag: 'Система контроля версий'
            },
            {
              ...DevTechItems.Jest,
              tag: 'Фреймворк тестирования'
            },
            {
              ...DevTechItems.Docker,
              tag: 'Платформа контейнеризации'
            },
            {
              ...DevTechItems.Nodejs,
              tag: 'Среда выполнения'
            },
          ],
          title: "Dev"
        },
        {
          groupKey: 'apps',
          items: [
            {
              ...AppItems.Neovim,
              tag: 'Редактор'
            },
            {
              ...AppItems.Chrome,
              tag: 'Браузер'
            },
          ],
          title: "Программы"
        },
        {
          groupKey: 'os',
          items: [
            {
              ...OsItems.Linux,
            },
          ],
          title: "Операционные системы"
        },
      ],
      header: {
        subtitle: 'Инструменты разработки, которыми я пользуюсь',
        title: 'Тех. стек',
      },
    },
    work: {
      header: {
        subtitle: 'Проекты и идеи, над которыми я работал',
        title: 'Проекты',
      },
    },
  },
} as const;
