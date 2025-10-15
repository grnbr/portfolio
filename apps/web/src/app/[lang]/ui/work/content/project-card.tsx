import { ButtonLink } from "../../button";
import styles from "./project-card.module.scss";
import Image from "next/image";
import { getDictionary } from "@/get-dictionary";

interface Work {
  id: string;
  name: string;
  icon: string;
  title: string;
  text: string;
  presentationImg: string;
  "text-btn": string;
  href: string;
}

interface Placeholder {
  icon: string;
  title: string;
  subtitle: string;
  getInTouch: string; // btnText
}

const ProjectCard = ({
  work,
  placeholder,
  getInTouch,
}: {
  work?: Work;
  placeholder?: Placeholder;
  getInTouch?: Awaited<ReturnType<typeof getDictionary>>["getInTouch"];
}) => {
  if (work) {
    return (
      <li className={styles["project-card"]}>
        <div className={styles.content}>
          <Image
            className={styles.logo}
            src={work.icon}
            alt={work.name}
            height={69}
            width={279}
          />
          <h3 className={styles.title}>{work.title}</h3>
          <p className={styles.text}>{work.text}</p>
          <a className={styles.link} href={work.href}>
            {work["text-btn"]}
            <div className="w-[2.4rem] h-[2.4rem] flex items-center justify-center">
              <Image
                src="/icons/light/Arrow-Right.svg"
                alt="arrow-right"
                width={18}
                height={12}
                className={`${styles["arrow-icon"]} transition-icon`}
              />
            </div>
          </a>
        </div>
        <div className={styles[`${work.name}-image`]}>
          <Image
            src={work.presentationImg}
            alt="presentationImg"
            width={564}
            height={320}
          />
        </div>
      </li>
    );
  }

  if (placeholder && getInTouch) {
    return (
      <li className={styles["placeholder-card"]}>
        <div className={styles["icon-wrapper"]}>
          <Image
            src={placeholder.icon}
            alt="stars-icon"
            width={54}
            height={54}
          />
        </div>
        <h3 className={styles["placeholder-title"]}>{placeholder.title}</h3>
        <p className={styles["placeholder-subtitle"]}>{placeholder.subtitle}</p>
        <ButtonLink href={getInTouch.href}>
          <Image
            src="/icons/light/send.svg"
            alt="send-icon"
            className="light-icon"
            width={24}
            height={24}
          />
          {getInTouch.title}
        </ButtonLink>
      </li>
    );
  }
};

export default ProjectCard;
