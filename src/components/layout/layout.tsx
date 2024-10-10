import { LayoutContainerProps } from "./layout.types";
import styles from "./layout.module.css";
import MainFooter from "../share/mainFooter/mainFooter";
import { useLayout } from "./layout.hook";
import SidebarMain from "../share/sideBar";
const Layout: React.FC<LayoutContainerProps> = ({ children }) => {
  const { header, footer, asPath, pathname } = useLayout();
  return (
    <div className={styles.container}>
      <main>
        <SidebarMain asPath={asPath} pathname={pathname} />
        <div className={styles.content}>{children}</div>
      </main>
      <MainFooter />
    </div>
  );
};

export default Layout;
