import DrawerContainer from "../drawer/drawer";
import { useHeader } from "./header.hook";
import styles from "./header.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
const Header = () => {
  const { showDrawer, open, placement, onClose } = useHeader();
  return (
    <div className={styles.container}>
      <div className="flex flex-grow items-center justify-between px-4 py-5 shadow-2 md:px-5 2xl:px-10">
        <div className={styles.icons}>
          <RxHamburgerMenu size={36} onClick={showDrawer} />
        </div>
        <DrawerContainer open={open} setOpen={showDrawer} onClose={onClose} />
      </div>
    </div>
  );
};
export default Header;
