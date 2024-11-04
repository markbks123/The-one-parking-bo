import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./dashboard.utils";
import {
  CarResponse,
  GraphPeaktimeResponse,
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
    graphCarStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    graphCarSuccess: (state, action: PayloadAction<GraphResponse >) => {
      state.loading = false;
      state.graphCar = action.payload;
    },
     graphCarFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload || "An error occurred.";
    },
    graphPeaktimeStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    graphPeaktimeSuccess: (state, action: PayloadAction<GraphPeaktimeResponse>) => {
      state.loading = false;
      state.graphPeaktime = action.payload;
    },
     graphPeaktimeFailure: (state, action: PayloadAction<string>) => {
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
      state.loading = false;
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
  graphCarStart,
  graphCarSuccess,
  graphCarFailure,
  graphPeaktimeStart,
  graphPeaktimeSuccess,
  graphPeaktimeFailure,
  incomeStart,
  incomeSuccess,
  incomeFailure,
  totalCarStart,
  totalCarSuccess,
  totalCarFailure,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
