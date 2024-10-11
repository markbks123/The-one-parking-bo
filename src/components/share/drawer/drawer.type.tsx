export interface DrawertypeProps {
  open: boolean;
  setOpen: (e: boolean) => void;
  onClose: () => void;
}

export interface NavbarDrawerProps {
  pathname: string;
}
