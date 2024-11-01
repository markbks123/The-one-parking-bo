import DataTable from "../share/dataTable/dataTable";
import { usePromotion } from "./promotion.hooks";
import styles from "./promotion.module.css"

const PromotionContainer = () => {
  const { columns, packageTableData } = usePromotion();
  return (
    <div className={styles.wrapper}>
      <DataTable values={packageTableData} columns={columns} />
    </div>
  );
};

export default PromotionContainer;
