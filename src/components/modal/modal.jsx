import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./modal.css";

const Modal = ({ children, onClose }) => {
  const elRef = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    return () => {
      modalRoot.removeChild(elRef.current);
      if (onClose) {
        onClose();
      }
    };
  }),
    [onClose];

  return createPortal(
    <>
      <div className="modal-overlay"></div>
      <div className="modal-container">
        <div onClick={onClose} className="close-btn"></div>
        {children}
      </div>
    </>,
    elRef.current
  );
};

export default Modal;
