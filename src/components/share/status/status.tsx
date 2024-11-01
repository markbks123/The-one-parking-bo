import cx from "classnames";
import styles from "./status.module.css";
import { StatusProps } from "./status.types";

const Status = ({ className, title, values }: StatusProps) => {
  return (
    <div className={cx(styles.container, className)}>
      {title && <p>{title}</p>}
      {values.map(
        (element, index) =>
          element.value !== "-" && (
            <div key={index} className={styles[element.color]}>
              <p>{element.value}</p>
            </div>
          )
      )}
    </div>
  );
};

export default Status;
