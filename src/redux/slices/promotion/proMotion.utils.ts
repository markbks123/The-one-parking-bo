import { PromotionState } from "@/redux/types/proMotionSlice.types";

export const initialState: PromotionState = {
  error: null,
  loading: false,
  packageTable: [],
};

export interface CreatePromotionRequest {
  package: string;
  days: string;
  amount: string;
  startAt: string;
  expiredAt: string;
  packageType: string;
}
export interface DeletePromotionRequest {
  id: string;
}
