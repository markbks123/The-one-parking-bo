import DataTable from "../share/dataTable/dataTable";
import SvgIcon from "../share/svgIcon/svgIcon";
import { usePromotion } from "./promotion.hooks";
import styles from "./promotion.module.css"

const PromotionContainer = () => {
  const { columns, packageTableData } = usePromotion();
  return (
    <div className={styles.wrapper}>
        <div className={styles.select_container}>
        <p>แพ็คแก็จทั้งหมด</p>
        <SvgIcon icon="plus" width={24} height={24} />
        </div>
      <DataTable values={packageTableData} columns={columns} />
    </div>
  );
};

export default PromotionContainer;
