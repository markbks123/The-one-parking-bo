import { PACKAGE_TYPE } from "@/redux/slices/promotion/proMotion.utils";
import { FormikProps } from "formik";

export interface CreatePromotionFormKeysProps {
   name:string;
   days:string;
   amount:string;
   startAt:string;
   expiredAt:string;
    package: PACKAGE_TYPE
  }
  


  export interface  CreatePromotionFormProps
  extends FormikProps<CreatePromotionFormKeysProps> {
  closeModal: () => void;
  edit:boolean
}

