import { useDeviceType } from "@/hooks/useDeviceType";


export const useDashboard = () => {
   const isDevice = useDeviceType();

  return { isDevice };
};
