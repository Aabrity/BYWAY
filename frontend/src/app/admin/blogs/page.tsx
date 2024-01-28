"use client"
import { useState } from "react";

import { BlogTable } from "@/Components/Blogs/BlogTable";

import BlogForm from "@/Components/Blogs/BlogForm";
import { PopupModal } from "@/Components/Common/ContainerModal";
import { CiCirclePlus } from "react-icons/ci";

const AdminBlogPage = () => {
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
        Blogs Portal
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
              <span className="text-white font-semibold">Add Blogs</span>
            </div>
          </button>
        </div>
        <BlogTable />
      </div>

      <PopupModal isOpen={showModal} onClose={handleCloseModal}>
        <BlogForm />
      </PopupModal>
    </>
  );
};

export default AdminBlogPage;
