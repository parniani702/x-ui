"use client";
import React from "react";
import { useModalStore } from "@/store/modalStore";

const Modal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isOpen, close } = useModalStore();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-black p-4 rounded shadow-md">
        <button className="mb-2 text-2xl text-red-500" onClick={close}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
