"use client";
import React, { useState } from "react";

import { PopupModal } from "@/Components/Common/ContainerModal";
import { PackageForm } from "@/Components/Packages/PackageForm";
import { PackageTable } from "@/Components/Packages/PackageTable";
import { CiCirclePlus } from "react-icons/ci";

const AdminPacakgePage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="text-4xl text-green-700 text-center font-semibold p-8 ">
        Packages Portal
      </div>
      <div className=" mx-16">
        {" "}
        <div className=" flex justify-end ">
          <button
            onClick={handleOpenModal}
            className="bg-green-700 p-3 px-4 rounded"
          >
            <div className="flex items-center">
              <div className="mr-2">
                <CiCirclePlus size={32} color="white" />
              </div>
              <span className="text-white font-semibold">Add Package</span>
            </div>
          </button>
        </div>
          <PackageTable/>
      </div>

      <PopupModal isOpen={showModal} onClose={handleCloseModal}>
        <PackageForm />
      </PopupModal>
    </>
  );
};

export default AdminPacakgePage;