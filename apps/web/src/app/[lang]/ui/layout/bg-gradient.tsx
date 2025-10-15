import styles from "@/app/[lang]/ui/layout/bg-gradient.module.scss";

const BgGradient = ({ position }: { position: "top" | "bottom" }) => {
  if (position === "top") {
    return (
      <>
        <div className={styles["top-blue-element"]} />
        <div className={styles["top-yellow-element"]} />
        <div className={styles["top-red-element"]} />
      </>
    );
  } else {
    return (
      <>
        <div className={styles["bottom-blue-element"]} />
        <div className={styles["bottom-yellow-element"]} />
        <div className={styles["bottom-red-element"]} />
      </>
    );
  }
};

export default BgGradient;
