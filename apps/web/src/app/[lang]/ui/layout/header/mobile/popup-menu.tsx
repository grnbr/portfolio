import { getDictionary } from '@/get-dictionary';
import styles from './popup-menu.module.scss';
import Link from 'next/link';
import ThemeSwitcher from './theme-switcher';
import { Locale } from '@/i18n-config';
import LocaleSwitcher from './locale-switcher';

const PopupMenu = ({
  handleCloseMenu,
  dictionary,
}: {
  handleCloseMenu: () => void;
  dictionary: Awaited<ReturnType<typeof getDictionary>>['header'];
}) => {
  const links = dictionary['dropdown-nav'].map((link) => (
    <li className={styles['link']} key={link.title}>
      {link.href && (
        <Link href={link.href} onClick={handleCloseMenu}>
          {link.title}
        </Link>
      )}
    </li>
  ));

  return (
    <div className={styles.menu}>
      <ul className={styles['links-wrapper']}>
        {links}
        <li>
          <LocaleSwitcher />
        </li>
        <li className={styles['link']}>
          <ThemeSwitcher
            dictionary={dictionary}
            handleCloseMenu={handleCloseMenu}
          />
        </li>
      </ul>
    </div>
  );
};

export default PopupMenu;
