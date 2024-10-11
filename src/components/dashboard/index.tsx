import { DEVICE_TYPE } from "@/utils/type";
import Card from "../share/card/card";
import { cards } from "../share/card/card.mockup";
import { useDashboard } from "./dashboard.hooks";
import styles from "./dashboard.module.css";
import AreaChart from "../share/chart/AreaCharts/areaCharts";

const DashBoardPageContainer = () => {
  const { isDevice } = useDashboard();
  return (
    <div className={styles.wrapper}>
      <div className={styles.cards}>
        {cards.map((item) => (
          <Card
            item={item}
            key={item.id}
            className={
              isDevice == DEVICE_TYPE.MOBILE ? styles["w-100"] : styles["w-25"]
            }
          />
        ))}
      </div>
      <div className={styles.chartContent}>
        <AreaChart />
      </div>
    </div>
  );
};

export default DashBoardPageContainer;
