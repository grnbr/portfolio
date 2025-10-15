import { type getDictionary } from "@/get-dictionary";
import styles from "./content.module.scss";
import TechCard from "./tech-card";

const Content = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["tech"];
}) => {
  const techsArray = Array.isArray(dictionary.content["tech-items"])
    ? dictionary.content["tech-items"]
    : [];

  const techs = techsArray.map((tech) => (
    <TechCard key={tech.name} tech={tech} />
  ));

  return (
    <section id="frontend" className={styles["page-container"]}>
      <div className={styles["content-container"]}>
        <h2 className={styles["section-title"]}>{dictionary.content.title}</h2>
        <ul className={styles["cards-wrapper"]}>{techs}</ul>
      </div>
    </section>
  );
};

export default Content;
