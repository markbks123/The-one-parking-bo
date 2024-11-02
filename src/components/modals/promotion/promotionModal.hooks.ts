import { PromotionTableColumns } from "@/components/promotion/promotion.types";
import { CreatePromotionFormKeysProps } from "../from/createPromotion.from.types";
import { useEffect, useMemo } from "react";
import { useAppDispatch } from "@/redux/store";
import {
  addPackage,
  deletePackage,
  editPackage,
  getProMotionTable,
} from "@/redux/slices/promotion/proMotionActions";
import {
  CreatePromotionRequest,
  DeletePromotionRequest,
  EditCreatePromotionRequest,
} from "@/redux/slices/promotion/proMotion.utils";

export const usePromotionModal = (
  { promotion }: { promotion: PromotionTableColumns },
  { closeModal }: { closeModal: () => void }
) => {
  const dispatch = useAppDispatch();
  const promotionInitialValues: CreatePromotionFormKeysProps = useMemo(() => {
    console.log(promotion, "promotion");
    return {
      name: promotion.package,
      days: promotion.days.toString(),
      amount: promotion.amount.toString(),
      startAt: promotion.startAt,
      expiredAt: promotion.expiredAt,
      package: promotion.packageType,
    };
  }, []);
  const handleAddPromotion = (value: CreatePromotionFormKeysProps) => {
    const request: CreatePromotionRequest = {
      package: value.name,
      days: value.days.toString(),
      amount: value.amount.toString(),
      startAt: value.startAt,
      expiredAt: value.expiredAt,
      packageType: value.package,
      isActive: true,
    };
    dispatch(
      addPackage(request, (check) => {
        if (check) {
          dispatch(getProMotionTable(() => {}));
          closeModal();
        }
      })
    );
  };
  const handleDelete = () => {
    const request: DeletePromotionRequest = {
      id: promotion.id,
    };
    dispatch(
      deletePackage(request, (check) => {
        if (check) {
          dispatch(getProMotionTable(() => {}));
          closeModal();
        }
      })
    );
  };

  const handleEdit = (value: CreatePromotionFormKeysProps) => {
    const request: EditCreatePromotionRequest = {
      id:promotion.id,
      package: value.name,
      days: value.days.toString(),
      amount: value.amount.toString(),
      startAt: value.startAt,
      expiredAt: value.expiredAt,
      packageType: value.package,
      isActive: true,
    };
    dispatch(
      editPackage(request, (check) => {
        if (check) {
          dispatch(getProMotionTable(() => {}));
          closeModal();
        }
      })
    );
  };
  editPackage;
  return {
    promotionInitialValues,
    handleAddPromotion,
    handleDelete,
    handleEdit,
  };
};
