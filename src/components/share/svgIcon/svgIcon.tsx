"use client";

import React, { useRef, useEffect, useState } from "react";
import styles from "./svgIcon.module.css";

import { useRouter } from "next/router";
import cx from "classnames";
import { SvgIconProps } from "./svgIcon.types";

const SvgIcon = ({
  icon = "",
  className = "",
  type = "svg",
  width = 16,
  height = 16,
}: SvgIconProps) => {
  const svgRef = useRef<HTMLDivElement | null>(null);
  const [svgContent, setSvgContent] = useState<string>();
  const router = useRouter();
  const basePath = router.basePath || "";

  useEffect(() => {
    const loadSvgContent = async () => {
      try {
        let svgFilePath;
        if (type === "svg") {
          svgFilePath = `${basePath}/icons/${icon}.${type}`;
        } else {
          svgFilePath = `${basePath}/images/${icon}.${type}`;
        }
        const response = await fetch(svgFilePath);
        const svgContent: string = await response.text();
        setSvgContent(svgContent);
      } catch (error) {
        console.error(`Error loading SVG content: ${error}`);
      }
    };

    loadSvgContent();
  }, [icon, type]);

  if (svgContent)
    return (
      <div
        className={cx(styles.container, className)}
        ref={svgRef}
        dangerouslySetInnerHTML={{ __html: svgContent }}
        style={{ width, height }}
      />
    );
  else return null;
};

export default SvgIcon;
