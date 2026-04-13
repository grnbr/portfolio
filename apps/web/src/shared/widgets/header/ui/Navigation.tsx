'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { FC, JSX, useEffect, useRef, useState } from 'react';

import { NavigationItems } from '@/shared/constants/navigation';
import { Dictionary } from '@/shared/dictionaries/types';
import formatHref from '@/shared/helpers/formatHref';
import { Locale } from '@/shared/i18n/i18n-config';
import ButtonLink from '@/shared/ui/button/ButtonLink';

import styles from '../Header.module.scss';

type NavLinksProps = { dict: Dictionary; lang: Locale; logo: JSX.Element };

// TODO Handle tablet view adding more button
const Navigation: FC<NavLinksProps> = ({ dict, lang, logo }) => {
  // const isMounted = useIsMounted();

  // const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [hiddenItemsIndex, setHiddenItemsIndex] = useState<number[]>([]);

  const navRef = useRef<HTMLElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);
  // const buttonRef = useRef<HTMLButtonElement | null>(null);

  const pathname = usePathname();
  const dictNavItems = dict.layout.generic.navigation.primary.items;
  // const moreBtn = dict.layout.header.buttons.more;
  const navItems = dictNavItems.filter(
    (item) => item.id !== NavigationItems.Home.id,
  );
  // const hiddenNavItems = hiddenItemsIndex[0]
  //   ? navItems.slice(hiddenItemsIndex[0])
  //   : null;
  // const isHiddenItemsEmpty = hiddenItemsIndex.length === 0;
  //
  // const handleToggleMenu = () => {
  //   setIsMenuOpen((prev) => !prev);
  // };
  // const onCloseMenu = () => {
  //   setIsMenuOpen(false);
  // };

  useEffect(() => {
    if (!listRef.current) return;

    const checkHidden = () => {
      if (!listRef.current) return;

      const container = listRef.current.getBoundingClientRect();
      const items = Array.from(listRef.current.children) as HTMLLIElement[];
      const navItems = items.slice(0, -1);
      const lastNavItem = navItems[navItems.length - 1];
      const hasListHiddenItems = lastNavItem
        ? lastNavItem.getBoundingClientRect().right > container.right
        : false;
      const hidden: number[] = [];

      const moreBtnEl = items[items.length - 1];
      const moreBtnWidth = moreBtnEl?.classList.contains(styles.more ?? '')
        ? moreBtnEl.getBoundingClientRect().width
        : 0;
      const colGap = window.getComputedStyle(listRef.current).columnGap;
      const colGapNum = parseFloat(colGap.replace(/[^\d.]/g, ''));

      navItems.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const pushIndex = () => hidden.push(index);

        if (hasListHiddenItems) {
          if (rect.right > container.right - moreBtnWidth - colGapNum) {
            pushIndex();
          }
        } else if (rect.right > container.right) {
          pushIndex();
        }
      });

      setHiddenItemsIndex(hidden);
    };

    document.fonts.ready.then(() => {
      checkHidden();
    });

    checkHidden();

    window.addEventListener('resize', checkHidden);
    const observer = new ResizeObserver(() => {
      checkHidden();
    });

    observer.observe(listRef.current);
    return () => {
      window.removeEventListener('resize', checkHidden);
      observer.disconnect();
    };
  }, []);

  return (
    <nav className={clsx(styles.navLeft)} ref={navRef}>
      {logo}

      <ul className={styles.list} ref={listRef}>
        {navItems.map((item, i) => {
          const formattedHref = formatHref({ href: item.href, lang });

          const isActive = formattedHref === pathname;
          const isHidden = hiddenItemsIndex.includes(i);

          return (
            <li
              aria-hidden={isHidden ? 'true' : undefined}
              className={clsx(styles.item, isHidden && styles.hidden)}
              key={i}
            >
              <ButtonLink
                aria-current={isActive && !isHidden ? 'page' : undefined}
                aria-label={item.label}
                className={clsx(styles.link, isHidden && styles.hidden)}
                href={formattedHref}
                key={i}
                tabIndex={isHidden ? -1 : 0}
                variant="ghost"
              >
                <span className={clsx(styles.label, isActive && styles.active)}>
                  {item.label}
                </span>
              </ButtonLink>
            </li>
          );
        })}
        {/* <li */}
        {/*   aria-hidden={isHiddenItemsEmpty ? 'true' : undefined} */}
        {/*   className={clsx( */}
        {/*     styles.item, */}
        {/*     styles.more, */}
        {/*     isHiddenItemsEmpty && styles.hidden, */}
        {/*   )} */}
        {/* > */}
        {/*   <Button className={styles.ghostBtn} onClick={handleToggleMenu}> */}
        {/*     {moreBtn.label} */}
        {/*     <ChevronDownIcon options={{ size: 20 }} /> */}
        {/*   </Button> */}

        {/* <AnimatePresence initial={false}> */}
        {/* {isMenuOpen && !isHiddenItemsEmpty && ( */}
        {/* {isMounted && */}
        {/*   createPortal( */}
        {/*     <DropdownMenu */}
        {/*       buttonRef={buttonRef} */}
        {/*       className={styles.dropdown} */}
        {/*       handleCloseMenu={onCloseMenu} */}
        {/*       variant="header" */}
        {/*     > */}
        {/*       <ul className={styles.list}> */}
        {/*         {hiddenNavItems?.map((item, i) => ( */}
        {/*           <li className={styles.item} key={i}></li> */}
        {/*         ))} */}
        {/*       </ul> */}
        {/*     </DropdownMenu>, */}
        {/*     navRef.current, */}
        {/*   )} */}
        {/* )} */}
        {/* </AnimatePresence> */}
        {/* </li> */}
      </ul>
    </nav>
  );
};

export default Navigation;
