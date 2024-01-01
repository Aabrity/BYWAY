// LogoutModal.tsx

import React from 'react';

interface LogoutModalProps {
  onClose: () => void;
}

const LogoutModal: React.FC<LogoutModalProps> = ({ onClose }) => {
  const handleProceedToLogin = () => {
    onClose(); 
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-12 rounded text-center">
        <p>You have not authenticated yet.</p>
        <button
          onClick={handleProceedToLogin}
          className="mt-10 px-6 py-2 bg-lightgreen text-black rounded hover:bg-lightgreen-dark focus:outline-none focus:ring focus:border-lightgreen-dark transition bg-green-200"
        >
          Proceed to Login
        </button>
      </div>
    </div>
  );
};

export default LogoutModal;
