import 'server-only';

import { Navigation, NavSocialIds } from '@/shared/constants/navigation';
import { Dictionary, DictionaryData } from '@/shared/dictionaries/types';

export const dictionaryData: DictionaryData = {
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

export const dictionary: Dictionary = {
  about: {
    appeal: 'Давайте создадим нечто великое.',
    'closing-text':
      'Не стесняйтесь связаться со мной по e-mail или пишите мне в Telegram.',

    'iam-paragraph': {
      text: 'Я Григорий, фронтенд разработчик из Москвы, Россия 🇷🇺.',
      title: 'КТО Я',
    },

    'ido-paragraph': {
      text: 'Обладая годом ценного опыта в своей роли в AlgaTop –– технологической компании находящейся здесь, в Москве, я отточил свои навыки в React.js, Next.js, TailwindCSS и TypeScript, что позволяет мне создавать плавные и интерактивные пользовательские интерфейсы. Во время работы в AlgaTop, я сыграл ключевую роль в улучшении пользовательского опыта и стимулировании роста продаж для клиентов на платформе Kaspi. Используя свои знания в области фронтенд разработки, я внес свой вклад в достижение впечатляющих результатов, включая удвоение или утроение продаж, поднятие магазинов клиентов на верхние позиции и эффективную автоматизацию рутинных задач.',
      title: 'ЧЕМ Я ЗАНИМАЮСЬ',
    },
    subtitle: 'Кто я и чем я занимаюсь',
    title: 'Немного обо мне',
  },
  buttons: {
    getInTouch: {
      href: '/contact',
      label: 'Связаться',
    },
    seeMyResume: {
      href: '/resume/Григорий_Найбауер_Frontend_Resume.pdf',
      label: 'Посмотреть мое резюме',
    },
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

  'dropdown-nav': [
    {
      href: '/techs',
      title: 'Технологический стек',
    },
  ],

  footer: {
    elsewhere: 'В других сервисах',
    links: {
      links: [
        { href: '/ru/about', title: 'Обо мне' },
        { href: '/ru/work', title: 'Работа' },
        { href: '/ru/techs', title: 'Технологический стек' },
        { href: '/ru/contact', title: 'Связь' },
      ],
      title: 'Страницы',
    },

    rights: ' Григорий Н. Все права защищены.',

    'underlogo-text': 'Спасибо за визит',
  },
  header: {
    buttons: {
      more: {
        id: 'more',
        label: 'Еще',
      },
    },
    navigation: {
      primary: [
        {
          href: Navigation.Home.href,
          id: Navigation.Home.id,
          label: 'Главная',
        },
        {
          href: Navigation.About.href,
          id: Navigation.About.id,
          label: 'Обо мне',
        },
        {
          href: Navigation.Work.href,
          id: Navigation.Work.id,
          label: 'Работа',
        },

        {
          href: Navigation.Contact.href,
          id: Navigation.Contact.id,
          label: 'Связь',
        },
        {
          href: Navigation.TechStack.href,
          id: Navigation.TechStack.id,
          label: 'Стек',
        },
      ],
      socials: [
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
          href: Navigation.About.href,
          id: Navigation.About.id,
          img: '/images/home/navigation/about-min.png',
          subtitle: 'Кто я и чем занимаюсь',
          title: 'Обо мне',
        },
        {
          href: Navigation.TechStack.href,
          id: Navigation.TechStack.id,
          img: '/images/home/navigation/tech-stack-min.png',
          subtitle:
            'Инструменты разработки, приложения, устройства и игры, которыми я пользуюсь и играю.',
          title: 'Технологический стек',
        },
      ],
      title: 'Узнать больше обо мне',
    },
    selectedWork: {
      projects: dictionaryData.projects,
      title: 'Избранные работы',
    },
  },

  tech: {
    content: {
      'tech-items': [
        { logo: '/images/techs/html-logo.svg', name: 'HTML', tag: 'Язык' },
        { logo: '/images/techs/css-logo.svg', name: 'CSS', tag: 'Язык' },
        { logo: '/images/techs/js-logo.svg', name: 'JavaScript', tag: 'Язык' },
        {
          logo: '/images/techs/git-logo.svg',
          name: 'Git',
          tag: 'Система контроля версий',
        },
        {
          logo: '/images/techs/react-logo.svg',
          name: 'React',
          tag: 'Библиотека',
        },
        {
          logo: '/images/techs/sass-logo.svg',
          name: 'Sass',
          tag: 'Расширение языка',
        },
        { logo: '/images/techs/ts-logo.svg', name: 'TypeScript', tag: 'Язык' },
        {
          logo: '/images/techs/tailwind-logo.svg',
          name: 'Tailwind',
          tag: 'Фреймворк',
        },
        {
          logo: '/images/techs/nextjs-logo.svg',
          name: 'Next.js',
          tag: 'Фреймворк',
        },
        {
          logo: '/images/techs/redux-logo.svg',
          name: 'Redux',
          tag: 'Менеджер состояний',
        },
      ],
      title: 'Front-end',
    },
    subtitle: 'Инструменты разработки, которыми я пользуюсь.',

    title: 'Тех. стек',
  },

  themes: {
    dark: 'Темная',
    light: 'Светлая',
    title: 'Тема: ',
  },

  work: {
    subtitle: 'Проекты и идеи, над которыми я работал',
    title: 'Работа',
  },
} as const;
