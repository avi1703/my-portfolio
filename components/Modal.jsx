// components/Modal.jsx
import { useEffect } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="sm:scale-75 md:scale-100 bg-white rounded-lg p-6 relative flex flex-col items-center">
        <div className="mb-4">
          {children}
        </div>
        <button
          onClick={onClose}
          className=" px-4 py-2 bg-accent text-white rounded-md "
        >
          Okay
        </button>
      </div>
    </div>
  );
};

export default Modal;
