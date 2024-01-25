"use client";
import { useState } from "react";
import { PopupModal } from "@/Components/Common/ContainerModal";
import { PackageForm } from "@/Components/Packages/PackageForm";
import React from "react";

const Page = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <button
        onClick={handleOpenModal}
        className="bg-green-700 p-3 px-4 rounded"
      >
        <div className="flex items-center">
          <span className="text-white font-semibold">Add Package</span>
        </div>
      </button>

      <PopupModal isOpen={showModal} onClose={handleCloseModal}>
        <PackageForm id={3} />
      </PopupModal>
    </>
  );
};

export default Page;
