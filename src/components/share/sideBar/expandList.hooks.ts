"use client";

import { useEffect, useState } from "react";
import {ExpandListProps } from "./expandList.types";

export const useExpandList = ({
  data,
  currentTab,
  currentSubMenu,
}: ExpandListProps) => {
  const [expand, setExpand] = useState<boolean>(false);

  const handleClick = () => {
    setExpand((prevState) => !prevState);
  };

  useEffect(() => {
    // console.log(data, currentTab, currentSubMenu);
    if (data.path === currentTab && currentSubMenu !== "") {
      setExpand(true);
    }
  }, [data, currentSubMenu, currentTab]);

  return { expand, handleClick };
};
