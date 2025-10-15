"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

import styles from "./header-dropdown.module.scss";
import { type getDictionary } from "@/get-dictionary";
import Link from "next/link";

const HeaderDropdown = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["header"];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = dictionary["dropdown-nav"].map((link, i) => (
    <li key={i}>{link.href && <Link href={link.href}>{link.title}</Link>}</li>
  ));

  useEffect(() => {
    const node = listRef.current;
    setTimeout(() => {
      if (node && isOpen) node.style.opacity = "1";
    });

    return () => {
      if (node) node.style.opacity = "0";
    };
  }, [isOpen]);

  const listRef = useRef<HTMLUListElement>(null);
  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <button
        className="flex justify-center items-center relative"
        onClick={handleOpen}
      >
        {dictionary.nav[dictionary.nav.length - 1].title} {/* more title */}
        <Image
          className={`transition-icon ${isOpen && "rotate-180"}`}
          src="/icons/light/Chevron-Down.svg"
          alt="logo"
          width={20}
          height={20}
        />
        {isOpen && (
          <div className={styles["list-wrapper"]}>
            <ul ref={listRef} className={styles["dropdown-list"]}>
              {links}
            </ul>
          </div>
        )}
      </button>
    </>
  );
};

export default HeaderDropdown;
