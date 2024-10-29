import { DrawertypeProps } from "./drawer.type";
import { LIST_MENU } from "../sideBar/sideBar.utils";
import { IoIosArrowForward } from "react-icons/io";
import { useDrawer } from "./drawer.hook";
import { Drawer } from "antd";
import styles from "./drawer.module.css";
const DrawerContainer = ({ open, onClose }: DrawertypeProps) => {
  const { navigation } = useDrawer();

  return (
    <Drawer
      placement={"left"}
      open={open}
      key={"left"}
      closeIcon={
        <IoIosArrowForward
          style={{
            color: "#fffffff",
            fontSize: "20px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "end",
          }}
          onClick={onClose}
        /> // เปลี่ยนสีของไอคอนปิด
      }
      width={200}
      style={{ backgroundColor: "#0f141c" }}
    >
      <div className={styles.nav}>
        {LIST_MENU.map((e, i) => (
          <div
            key={i}
            className={styles.button}
            onClick={() => {
              navigation(e.path);
              onClose();
            }}
          >
            {e.name}
          </div>
        ))}
      </div>
    </Drawer>
  );
};

export default DrawerContainer;
