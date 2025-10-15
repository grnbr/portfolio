import Image from "next/image";
import styles from "./tech-card.module.scss";

interface Tech {
  name: string;
  logo: string;
  tag: string;
}

const TechCard = ({ tech }: { tech: Tech }) => {
  return (
    <li className={styles["card"]}>
      <div className={styles["logo-wrapper"]}>
        <Image
          src={tech.logo}
          className={styles.logo}
          alt="tech-logo"
          width={114}
          height={114}
        />
      </div>
      <div className={styles.names}>
        <h3 className={styles.name}>{tech.name}</h3>
        <p className={styles.tag}>{tech.tag}</p>
      </div>
    </li>
  );
};

export default TechCard;
