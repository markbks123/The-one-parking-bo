import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { initialState } from "./layoutSlice.utils";
import { SetLayoutState, SetNotificationState } from "../../types/layoutSlice.types";

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setLayout: (state, action: PayloadAction<SetLayoutState>) => {
      state.header = action.payload.header;
      state.main = action.payload.main;
      state.footer = action.payload.footer;
    },
    setNotification: (
      state,
      action: PayloadAction<SetNotificationState | null>
    ) => {
      state.notificationAntd = action.payload;
    },
  },
});

export const { setLayout, setNotification } = layoutSlice.actions;

export default layoutSlice.reducer;
