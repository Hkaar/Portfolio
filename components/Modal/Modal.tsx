"use client";

import styles from "./Modal.module.css";

import { useEffect } from "react";
import { twMerge } from "tailwind-merge";

interface ModalProps extends React.HTMLAttributes<HTMLElement> {
  isOpen: boolean;
  onClose: CallableFunction;
}

export default function Modal({ isOpen, onClose, ...props }: ModalProps) {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return <div className={twMerge(styles.modal, props.className)}>
    <div className={styles.modalContent}>
      {props.children}
    </div>
  </div>;
}
