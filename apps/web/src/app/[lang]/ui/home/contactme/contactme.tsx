import styles from "./contactme.module.scss";
import { type getDictionary } from "@/get-dictionary";
import { ButtonLink } from "@/app/[lang]/ui";
import Image from "next/image";

const Contactme = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}) => {
  return (
    <section className={styles["page-container"]}>
      <div className={styles["content-container"]}>
        <div className="max-w-[49.6rem]">
          <h2 className="mb-[0.8rem]">{dictionary.home.contactme.title}</h2>
          <p className={styles.subtitle}>
            {dictionary.home.contactme.subtitle}
          </p>
        </div>
        <div className={styles.btn}>
          <ButtonLink className="primary-btn" href={dictionary.getInTouch.href}>
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
    </section>
  );
};

export default Contactme;
