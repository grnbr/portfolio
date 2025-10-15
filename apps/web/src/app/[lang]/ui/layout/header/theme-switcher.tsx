"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <Image
        src={"/icons/light/Sun.svg"}
        alt="theme-sw"
        width={24}
        height={24}
        className="transition-icon"
      />
    );

  if (resolvedTheme === "dark") {
    return (
      <button
        className="flex justify-center items-center"
        onClick={() => setTheme("light")}
      >
        <Image
          src={"/icons/light/Sun.svg"}
          alt="theme-sw"
          width={24}
          height={24}
          className="transition-icon"
        />
      </button>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <button
        className="flex justify-center items-center"
        onClick={() => setTheme("dark")}
      >
        <Image
          src={"/icons/light/Moon.svg"}
          alt="theme-sw"
          width={24}
          height={24}
          className="transition-icon"
        />
      </button>
    );
  }
};

export default ThemeSwitcher;
