import { FormikProps } from "formik";

export interface CreatePromotionFormKeysProps {
   name:string;
   days:string;
   amount:string;
   startAt:string;
   expiredAt:string;

  }
  


  export interface  CreatePromotionFormProps
  extends FormikProps<CreatePromotionFormKeysProps> {
  closeModal: () => void;
  edit:boolean
}

