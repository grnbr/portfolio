import { type getDictionary } from '@/get-dictionary';
import { HeaderDesktop } from './desktop';
import { HeaderSmallDevices } from './mobile';
import styles from './header.module.scss';
import { Locale } from '@/i18n-config';

const Header = ({
  dictionary,
  currentLang,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['header'];
  currentLang: Locale;
}) => {
  return (
    <div className={styles.container}>
      <header>
        <HeaderDesktop dictionary={dictionary} currentLang={currentLang} />
        <HeaderSmallDevices
          dictionary={dictionary}
          currentLang={currentLang}
        />{' '}
        {/*less than medium breakpoint*/}
      </header>
    </div>
  );
};

export default Header;
