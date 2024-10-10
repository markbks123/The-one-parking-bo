import Link from "next/link";
import styles from "./sidebar.module.css";
import SvgIcon from "../svgIcon/svgIcon";
import ExpandList from "./expandList";
import { LIST_MENU } from "./sideBar.utils";
import { SidebarMainProps } from "./expandList.types";
import { useSideBar } from "./sideBar.hook";

const SidebarMain = ({ asPath, pathname }: SidebarMainProps) => {
  const { currentTab, currentSubMenu } = useSideBar({
    asPath,
    pathname,
  });

  return (
    <nav className={styles.container}>
      <div className={styles.user}>
        <div className={styles.detail}></div>
      </div>
      <ul>
        {LIST_MENU.map((e, i) => (
          <li
            key={i}
            className={
              e.subList && e.subList?.length > 0
                ? styles.hasItem
                : e.path === currentTab
                ? styles.active
                : ""
            }
          >
            {e.subList ? (
              <ExpandList
                data={e}
                currentTab={currentTab}
                currentSubMenu={currentSubMenu}
              />
            ) : (
              <Link href={e.path}>{e.name}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarMain;
