import { itemCardProps } from "./card.types";
import styles from "./card.module.css";
import cx from "classnames";
const Card = ({ item, className }: itemCardProps) => {
  return (
    <div className={cx(styles.container, className)}>
      <div className={styles.content}>
        <span className={styles.title}>{item.title}</span>
        <span className={styles.number}>{item.total} </span>
        <span className={styles.detail}></span>
      </div>
      {item.icons}
    </div>
  );
};

export default Card;
