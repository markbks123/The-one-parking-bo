import { useDeviceType } from "@/hooks/useDeviceType";
import { setLayout } from "@/redux/slices/layout/layoutSlice";
import { useAppDispatch } from "@/redux/store";
import { useEffect } from "react";


export const useDashboard = () => {
   const isDevice = useDeviceType();
   const dispatch = useAppDispatch();
   useEffect(() => {
    dispatch(setLayout({ header: true, main: true, footer: true,sidebar:true }));
  }, [dispatch]);
  return { isDevice };
};
