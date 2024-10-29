
import SvgIcon from "../share/svgIcon/svgIcon";
import styles from "./loading.module.css";
import { LoadingScreenProps } from "./loading.types";

const LoadingScreen = ({ width = 80, height = 80 }: LoadingScreenProps) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.icon}>
        <SvgIcon icon="loading" width={width} height={height} />
      </div>
    </div>
  );
};

export default LoadingScreen;
