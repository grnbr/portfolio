import Image from "next/image";
import styles from "./footer.module.scss";
import { type getDictionary } from "@/get-dictionary";
import Link from "next/link";

const Footer = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["footer"];
}) => {
  const links = dictionary.links.links.map((link, i) => (
    <li key={i}>{link.href && <Link href={link.href}>{link.title}</Link>}</li>
  ));

  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <div id="left-side" className={styles["left-side"]}>
          <Image
            src="/icons/light/Logo.svg"
            alt="Logo"
            height={60}
            width={92.32}
            className="transition-icon mb-[1.6rem]"
          />
          <p className={styles.subtext}>
            {dictionary["underlogo-text"]}{" "}
            <span className="text-[2rem]">&#12483;</span>
          </p>
          <p>
            <span>&copy; </span>
            <time dateTime="2024">2024</time>
            <span>{dictionary.rights}</span>
          </p>
        </div>

        <div id="right-side" className={styles["right-side"]}>
          <div className={styles["links-wrapper"]}>
            <h4>{dictionary.links.title}</h4>
            <ul className={styles.links}>{links}</ul>
          </div>

          <div className={styles["socials-wrapper"]}>
            <h4>{dictionary.elsewhere}</h4>
            <ul className={styles.socials}>
              <li>
                <a
                  href="mailto:grigoriynbr@gmail.com?subject=Hello&body=Hi there!"
                  target="_blank"
                >
                  Email
                </a>
              </li>
              <li>
                <a href="https://github.com/waterrDrinker" target="_blank">
                  Github
                </a>
              </li>
              <li>
                <a href="https://t.me/hzrglpoqasd" target="_blank">
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href="https://discordapp.com/users/651174298844921919"
                  target="_blank"
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
