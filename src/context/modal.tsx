"use client";

import { useRef, createContext, useState, useContext, ReactNode } from "react";
import ReactDOM from "react-dom";
import "./modal.css";

interface ModalContextType {
  modalRef: React.RefObject<HTMLDivElement | null>;
  modalContent: ReactNode;
  closeModal: () => void;
  setModalContent: (content: ReactNode) => void;
  setOnModalClose: (callback: (() => void) | null) => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

interface ModalProviderProps {
  children: ReactNode;
}

export function ModalProvider({ children }: ModalProviderProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [modalContent, setModalContent] = useState<ReactNode>(null);
  const [onModalClose, setOnModalClose] = useState<(() => void) | null>(null);


  const closeModal = () => {
    setModalContent(null);
    if (typeof onModalClose === "function") {
      setOnModalClose(null);
      onModalClose();
    }
  };

  const contextValue: ModalContextType = {
    modalRef,
    modalContent,
    closeModal,
    setModalContent,
    setOnModalClose,
  };

  return (
    <>
      <ModalContext.Provider value={contextValue}>{children}</ModalContext.Provider>
      <div ref={modalRef} />
    </>
  );
}

export function Modal() {
  const context = useContext(ModalContext);
  if (!context) return null;
  const { modalRef, modalContent, closeModal } = context;
  if (!modalRef.current || !modalContent) return null;

  return ReactDOM.createPortal(
    <div id="modal">
      <div id="modal-background" onClick={closeModal} />
      <div id="modal-content">{modalContent}</div>
    </div>,
    modalRef.current
  );
}

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
