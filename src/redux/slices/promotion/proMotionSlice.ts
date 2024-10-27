import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState } from "./proMotion.utils";



const promotionSlice =createSlice({
  name:"promotion",
  initialState,
  reducers:{
      promotionStart:(state) =>{
         state.loading =true;
         state.error =null;
      },
      promotionSuccess:(state) =>{
        state.loading = false;
     },
     promotionFailure:(state,action: PayloadAction<string>) =>{
        state.loading = false;
        state.error = action.payload || "An error occurred.";
     },
     addPackageStart:(state) =>{
        state.loading =true;
        state.error =null;
     },
     addPackageSuccess:(state) =>{
        state.loading = false;
     },
     addPackageFailure:(state,action: PayloadAction<string>) =>{
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
    promotionStart,
    promotionSuccess,
    promotionFailure,
    addPackageStart,
    addPackageSuccess,
    addPackageFailure,
    updatePackageStart,
    updatePackageSuccess,
    updatePackageFailure,
    deletePackageStart,

} = promotionSlice.actions;


export default  promotionSlice.reducer;