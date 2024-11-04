"use client";

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

  return <div className="grid place-items-center fixed z-50 top-0 left-0 w-full h-full bg-base-dark dark:bg-base-light bg-opacity-25 dark:bg-opacity-5 backdrop-blur-lg dark:backdrop-blur-lg">
    <div className={twMerge("bg-base-light dark:bg-base-dark text-base-dark dark:text-base-light rounded-md relative", props.className)}>
      {props.children}
    </div>
  </div>;
}
