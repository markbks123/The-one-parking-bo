import { DashBoardState } from "@/redux/types/dashboardSlice.types";

export const initialState: DashBoardState = {
  error: null,
  loading: false,
  income: 0,
  carAmount: 0,
  graph: {
    jan: 0,
    feb: 0,
    mar: 0,
    apr: 0,
    may: 0,
    jun: 0,
    jul: 0,
    aug: 0,
    sep: 0,
    oct: 0,
    nov: 0,
    dec: 0,
  },
};
