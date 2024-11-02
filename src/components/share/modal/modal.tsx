
import React from "react";
import Modal from "react-modal";
import styles from "./modal.module.css";
import SvgIcon from "../svgIcon/svgIcon";
import { useDeviceType } from "@/hooks/useDeviceType";
import { DEVICE_TYPE } from "@/utils/type";
import { ModalComponentProps } from "./modak.types";

// const customStyles: Modal.Styles = {
//   content: {
//     margin: "auto",
//     width: "fit-content",
//     height: "fit-content",
//     border: "none",
//     background: "var(--rvp-white-color)",
//     borderRadius: "8px",
//     padding: "0px",
//     textAlign: "center",
//   },
// };

const modalStyles = ({
  isDevice,
  maxWidth,
  height,
  maxHeight,
  borderRadius,
  width,
}: {
  isDevice: DEVICE_TYPE;
  maxWidth: number;
  height: string;
  maxHeight: string;
  borderRadius: string;
  width: string;
}) => ({
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    zIndex: 1000,
  },
  content: {
    width: width,
    maxWidth: maxWidth || "600px",
    height: height || "fit-content",
    maxHeight: maxHeight || "unset",
    margin: "auto",
    background: "var(--rvp-white-color)",
    borderRadius: borderRadius,
    padding: "0px",
    inset: [DEVICE_TYPE.MOBILE].includes(isDevice) ? "0" : "5rem",
  },
});

const ModalComponent: React.FC<ModalComponentProps> = ({
  isOpen,
  closeModal,
  children,
  maxWidth = 300,
  height = "",
  maxHeight = "",
  isTimes = false,
  onRequestClose = false,
  borderRadius = "1rem",
  width = "80%",
  isfixedTimes = false,
  id,
}) => {
  const isDevice = useDeviceType();
  return (
    <Modal
      id={id}
      isOpen={isOpen}
      onRequestClose={onRequestClose ? closeModal : () => {}}
      style={modalStyles({
        isDevice,
        maxWidth,
        height,
        maxHeight,
        borderRadius,
        width,
      })}
      contentLabel="Modal"
      ariaHideApp={false}
      overlayClassName={styles.modalOverlay}
    >
      <div className={styles.inside}>
        {isTimes && (
          <span
            className={
              [DEVICE_TYPE.MOBILE].includes(isDevice) && isfixedTimes
                ? styles.fixedTimes
                : ""
            }
            onClick={closeModal}
          >
            <SvgIcon icon={"modalTimes"} />
          </span>
        )}
        {children}
      </div>
    </Modal>
  );
};

export default ModalComponent;
