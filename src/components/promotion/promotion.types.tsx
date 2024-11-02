import { PACKAGE_TYPE } from "@/redux/slices/promotion/proMotion.utils";

export interface PromotionTableColumns {
  index?: number;
  id: string;
  package: string;
  amount: number;
  days: number;
  isActive: boolean;
  startAt: string;
  expiredAt: string;
  createdAt: string;
  updatedAt: string;
  packageType: PACKAGE_TYPE;
  action?: string;
}
