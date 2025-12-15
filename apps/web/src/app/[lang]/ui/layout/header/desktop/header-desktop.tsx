import Image from 'next/image';
import Link from 'next/link';
import styles from './header-desktop.module.scss';
import HeaderDropdown from './header-dropdown';
import ThemeSwitcher from '../theme-switcher';
import { type getDictionary } from '@/get-dictionary';
import LocaleSwitcher from '../locale-switcher';
import { Locale } from '@/i18n-config';

const HeaderDesktop = ({
  dictionary,
  currentLang,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['header'];
  currentLang: Locale;
}) => {
  const links = dictionary.nav.map((link, i) => {
    return link.more ? (
      <li key={link.title}>
        <HeaderDropdown dictionary={dictionary} />
      </li>
    ) : (
      <li key={link.title}>
        {link.href && <Link href={link.href}>{link.title}</Link>}
      </li>
    );
  });

  return (
    <div className={styles.container}>
      <div id="left-side" className="flex items-center">
        <Link href={`/${currentLang}`} className="mr-[4rem] flex-shrink-0">
          <Image
            className="transition-icon"
            src="/icons/light/Logo.svg"
            alt="logo"
            width={40}
            height={26}
          />
        </Link>
        <nav>
          <ul className={styles['nav-links']}>{links}</ul>
        </nav>
      </div>
      <div id="right-side" className="flex items-center">
        <nav>
          <ul className={styles['social-links']}>
            <li>
              <a href="https://t.me/hzrglpoqasd" target="_blank">
                <Image
                  className="telegram-icon"
                  src="/icons/Telegram.svg"
                  alt="telegram"
                  width={24}
                  height={24}
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/waterrDrinker" target="_blank">
                <Image
                  className="transition-icon"
                  src="/icons/light/Github.svg"
                  alt="github"
                  width={24}
                  height={24}
                />
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles['icon-divider']} />
        <div>
          <LocaleSwitcher currentLang={currentLang} />
        </div>
        <div>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};

export default HeaderDesktop;
