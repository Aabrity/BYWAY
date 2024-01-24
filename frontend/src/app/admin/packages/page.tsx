"use client";
import React, { useState } from "react";
import { PopupModal } from "@/Components/Common/ContainerModal";
import { PackageForm } from "@/Components/Packages/PackageForm";

const YourPageComponent: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h1>Your Page Content</h1>

      {/* Button to manually open the modal */}
      <button onClick={handleOpenModal} className="bg-green-600 p-4">
        Open Modal
      </button>

      {/* Modal component */}
      <PopupModal isOpen={showModal} onClose={handleCloseModal}>
        <PackageForm />
      </PopupModal>
    </div>
  );
};

export default YourPageComponent;