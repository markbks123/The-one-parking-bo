import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./dashboard.utils";
import {
  CarResponse,
  GraphResponse,
  IncomeResponse,
} from "@/redux/types/dashboardSlice.types";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    graphStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    graphSuccess: (state, action: PayloadAction<GraphResponse>) => {
      state.loading = false;
      state.graph = action.payload;
    },
    graphFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload || "An error occurred.";
    },
    incomeStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    incomeSuccess: (state, action: PayloadAction<IncomeResponse>) => {
      state.loading = false;
      state.income = action.payload.income;
    },
    incomeFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload || "An error occurred.";
    },
    totalCarStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    totalCarSuccess: (state, action: PayloadAction<CarResponse>) => {
      state.loading = true;
      state.carAmount = action.payload.carAmount;
    },
    totalCarFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload || "An error occurred.";
    },
  },
});

export const {
  graphStart,
  graphSuccess,
  graphFailure,
  incomeStart,
  incomeSuccess,
  incomeFailure,
  totalCarStart,
  totalCarSuccess,
  totalCarFailure
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
