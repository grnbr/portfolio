import { type getDictionary } from "@/get-dictionary";
import styles from "./content.module.scss";
import ProjectCard from "./project-card";

const Content = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}) => {
  const worksArray = Array.isArray(dictionary.projects.works)
    ? dictionary.projects.works
    : [dictionary.projects.works];
  const works = worksArray.map((work) => (
    <ProjectCard key={work.id} work={work} />
  ));

  return (
    <section id="projects" className={styles["page-container"]}>
      <div className={styles["content-container"]}>
        <ul className={styles["cards-wrapper"]}>
          {works}
          <ProjectCard
            placeholder={dictionary.projects.placeholder}
            getInTouch={dictionary.getInTouch}
          />
        </ul>
      </div>
    </section>
  );
};

export default Content;
