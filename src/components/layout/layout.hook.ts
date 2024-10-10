

import  { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { FIRST_PAGE } from "../share/sideBar/sideBar.utils";
import { RootState } from "@/redux/store";

export const useLayout = () => {
   const router = useRouter();  
  const header = useSelector((state: RootState) => state.layout.header);
  const footer = useSelector((state: RootState) => state.layout.footer);
  const { pathname, asPath,locale, query } = router;
  useEffect(() => {
    console.log("HEEEE")
    router.push(FIRST_PAGE);
 
  }, []);

  return {
    header,
    footer,
    pathname,
    asPath,
    locale,
    query,
  };
};
