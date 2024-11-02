import { AppThunk } from "@/redux/store";
import api from "@/api";
import {
  addPackageStart,
  addPackageSuccess,
  deletePackageFailure,
  deletePackageStart,
  deletePackageSuccess,
  getTableProMotionFailure,
  getTableProMotionStart,
  getTableProMotionSuccess,
} from "./proMotionSlice";
import { request } from "http";
import {
  CreatePromotionRequest,
  DeletePromotionRequest,
} from "./proMotion.utils";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getProMotionTable =
  (callback: (check: boolean) => void): AppThunk =>
  async (dispatch) => {
    dispatch(getTableProMotionStart());
    try {
      const response = await api.get(`${apiBaseUrl}/back-office/Package/list`);
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

export const addPackage =
  (
    request: CreatePromotionRequest,
    callback: (check: boolean) => void
  ): AppThunk =>
  async (dispatch) => {
    dispatch(addPackageStart());
    try {
      const response = await api.post(
        `${apiBaseUrl}/back-office/add-package`,
        request
      );
      dispatch(addPackageSuccess(response.data));
      callback(true);
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || "An error occurred.";
      console.error(error);
      dispatch(getTableProMotionFailure(errorMessage));
      callback(false);
    }
  };

export const deletePackage =
  (
    request: DeletePromotionRequest,
    callback: (check: boolean) => void
  ): AppThunk =>
  async (dispatch) => {
    dispatch(deletePackageStart());
    try {
      const {id} = request
      console.log( request, " request")
      await api.delete(`${apiBaseUrl}/back-office/delete-package`,{
        id: id
      });
      dispatch(deletePackageSuccess());
      callback(true);
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || "An error occurred.";
      console.error(error);
      dispatch(deletePackageFailure(errorMessage));
      callback(false);
    }
  };
