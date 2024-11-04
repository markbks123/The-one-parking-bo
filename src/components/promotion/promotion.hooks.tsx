import { getProMotionTable } from "@/redux/slices/promotion/proMotionActions";
import { RootState, useAppDispatch } from "@/redux/store";
import { createColumnHelper } from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { PromotionTableColumns } from "./promotion.types";
import { dateFormat, numberTwoDecimalWithCommas } from "@/utils/format";
import Status from "../share/status/status";
import styles from "./promotion.module.css";
import SvgIcon from "../share/svgIcon/svgIcon";
import { PROMOTION_MODAL_STATE } from "../modals/promotion/promotionModal.utils";
import useModal from "@/hooks/useModal";
import { setLayout } from "@/redux/slices/layout/layoutSlice";
import { PACKAGE_TYPE } from "@/redux/slices/promotion/proMotion.utils";

export const usePromotion = () => {
  const dispatch = useAppDispatch();
  const packageTable = useSelector(
    (state: RootState) => state.promotion.packageTable
  );

  const loading = useSelector((state: RootState) => state.promotion.loading);
  const columnHelper = createColumnHelper<PromotionTableColumns>();
  const [modalState, setModalState] = useState<PROMOTION_MODAL_STATE>(
    PROMOTION_MODAL_STATE.DELETE
  );
  const [promotionName, setProMotionName] = useState<string>();
  const [promotion, setProMotion] = useState<PromotionTableColumns>({
    id: "",
    package: "",
    amount: 0,
    days: 0,
    isActive: false,
    startAt: "",
    expiredAt: "",
    createdAt: "",
    updatedAt: "",
    packageType: PACKAGE_TYPE.STANDARD,
  });
  const [isOpen, openModal, closeModal] = useModal();

  useEffect(() => {
    dispatch(
      setLayout({ header: true, main: true, footer: true, sidebar: true })
    );
  }, [dispatch]);
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
        packageType:
          e.packageType === "STANDARD"
            ? PACKAGE_TYPE.STANDARD
            : PACKAGE_TYPE.PROMOTION,
      }));
    }
    return [];
  }, [packageTable]);

  useEffect(() => {
    dispatch(getProMotionTable(() => {}));
  }, []);

  const columns = useMemo(
    () => [
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
                <li
                  onClick={() => {
                    setProMotionName(info.row.original.package);
                    setProMotion(info.row.original);
                    setModalState(PROMOTION_MODAL_STATE.EDIT);
                    openModal();
                  }}
                >
                  แก้ไขแพ็คแกจ
                </li>
                <li
                  onClick={() => {
                    setProMotionName(info.row.original.package);
                    setProMotion(info.row.original);
                    setModalState(PROMOTION_MODAL_STATE.DELETE);
                    openModal();
                  }}
                >
                  ลบแพ็คแกจ
                </li>
              </ul>
            </div>
          </div>
        ),
        size: 90,
      }),
    ],
    [columnHelper]
  );

  const createPromotion = () => {
    setModalState(PROMOTION_MODAL_STATE.CREATE);
    openModal();
  };
  return {
    columns,
    packageTableData,
    promotionName,
    isOpen,
    modalState,
    promotion,
    loading,
    closeModal,
    openModal,
    createPromotion,
  };
};
