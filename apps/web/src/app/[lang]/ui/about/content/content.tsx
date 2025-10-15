import { type getDictionary } from "@/get-dictionary";
import styles from "./content.module.scss";
import Paragraph from "./paragraph";
import Image from "next/image";
import { ButtonLink } from "@/app/[lang]/ui";

const Content = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}) => {
  const wordsArray = dictionary.about["closing-text"].split(" ");
  const closingText = wordsArray.map((word, i) => {
    switch (word) {
      case "e-mail":
        wordsArray[i + 1] = " " + wordsArray[i + 1];
        return (
          <a className={styles.link} href="mailto:grigoriynbr@gmail.com">
            e-mail
          </a>
        );

      case "Telegram.":
        return (
          <a className={styles.link} href="https://t.me/hzrglpoqasd">
            Telegram.
          </a>
        );

      default:
        return word + " ";
    }
  });

  return (
    <div className={styles["page-container"]}>
      <div className={styles["content-container"]}>
        <div id="text-content" className={styles["text-content"]}>
          <div className={styles["main-text"]}>
            <Paragraph
              title={dictionary.about["iam-paragraph"].title}
              text={dictionary.about["iam-paragraph"].text}
            />
            <Paragraph
              title={dictionary.about["ido-paragraph"].title}
              text={dictionary.about["ido-paragraph"].text}
            />
          </div>

          <div className={styles["closing-text"]}>
            <p>{...closingText}</p>
          </div>

          <div className={styles["appeal-text"]}>
            <p>{dictionary.about.appeal}</p>
          </div>
        </div>

        <div id="photo-content" className={styles["photo-content"]}>
          <div className={styles["image-wrapper"]}>
            <Image
              className={styles.portrait}
              src="/images/about/photo-min.jpg"
              width={344}
              height={443}
              alt="portrait"
            />
          </div>
          <div className={styles["button-wrapper"]}>
            <ButtonLink href={dictionary.getInTouch.href}>
              <Image
                src="/icons/light/send.svg"
                alt="send-icon"
                className="light-icon"
                width={24}
                height={24}
                priority
              />
              {dictionary.getInTouch.title}
            </ButtonLink>
          </div>
        </div>

        <div className={styles["button-wrapper--outside"]}>
          <ButtonLink href={dictionary.getInTouch.href}>
            <Image
              src="/icons/light/send.svg"
              alt="send-icon"
              className="light-icon"
              width={24}
              height={24}
            />
            {dictionary.getInTouch.title}
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default Content;
