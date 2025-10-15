import styles from "./head-page.module.scss";

export const HeadPage = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <>
      <div className={styles["page-container"]}>
        <div className={styles["head-page-container"]}>
          <h1 className="mb-[0.8rem]">{title}</h1>
          <p className="subtitle">{subtitle}</p>
        </div>
      </div>
      <hr className="underline" />
    </>
  );
};

export default HeadPage;
