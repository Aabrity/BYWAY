import React from "react";

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const PopupModal: React.FC<CustomModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  // No need to manage state internally

  const handleClose = () => {
    onClose();
  };

  return isOpen ? (
    <div className="fixed top-0 left-0 w-[80%] h-full flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-12 rounded text-center">
        {children}
        <button
          onClick={handleClose}
          className="mt-10 px-6 py-2 bg-lightgreen text-black rounded hover:bg-lightgreen-dark focus:outline-none focus:ring focus:border-lightgreen-dark transition bg-green-200"
        >
          Close
        </button>
      </div>
    </div>
  ) : null;
};
