import { useMemo } from "react";
import { UseNavbarHeaderProps } from "./expandList.types";
import { useRouter } from "next/router";

export const useSideBar = ({ pathname }: UseNavbarHeaderProps) => {
  const router = useRouter();

  const currentTab: string = useMemo(() => {
    if (pathname) {
      return "/" + pathname.split("/")[1];
    } else {
      return "";
    }
  }, [pathname]);

  const currentSubMenu: string = useMemo(() => {
    if (pathname.split("/").length > 2) {
      return "/" + pathname.split("/")[1] + "/" + pathname.split("/")[2];
    } else {
      return "";
    }
  }, [pathname]);

  


  return { currentTab, currentSubMenu, router}
}