import { setLayout } from "@/redux/slices/layout/layoutSlice";
import { useAppDispatch } from "@/redux/store"
import { useRouter } from "next/router";
import { useEffect } from "react";

export const useLoginPage = () =>{
    const dispatch = useAppDispatch();
    const router =useRouter();

    useEffect(() => {
        dispatch(setLayout({ header: false, main: true, footer: true,sidebar:false }));
      }, [dispatch]);
      return{}
}