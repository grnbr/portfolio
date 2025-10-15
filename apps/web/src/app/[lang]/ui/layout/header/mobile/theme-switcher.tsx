"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { getDictionary } from "@/get-dictionary";

const ThemeSwitcher = ({
  dictionary,
  handleCloseMenu,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["header"];
  handleCloseMenu: () => void;
}) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <div>
        {dictionary.themes.title}
        {dictionary.themes.light}
      </div>
    );

  if (resolvedTheme === "dark") {
    return (
      <button
        onClick={() => {
          setTheme("light");
          handleCloseMenu();
        }}
      >
        {dictionary.themes.title}
        {dictionary.themes.dark}
      </button>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <button
        onClick={() => {
          setTheme("dark");
          handleCloseMenu();
        }}
      >
        {dictionary.themes.title}
        {dictionary.themes.light}
      </button>
    );
  }
};

export default ThemeSwitcher;
