export interface ModalComponentProps {
    isOpen: boolean;
    closeModal: () => void;
    children: React.ReactNode;
    maxWidth?: number;
    isTimes?: boolean;
    height?: string;
    maxHeight?: string;
    onRequestClose?: boolean;
    borderRadius?: string;
    width?: string;
    isfixedTimes?: boolean;
    id?: string;
  }
  