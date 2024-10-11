import { DEVICE_TYPE } from "@/utils/type";
import { useState, useEffect } from "react";

// สร้างตัวแปร global เพื่อจำลอง window object
const isBrowser = typeof window !== "undefined";

export const useDeviceType = () => {
  const [device, setDevice] = useState<DEVICE_TYPE>(DEVICE_TYPE.DESKTOP);

  useEffect(() => {
    if (isBrowser) {
      const handleResize = () => {
        const width = window.innerWidth;
        if (width <= 768) {
          setDevice(DEVICE_TYPE.MOBILE);
        } else if (width <= 1024) {
          setDevice(DEVICE_TYPE.TABLET);
        } else {
          setDevice(DEVICE_TYPE.DESKTOP);
        }
      };

      handleResize();
     

      
    }
  }, []);

  return device;
};
