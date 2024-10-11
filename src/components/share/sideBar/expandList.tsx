// import Link from "next/link";
import SvgIcon from "../svgIcon/svgIcon";
import { useExpandList } from "./expandList.hooks";
import { ExpandListProps } from "./expandList.types";
import styles from "./expandList.module.css";
import cx from "classnames";

const ExpandList = ({ data, currentTab, currentSubMenu }: ExpandListProps) => {
  const { expand, handleClick } = useExpandList({
    data,
    currentTab,
    currentSubMenu,
  });

  return (
    <>
      <div
        onClick={handleClick}
        className={
          data.path === currentTab
            ? cx(styles.container, styles.active)
            : styles.container
        }
      >
        <p>{data.name}</p>
        <span>
          <SvgIcon
            icon={"navbarChevronDown"}
            width={12}
            height={6}
            className={expand ? styles.rotation : ""}
          />
        </span>
      </div>
      {/* {expand && (
        <ul>
          {data.subList!.map((item, i) => (
            <li
              key={i}
              className={item.path === currentSubMenu ? styles.active : ""}
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      )} */}
    </>
  );
};

export default ExpandList;
