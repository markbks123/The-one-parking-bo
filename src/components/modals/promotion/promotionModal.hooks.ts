import { PromotionTableColumns } from "@/components/promotion/promotion.types";
import { CreatePromotionFormKeysProps } from "../from/createPromotion.from.types";
import { useEffect, useMemo } from "react";
import { useAppDispatch } from "@/redux/store";
import { addPackage, deletePackage, getProMotionTable } from "@/redux/slices/promotion/proMotionActions";
import { CreatePromotionRequest, DeletePromotionRequest,  } from "@/redux/slices/promotion/proMotion.utils";



export const usePromotionModal = ( { promotion }: { promotion: PromotionTableColumns },
    { closeModal }: { closeModal: () => void } ) => {
    const dispatch = useAppDispatch();
    const promotionInitialValues:CreatePromotionFormKeysProps = useMemo(() => {
        console.log(promotion,"promotion")
        return {
            name:promotion.package,
            days:promotion.days.toString(),
            amount:promotion.amount.toString(),
            startAt: promotion.startAt ,
      expiredAt: promotion.expiredAt 
         
        };

   
      }, []);
const  handleAddPromotion =(value:CreatePromotionFormKeysProps)=>{
    const request: CreatePromotionRequest = {
        package: value.name,
        days:value.days.toString(),
        amount: value.amount.toString(),
        startAt: value.startAt,
        expiredAt: value.expiredAt,
        packageType: "PROMOTION"
    };
      dispatch(addPackage(request, (check) => {
        if(check){
            dispatch(getProMotionTable(() => {}));
        closeModal()
        }
       
      }));
}
const  handleDelete=()=>{

    const request: DeletePromotionRequest = {
        id: promotion.id
    };
      dispatch(deletePackage(request, (check) => {
        if(check){
            closeModal()
        }
 
      }));
}

return {
    promotionInitialValues,
    handleAddPromotion,
    handleDelete
}
}