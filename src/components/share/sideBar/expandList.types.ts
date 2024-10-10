export interface MenuProps {
  name: string;
  path: string;
  subList?: {
    name: string;
    path: string;
  }[];
}

export interface ExpandListProps {
  data: MenuProps;
  currentTab: string;
  currentSubMenu: string;
}


export interface SidebarMainProps {
  asPath: string;
  pathname: string;
}

export interface NavbarHeaderProps {
  asPath: string;
  pathname: string;
  isOpen: boolean;
  closeNav: () => void;
}

export interface UseNavbarHeaderProps {
  asPath: string;
  pathname: string;
}
