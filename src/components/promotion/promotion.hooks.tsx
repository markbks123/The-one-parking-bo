import { getProMotionTable } from "@/redux/slices/promotion/proMotionActions";
import { RootState, useAppDispatch } from "@/redux/store";
import { createColumnHelper } from "@tanstack/react-table";
import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { PromotionTableColumns } from "./promotion.types";
import { dateFormat, numberTwoDecimalWithCommas } from "@/utils/format";
import Status from "../share/status/status";
import styles from "./promotion.module.css";
import SvgIcon from "../share/svgIcon/svgIcon";

export const usePromotion = () => {
  const dispatch = useAppDispatch();
  const packageTable = useSelector(
    (state: RootState) => state.promotion.packageTable
  );
  const loading = useSelector((state: RootState) => state.dashboard.loading);
  const columnHelper = createColumnHelper<PromotionTableColumns>();

  const packageTableData: PromotionTableColumns[] = useMemo(() => {
    if (packageTable) {
      return packageTable.map((e) => ({
        id: e.id,
        package: e.package,
        amount: e.amount,
        days: e.days,
        isActive: e.isActive,
        startAt: e.startAt,
        expiredAt: e.expiredAt,
        createdAt: e.createdAt,
        updatedAt: e.updatedAt,
        packageType: e.packageType,
      }));
    }
    return [];
  }, [packageTable]);

  useEffect(() => {
    dispatch(getProMotionTable(() => {}));
  }, []);

  const columns = useMemo(() => [
    columnHelper.accessor("index", {
      header: "ลำดับ",
      cell: (info) => info.row.index + 1,
      size: 48,
    }),
    columnHelper.accessor("package", {
      header: "ชื่อ",
      size: 240,
    }),
    columnHelper.accessor("amount", {
      header: "ราคา",
      size: 120,
      cell: (info) => numberTwoDecimalWithCommas(info.renderValue() || 0),
    }),
    columnHelper.accessor("days", {
      header: "จำนวนวัน",
      size: 120,
    }),
    columnHelper.accessor("isActive", {
      header: "สถานะ",
      size: 120,
      cell: (info) => (
        <Status
          className={styles.status}
          values={[
            {
              value: info.renderValue() ? "ใช้งาน" : "ไม่ได้ใช้งาน",
              color: info.renderValue() ? "green" : "red",
            },
          ]}
        />
      ),
    }),
    columnHelper.accessor("startAt", {
      header: "วันเริ่ม",
      size: 100,
      cell: (info) => dateFormat(info.renderValue() || "", "DD/MM/BBBB"),
    }),
    columnHelper.accessor("expiredAt", {
      header: "วันสิ้นสุด",
      size: 100,
      cell: (info) => dateFormat(info.renderValue() || "", "DD/MM/BBBB"),
    }),
    columnHelper.accessor("createdAt", {
      header: "วันที่สร้าง",
      size: 100,
      cell: (info) => dateFormat(info.renderValue() || "", "DD/MM/BBBB"),
    }),
    columnHelper.accessor("updatedAt", {
      header: "วันที่แก้ไข",
      size: 100,
      cell: (info) => dateFormat(info.renderValue() || "", "DD/MM/BBBB"),
    }),
    columnHelper.accessor("packageType", {
      header: "ประเภท",
      size: 100,
    }),
    columnHelper.accessor("action", {
      header: "ดำเนินการ",
      cell: (info) => (
        <div className={styles.action}>
          <SvgIcon icon="orderAction" width={24} height={24} />
          <div className={styles.dropdown}>
            <ul>
              <li onClick={() => {}}>คืนสถานะกรมธรรม์</li>
            </ul>
          </div>
        </div>
      ),
      size: 90,
    }),
  ], [columnHelper]);

  return {
    columns,
    packageTableData,
  };
};
