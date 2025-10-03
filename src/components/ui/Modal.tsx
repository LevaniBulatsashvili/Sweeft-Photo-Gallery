import { type ReactNode, useRef } from "react";

interface IModal {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

const Modal = ({ isOpen, onClose, children, className = "" }: IModal) => {
  const modalRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className={`relative bg-white rounded-lg shadow-lg w-full max-w-3xl ${className}`}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-white text-2xl"
        >
          &times;
        </button>

        <div className="overflow-y-auto max-h-[90vh]">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
