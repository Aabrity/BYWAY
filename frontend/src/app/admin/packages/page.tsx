"use client";
import React, { useState } from "react";

import { PopupModal } from "@/Components/Common/ContainerModal";
import { PackageForm } from "@/Components/Packages/PackageForm";
import { PackageTable } from "@/Components/Packages/PackageTable";
import { CiCirclePlus } from "react-icons/ci";
import { PackageTable } from "@/Components/Packages/PackageTable";
import { BlogTable } from "@/Components/Blogs/BlogTable";

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
      <div className="text-4xl text-green-700 text-center font-semibold p-4">
        Packages Portal
      </div>
      <div className=" mx-16 ">
        {" "}
        {/* p-2 just for  div visualization*/}
        <div className=" flex justify-end bg-blue-400">
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
        <div>
          <PackageTable/>
        </div>
        <div>
          <BlogTable/>
        </div>
      </div>

      <PopupModal isOpen={showModal} onClose={handleCloseModal}>
        <PackageForm />
      </PopupModal>
    </div>
  );
};

export default YourPageComponent;