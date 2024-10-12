

import  { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { FIRST_PAGE } from "../share/sideBar/sideBar.utils";
import { RootState, useAppDispatch } from "@/redux/store";
import { setLayout } from "@/redux/slices/layout/layoutSlice";

export const useLayout = () => {
   const router = useRouter();  
  const header = useSelector((state: RootState) => state.layout.header);
  const footer = useSelector((state: RootState) => state.layout.footer);
  const sidebar = useSelector((state: RootState) => state.layout.sidebar);
  const { pathname, asPath,locale, query } = router;
  const dispatch = useAppDispatch();
  // useEffect(() => {
  // //  if (typeof window !== 'undefined') {
  // //   router.push({ pathname: FIRST_PAGE });
  // // }

  
  // }, []);
  

  return {
    header,
    footer,
    pathname,
    asPath,
    locale,
    query,
    sidebar 
  };
};
