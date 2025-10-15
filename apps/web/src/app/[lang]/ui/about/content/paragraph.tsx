import styles from "./paragraph.module.scss";

const Paragraph = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className={styles.paragraph}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default Paragraph;
