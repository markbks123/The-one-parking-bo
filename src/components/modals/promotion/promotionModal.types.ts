import { PromotionTableColumns } from "@/components/promotion/promotion.types";
import { PROMOTION_MODAL_STATE } from "./promotionModal.utils";


export interface ProMotionModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  onSubmit: () => void;
  status: PROMOTION_MODAL_STATE;
  name :string
  promotion:PromotionTableColumns
}


