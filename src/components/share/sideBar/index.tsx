import Link from "next/link";
import styles from "./sideBar.module.css";
import ExpandList from "./expandList";
import { LIST_MENU } from "./sideBar.utils";
import { SidebarMainProps } from "./expandList.types";
import { useSideBar } from "./sideBar.hook";
import Image from "next/image";
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
      <div
        style={{
          width: "100%",
          position: "relative",
          justifyContent: "center",
          display: "flex",
          paddingTop: "24px",
        }}
      >
        <Image src={"/images/logo_one.png"} width={150} height={150} alt={""} />
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
        <li
          style={{
            paddingTop: "36px",
          }}
        >
          Logout
        </li>
      </ul>
    </nav>
  );
};

export default SidebarMain;
