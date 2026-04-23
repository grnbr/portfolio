import 'server-only';

import {
  NavigationMap,
  NavSocialTuple,
  ResourceNavMap,
  SocialNavMap,
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
      ...NavigationMap.Home,
      label: 'Главная',
    },
  },
} as const;

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
            dictionaryData.navigation.home,
            {
              ...NavigationMap.About,
              label: 'Обо мне',
            },
            {
              ...NavigationMap.Work,
              label: 'Работа',
            },
            {
              label: 'Стек',
              ...NavigationMap['Tech-stack'],
            },
            {
              label: 'Связь',
              ...NavigationMap.Contact,
            },
          ],
        },
        resources: {
          items: [
            {
              ...ResourceNavMap['Source-code'],
              label: 'Код портфолио',
            },
            {
              ...ResourceNavMap.Figma,
              label: 'Figma автора',
            },
          ],
        },
        socials: {
          items: NavSocialTuple,
        },
      },
      theme: [
        { label: 'Светлая', value: ThemeMap.Light },
        { label: 'Система', value: ThemeMap.System },
        { label: 'Темная', value: ThemeMap.Dark },
      ],
    },
    header: {
      buttons: {
        more: {
          id: 'more',
          label: 'Еще',
        },
        themeSwitcher: {
          ariaLabel: {
            close: 'Закрыть меню тем',
            open: 'Открыть меню тем',
          },
        },
      },
    },
    widgets: {
      controlCenter: {
        buttons: {
          toggle: {
            ariaLabel: 'Открыть настройки',
          },
        },
      },
    },
  },

  pages: {
    about: {
      afterword: 'Давайте создадим нечто великое.',
      closingParagraph: {
        links: {
          Telegram: {
            href: SocialNavMap.Telegram.href,
          },
          почте: {
            href: SocialNavMap.Gmail.href,
          },
        },
        text: 'Не стесняйтесь связаться со мной по почте или пишите мне в Telegram.',
      },
      header: {
        subtitle: 'Кто я и чем я занимаюсь',
        title: 'Немного обо мне',
      },
      meta: {
        description:
          'Более подробно обо мне — frontend-разработчике, специализирующемся на современных интерфейсах и веб-приложениях.',
        title: 'Обо мне',
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
        buttons: {
          send: {
            label: 'Отправить',
          },
        },
        fields: {
          inputs: [
            {
              ...ContactInputMap.Email,
              errors: {
                invalid_format: 'Неверный адрес электронной почты',
                too_small: 'Email обязателен',
              },
              label: 'Email:',
              placeholder: 'Введите ваш адрес электронной почты',
            },
            {
              ...ContactInputMap.Name,
              label: 'Имя:',
              placeholder: 'Введите ваше имя',
            },
            {
              ...ContactInputMap.Subject,
              label: 'Тема:',
              placeholder: 'Введите тему',
            },
          ],
          textarea: {
            errors: {
              too_small: 'Сообщение обязательно',
            },
            id: 'message',
            label: null,
            placeholder: 'Напишите ваше сообщение здесь',
          },
        },

        modal: {
          success: {
            closeBtn: 'Закрыть',
            title: 'Сообщение отправлено!',
          },
        },
        title: 'Новое сообщение',
      },
      header: {
        subtitle: 'Давайте создадим что-то потрясающее',
        title: 'Связаться',
      },

      meta: {
        description:
          'Свяжитесь со мной для сотрудничества или обсуждения проекта.',
        title: 'Контакты',
      },
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
      meta: {
        titlePostfix: ' | Григорий',
      },
      projects: {
        emptyState: {
          subtitle: 'Давайте превратим вашу идею в визуальную реальность',
          title: 'Ваш проект здесь',
        },
        items: [
          {
            ...ProjectItems.Tatell,
            description: [
              {
                type: 'text',
                value:
                  'Разработал для компании Tatell лендинг. Из особенностей:',
              },
              {
                items: [
                  'анимированное интро',
                  'гибкие шрифты и UI для популярных разрешений',
                  'прокручиваемая секция-презентация',
                  'форма обратной связи с отправкой на email',
                ],
                type: 'list',
              },
            ],
            title: 'Tatell — создание брендов и продуктов под ключ',
          },
          {
            ...ProjectItems.Neomaind,
            description: [
              {
                type: 'text',
                value:
                  'Получил проект с готовым UI-китом, провёл масштабный рефакторинг и оптимизацию. Разработал два продукта до стабильного релиза — e-commerce магазин и админ-панель. Интегрировал клиентскую часть платёжного шлюза, сократил время загрузки страниц на ~40% и внедрил тестирование, что снизило количество ошибок в продакшене.',
              },
            ],
            title:
              'Neomaind Shop — маркетплейс нового поколения дизайнерской мебели',
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
        name: 'Григорий',
        pronoun: 'Меня зовут',
      },

      meta: {
        description:
          'Frontend-разработчик, помогающий стартапам превращать идеи в современные веб- и мобильные приложения.',
        title: 'Frontend Developer',
      },
      navigation: {
        items: [
          {
            ...NavigationMap.About,
            subtitle: 'Кто я и чем занимаюсь',
            title: 'Обо мне',
          },
          {
            ...NavigationMap['Tech-stack'],
            subtitle:
              'Инструменты разработки, приложения и операционные системы, которые я использую',
            title: 'Технологический стек',
          },
        ],
        title: 'Узнать больше обо мне',
      },
      selectedWork: {
        title: 'Избранные работы',
      },
    },
    'tech-stack': {
      content: [
        {
          groupKey: 'dev',
          items: [
            {
              ...DevTechMap.Typescript,
              tag: 'Язык',
            },
            {
              ...DevTechMap.React,
              tag: 'Библиотека',
            },
            {
              ...DevTechMap.Nextjs,
              tag: 'Фреймворк',
            },
            {
              ...DevTechMap['React-query'],
              tag: 'Библиотека',
            },
            {
              ...DevTechMap.Scss,
              tag: 'Препроцессор',
            },
            {
              ...DevTechMap.Git,
              tag: 'Система контроля версий',
            },
            {
              ...DevTechMap.Jest,
              tag: 'Фреймворк тестирования',
            },
            {
              ...DevTechMap.Docker,
              tag: 'Платформа контейнеризации',
            },
            {
              ...DevTechMap.Nodejs,
              tag: 'Среда выполнения',
            },
          ],
          title: 'Dev',
        },
        {
          groupKey: 'apps',
          items: [
            {
              ...AppMap.Neovim,
              tag: 'Редактор',
            },
            {
              ...AppMap.Chrome,
              tag: 'Браузер',
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
        subtitle: 'Инструменты разработки, которыми я пользуюсь',
        title: 'Тех. стек',
      },
      meta: {
        description:
          'Технологии и инструменты, которые я использую для создания современных веб-приложений.',
        title: 'Стек технологий',
      },
    },
    work: {
      header: {
        subtitle: 'Проекты и идеи, над которыми я работал',
        title: 'Проекты',
      },
      meta: {
        description:
          'Мои проекты: примеры современной веб-разработки и решений в области пользовательских интерфейсов.',
        title: 'Проекты',
      },
    },
  },
} as const;
