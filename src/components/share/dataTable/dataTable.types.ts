import { ColumnDef, ColumnPinningState, Row } from "@tanstack/react-table";
import { ReactNode } from "react";

export interface DataTableProps<T> {
  values: T[];
  columns: ColumnDef<T, any>[];
  customExpand?: ({ row }: { row: Row<T> }) => JSX.Element;
  className?: string;
  columnPinning?: ColumnPinningState;
  mergeSumFooter?: string[];
  sumFooterLabel?: string;
  customFooter?: ReactNode;
}

export interface UseDataTable<T> {
  values: T[];
  columns: ColumnDef<T, any>[];
  columnPinning?: ColumnPinningState;
}
