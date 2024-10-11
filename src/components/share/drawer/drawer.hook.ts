
import { useRouter } from "next/router";


export const useDrawer = () => {
   const router = useRouter();  
    
  const navigation =(path:string)=>{
    if (router.pathname !== path) {
    router.push({ pathname: path });
    }

  }
  

  return { navigation};
};
