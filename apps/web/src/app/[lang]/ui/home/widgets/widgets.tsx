import { type getDictionary } from "@/get-dictionary";
import Widget from "./widget";
import styles from "./widgets.module.scss";

const Widgets = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["home"]["widgets"];
}) => {
  const content = dictionary.items.map((item) => (
    <Widget key={item.id} item={item} />
  ));

  return (
    <section className={styles["page-container"]}>
      <div className={styles["content-container"]}>
        <h2 className="mb-[3.2rem]">{dictionary.title}</h2>
        <ul className={styles.wrapper}>{content}</ul>
      </div>
    </section>
  );
};

export default Widgets;
