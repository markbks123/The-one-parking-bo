import { CreatePromotionFormKeysProps, CreatePromotionFormProps } from "../from/createPromotion.from.types";

export enum PROMOTION_MODAL_STATE {
   EDIT ="EDIT",
   CREATE="CREATE",
   DELETE ="DELETE"
  }
  





export const initialValues: CreatePromotionFormKeysProps = {
   name:"",
   days:"",
   amount:"",
   startAt:"",
   expiredAt:"",
};
