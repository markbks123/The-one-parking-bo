import api from "@/api";
import { AppThunk } from "@/redux/store";
import { getTableProMotionStart, getTableProMotionSuccess, getTableProMotionFailure } from "../promotion/proMotionSlice";
import { loginFailure, loginStart, loginSuccess } from "./loginSlice";
import session from "@/utils/session";
import { LoginRequest } from "@/redux/types/loginSlice.types";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const login=
  (request:LoginRequest,callback: (check: boolean) => void): AppThunk =>
  async (dispatch) => {
    dispatch(loginStart());
    try {
      const response = await api.post(`${apiBaseUrl}/Login`, {
            username: request.username,
            password: request.password,
          },
         );
          const { token } = response.data;
         session.saveKeyStorage("user", JSON.stringify(response.data));
          session.saveAccessToken(token);
      dispatch(loginSuccess(response.data));
      callback(true);
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || "An error occurred.";
      console.error(error);
      dispatch(loginFailure(errorMessage));
      callback(false);
    }
  };