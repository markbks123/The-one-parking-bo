import { Column, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { CSSProperties, useMemo } from "react";
import { UseDataTable } from "./dataTable.types";


export const useDataTable = <T>({
  values,
  columns,
  columnPinning,
}: UseDataTable<T>) => {
  const data = useMemo(() => {
    if (values) {
      return values;
    } else {
      return [];
    }
  }, [values]);

  const getCommonPinningStyles = (column: Column<T>): CSSProperties => {
    const isPinned = column.getIsPinned();
    const isLastLeftPinnedColumn =
      isPinned === "left" && column.getIsLastColumn("left");
    const isFirstRightPinnedColumn =
      isPinned === "right" && column.getIsFirstColumn("right");

    return {
      boxShadow: isLastLeftPinnedColumn
        ? "-1px 0 1px -1px gray inset"
        : isFirstRightPinnedColumn
        ? "1px 0 1px -1px gray inset"
        : undefined,
      left: isPinned === "left" ? `${column.getStart("left")}px` : undefined,
      right: isPinned === "right" ? `${column.getAfter("right")}px` : undefined,
      position: isPinned ? "sticky" : "relative",
      minWidth: column.getSize(),
      zIndex: isPinned ? 1 : 0,
    };
  };

  const getColorStyles = (color: string): CSSProperties => {
    if (color) {
      return {
        backgroundColor: `var(${color})`,
      };
    } else {
      return {};
    }
  };

  const table = useReactTable({
    data: values,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      columnPinning,
    },
  });

  return { data, table, getCommonPinningStyles, getColorStyles };
};
