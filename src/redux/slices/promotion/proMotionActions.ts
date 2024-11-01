import { AppThunk } from "@/redux/store";
import api from "@/api";
import { getTableProMotionFailure, getTableProMotionStart, getTableProMotionSuccess } from "./proMotionSlice";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;



export  const getProMotionTable = ( callback: (check:boolean) => void): AppThunk   =>
  async (dispatch) => {
    dispatch( getTableProMotionStart());
    try {
    const response =  await api.get(
          `${apiBaseUrl}/back-office/Package/list`,
          
        ); 
       console.log(response.data,"response.data")
        dispatch(getTableProMotionSuccess(response.data));
        callback(true);
      
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || "An error occurred.";
      console.error(error);
      dispatch(getTableProMotionFailure(errorMessage));
         callback(false);
    }
  };