import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./dashboard.utils";
import { GraphResponse } from "@/redux/types/dashboardSlice.types";




const dashboardSlice =createSlice({
  name:"dashboard",
  initialState,
  reducers:{
      graphStart:(state) =>{
         state.loading =true;
         state.error =null;
      },
      graphSuccess:(state,action: PayloadAction<GraphResponse>) =>{
        state.loading = false;
        state.graph =action.payload;
     },
     graphFailure:(state,action: PayloadAction<string>) =>{
        state.loading = false;
        state.error = action.payload || "An error occurred.";
     },
     incomeStart:(state) =>{
        state.loading =true;
        state.error =null;
     },
     incomeSuccess:(state) =>{
        state.loading = false;
     },
     incomeFailure:(state,action: PayloadAction<string>) =>{
        state.loading = false;
        state.error = action.payload || "An error occurred.";
     },
     updatePackageStart:(state) =>{
        state.loading =true;
        state.error =null;
     },
     updatePackageSuccess:(state) =>{
        state.loading =true;
        state.error =null;
     },
     updatePackageFailure:(state,action: PayloadAction<string>) =>{
        state.loading = false;
        state.error = action.payload || "An error occurred.";
     },
     deletePackageStart:(state) =>{
        state.loading =true;
        state.error =null;
     },
     deletePackageSuccess:(state) =>{
        state.loading =true;
        state.error =null;
     },
     deletePackageFailure:(state,action: PayloadAction<string>) =>{
        state.loading = false;
        state.error = action.payload || "An error occurred.";
     },
  }


});


export const {
   
    updatePackageStart,
    updatePackageSuccess,
    updatePackageFailure,
    deletePackageStart,
    deletePackageSuccess,
    deletePackageFailure

} = dashboardSlice.actions;


export default dashboardSlice.reducer;