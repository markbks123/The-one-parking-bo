import { useDeviceType } from "@/hooks/useDeviceType";
import { DEVICE_TYPE } from "@/utils/type";
import { DrawerProps } from "antd/es/drawer";
import { useEffect, useState } from "react";

export const useHeader = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");
   const isDevice = useDeviceType();
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };


  useEffect(()=>{
     if(isDevice != DEVICE_TYPE.MOBILE){
          setOpen(false);
     }
  },[isDevice])
  return {showDrawer,open,placement,onClose,setPlacement}
};
