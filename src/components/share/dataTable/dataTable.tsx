import { numberTwoDecimalWithCommas, numberWithCommas } from "@/utils/format";
import { flexRender } from "@tanstack/react-table";
import cx from "classnames";
import { Fragment } from "react";
import { useDataTable } from "./dataTable.hooks";
import styles from "./dataTable.module.css";
import { DataTableProps } from "./dataTable.types";

declare module "@tanstack/table-core" {
  // @ts-expect-error
  interface ColumnMeta<TData extends RowData, TValue> {
    rowSpan?: number;
    headerColor?: string;
    footerColor?: string;
    cellAlign?: "left" | "center" | "right";
    isDecimal?: boolean;
  }
}

/**
 * README
 * ------
 * mergeSumFooter - ระบุคอลัมน์ที่ต้องการยกเว้นจากการคำนวณผลรวม และใช้เป็นคอลัมน์ footer แทน ฟังก์ชันนี้จะคำนวณผลรวมของคอลัมน์ที่เป็นตัวเลขที่เหลือทั้งหมด และแสดงผลรวมในเซลล์ footer
 *
 * ตัวอย่างการใช้งาน:
 * mergeSumFooter={["no", "วันที่ทำสัญญา"]}
 *
 * ในตัวอย่างนี้ คอลัมน์ "no" และ "วันที่ทำสัญญา" จะไม่รวมอยู่ในการคำนวณผลรวม แต่จะใช้เป็นคอลัมน์ footer แทน ในขณะที่คอลัมน์ตัวเลขที่เหลือจะถูกรวมผล
 * ------
 * customFooter - ใช้สำหรับสร้าง footer ขึ้นมาเองตามที่ต้องการ
 *
 * ตัวอย่างการใช้งาน:
 * <tfoot>
 *   <tr>
 *     <td colSpan={10}>รวม</td>
 *   </tr>
 * </tfoot>
 *
 * ในตัวอย่างนี้, จะสร้างแถว footer ที่มีเซลล์เดียวที่ครอบคลุม 10 คอลัมน์ และมีข้อความ "รวม"
 */

const DataTable = <T,>({
  values,
  columns,
  columnPinning = { left: [], right: [] },
  customExpand,
  className = "",
  mergeSumFooter,
  sumFooterLabel = "รวมทั้งหมด",
  customFooter,
}: DataTableProps<T>) => {
  const { data, table, getCommonPinningStyles, getColorStyles } = useDataTable({
    values,
    columns,
    columnPinning,
  });

  return (
    <div className={styles.wrapper}>
      <div className={cx(styles.container, className)}>
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const { column } = header;
                  const rowSpan = column.columnDef.meta?.rowSpan;
                  const color = column.columnDef.meta?.headerColor || "";

                  if (
                    !header.isPlaceholder &&
                    rowSpan !== undefined &&
                    header.id === header.column.id
                  ) {
                    return null;
                  }

                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      rowSpan={rowSpan}
                      style={{
                        ...getCommonPinningStyles(column),
                        ...getColorStyles(color),
                      }}
                    >
                      {flexRender(column.columnDef.header, header.getContext())}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <Fragment key={row.id}>
                <tr>
                  {row.getVisibleCells().map((cell) => {
                    const { column } = cell;

                    return (
                      <td
                        key={cell.id}
                        align={column.columnDef.meta?.cellAlign || "center"}
                        style={{
                          ...getCommonPinningStyles(column),
                        }}
                        className={
                          (cell.row.original as any).isError ? styles.error : ""
                        }
                      >
                        {flexRender(column.columnDef.cell, cell.getContext())}
                      </td>
                    );
                  })}
                </tr>
                {row.getIsExpanded() && customExpand && (
                  <tr className={styles.subRow}>
                    <td colSpan={row.getVisibleCells().length}>
                      {customExpand({ row })}
                    </td>
                  </tr>
                )}
              </Fragment>
            ))}
          </tbody>
          {mergeSumFooter && (
            <>
              {table.getFooterGroups().length > 0 && (
                <tfoot>
                  <tr>
                    <td
                      key="รวมทั้งหมด"
                      colSpan={table
                        .getFooterGroups()[0]
                        .headers.reduce<number>((sum, currentItem) => {
                          if (mergeSumFooter.includes(currentItem.id)) {
                            return sum + currentItem.colSpan;
                          }
                          return sum;
                        }, 0)}
                    >
                      {sumFooterLabel}
                    </td>
                    {table.getFooterGroups()[0].headers.map((header) => {
                      const { column } = header;
                      const color = column.columnDef.meta?.footerColor || "";

                      if (![...mergeSumFooter].includes(header.id)) {
                        // filter เฉพาะ column ที่มีค่าเป็น number
                        const filterNumberProperties = data.map((obj) => {
                          return Object.fromEntries(
                            Object.entries(obj as any).filter(
                              ([, value]) => typeof value === "number"
                            )
                          );
                        });

                        // เช็คว่า column นั้นมี key ที่ตรงกับ filter ไหม
                        const isNotMatch = filterNumberProperties.every(
                          (obj) => !(header.id in obj)
                        );

                        if (isNotMatch) {
                          return <td key={header.id}></td>;
                        }

                        const totalSum = filterNumberProperties.reduce(
                          (sum, currentItem) => {
                            const numericValue = Number(
                              currentItem[header.id] || 0
                            );
                            return !isNaN(numericValue)
                              ? sum + numericValue
                              : sum;
                          },
                          0
                        );

                        const formattedSum = column.columnDef.meta?.isDecimal
                          ? numberTwoDecimalWithCommas(totalSum) || "0.00"
                          : numberWithCommas(totalSum) || "0";

                        return (
                          <td
                            key={header.id}
                            align={column.columnDef.meta?.cellAlign || "center"}
                            style={{
                              minWidth: header.getSize(),
                              ...getColorStyles(color),
                              ...getCommonPinningStyles(column),
                            }}
                          >
                            {formattedSum}
                          </td>
                        );
                      }

                      return null;
                    })}
                  </tr>
                </tfoot>
              )}
            </>
          )}
          {customFooter}
        </table>
      </div>
    </div>
  );
};

export default DataTable;
