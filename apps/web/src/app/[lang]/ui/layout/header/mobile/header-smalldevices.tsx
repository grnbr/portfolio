import Image from "next/image";
import Link from "next/link";
import styles from "./header-smalldevices.module.scss";
import { Locale } from "@/i18n-config";
import { type getDictionary } from "@/get-dictionary";
import NavBar from "./nav-bar";

const HeaderSmallDevices = ({
  dictionary,
  currentLang,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["header"];
  currentLang: Locale;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles["header-container"]}>
        <div className={styles.logo}>
          <Link href="/" className={styles.link}>
            <Image
              src="/icons/light/Logo.svg"
              alt="logo"
              width={46}
              height={30}
            />
          </Link>
        </div>
      </div>

      <div className={styles["nav-bar-container"]}>
        <NavBar dictionary={dictionary} currentLang={currentLang} />
      </div>
    </div>
  );
};

export default HeaderSmallDevices;
