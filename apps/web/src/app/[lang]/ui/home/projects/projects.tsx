import styles from "./projects.module.scss";
import ProjectCard from "../../work/content/project-card";
import { type getDictionary } from "@/get-dictionary";

const Projects = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["projects"];
}) => {
  const worksArray = Array.isArray(dictionary.works)
    ? dictionary.works
    : [dictionary.works];
  const works = worksArray.map((work) => (
    <ProjectCard key={work.id} work={work} />
  ));

  return (
    <section id="projects" className={styles["page-container"]}>
      <div className={styles["content-container"]}>
        <h2 className="title">{dictionary.title}</h2>
        <ul>{works}</ul>
      </div>
    </section>
  );
};

export default Projects;
