import styles from "./hero.module.scss";
import { Button, ButtonLink } from "@/app/[lang]/ui";
import { type getDictionary } from "@/get-dictionary";
import Image from "next/image";

const Hero = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}) => {
  return (
    <section id="hero" className={styles["page-container"]}>
      <div className={styles["content-container"]}>
        <div className={styles["photo-block"]}>
          <div className={styles["photo-wrapper"]}>
            <Image
              src="/images/home/photo-min.jpg"
              alt="photo"
              width={450}
              height={450}
              quality={100}
              priority
            />
          </div>
        </div>
        <div className={styles["content"]}>
          <h1 className="title">
            <span>{dictionary.home.hero.pronoun}</span>{" "}
            {dictionary.home.hero.name}
          </h1>
          <p className={styles.subtitle}>{dictionary.home.hero.intro}</p>
          <div className={styles.btns}>
            <Button>{dictionary.home.hero["resume-btn"]}</Button>
            <ButtonLink href={dictionary.getInTouch.href} variant="secondary">
              {dictionary.getInTouch.title}
            </ButtonLink>
          </div>
        </div>
        <div className="w-full"></div>
      </div>
    </section>
  );
};

export default Hero;
