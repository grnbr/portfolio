"use client";

import { Locale } from "@/i18n-config";
import styles from "./nav-bar.module.scss";
import { type getDictionary } from "@/get-dictionary";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import PopupMenu from "./popup-menu";

const NavBar = ({
  dictionary,
  currentLang,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["header"];
  currentLang: Locale;
}) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleOpenMenu = () => setOpenMenu((prev) => !prev);

  const pathname = usePathname();

  const links = dictionary.nav.map((link) => {
    return link.more ? (
      <li key={link.title} className={styles["btn-link-wrapper"]}>
        <button
          className={`${styles["btn-link"]} ${
            openMenu ? styles["btn-link--active"] : ""
          }`}
          onClick={handleOpenMenu}
        >
          <Image
            className="light-icon transition-icon"
            src={link.icon + (openMenu ? "-Fill" : "-Outline") + ".svg"}
            alt={link.title}
            width={24}
            height={24}
          />
        </button>
      </li>
    ) : (
      <li key={link.title} className={styles["btn-link-wrapper"]}>
        {link.href && (
          <Link
            className={`${styles["btn-link"]} ${
              pathname === link.href ? styles["btn-link--active"] : ""
            }`}
            href={link.href}
          >
            <Image
              className="light-icon transition-icon"
              src={
                link.icon +
                (pathname === link.href ? "-Fill" : "-Outline") +
                ".svg"
              }
              alt={link.title}
              width={24}
              height={24}
            />
          </Link>
        )}
      </li>
    );
  });

  return (
    <>
      <nav className={styles["nav-bar"]}>
        <ul className={styles["links-wrapper"]}>
          <li className={styles["btn-link-wrapper"]}>
            <Link
              className={`${styles["btn-link"]} ${
                pathname === `/${currentLang}` ? styles["btn-link--active"] : ""
              }`}
              href={`/${currentLang}`}
            >
              <Image
                className="light-icon transition-icon"
                src={
                  "/icons/light/Home" +
                  (pathname === `/${currentLang}` ? "-Fill" : "-Outline") +
                  ".svg"
                }
                alt="Home"
                width={24}
                height={24}
              />
            </Link>
          </li>
          {links}
        </ul>
      </nav>

      {openMenu && (
        <PopupMenu handleCloseMenu={handleOpenMenu} dictionary={dictionary} />
      )}
    </>
  );
};

export default NavBar;
