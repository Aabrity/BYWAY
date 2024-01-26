"use client";
import React, { useState } from "react";
import axios from "axios";

import { IoLocationSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";


import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import HeaderTab from "@/Components/Header";



interface ContactFormData {
  email: string;
  contactNumber: string;
  subject: string;
  address: string;
  message: string;
}

const ContactUsForm: React.FC = () => {
  const [contactFormData, setContactFormData] = useState<ContactFormData>({
    email: "",
    contactNumber: "",
    subject: "",
    address: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactFormData({
      ...contactFormData,
      [name]: value,
    });
  };

  const handleQuillChange = (content: string) => {
    setContactFormData({
      ...contactFormData,
      message: content,
    });
  };

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8081/contact-us/add",
        contactFormData
      );

      if (response.data.message) {
        alert("Contact form submitted successfully");
        setContactFormData({
          email: "",
          contactNumber: "",
          subject: "",
          address: "",
          message: "",
        });
      } else {
        alert("Error submitting contact form");
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <>
    <HeaderTab/>
      <div className="w-auto h-screen mt-16 flex flex-col justify-center items-center">
        <div className="w-auto pb-8 ml-3 text-4xl text-center text-green-700 ">
          <strong>Contact Us</strong>
        </div>
        <div className="flex ">
          <form
            onSubmit={handleContactSubmit}
            className="flex flex-col  overflow-y-auto"
          >
            <div className="divcontainer bg-white mx-auto h-[75vh] p-3 rounded">
              <div className="name flex m-5 ml-12 mb-3 items-center">
                <label className="mr-8 text-xl text-slate-700">
                  Email Address:
                </label>
                <input
                  type="email"
                  className="p-1 text-xl rounded-sm w-[60%] border-2 border-slate-300"
                  name="email"
                  value={contactFormData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="location flex m-4 ml-12 mb-3 items-center">
                <label className="mr-2 text-xl text-slate-700">
                  Contact Number:
                </label>
                <input
                  type="tel"
                  className="p-1 text-xl text-slate-700 rounded-sm w-[60%] border-2 border-slate-300"
                  name="contactNumber"
                  value={contactFormData.contactNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="location flex m-4 ml-12 mb-3 items-center">
                <label className="mr-24 text-xl text-slate-700">Subject:</label>
                <input
                  type="text"
                  className="p-1 text-xl text-slate-700 rounded-sm w-[60%] border-2 border-slate-300"
                  name="subject"
                  value={contactFormData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="location flex m-4 ml-12 mb-3 items-center">
                <label className="mr-20 text-xl text-slate-700">Address:</label>
                <input
                  type="text"
                  className="p-1 text-xl text-slate-700 rounded-sm w-[62%] border-2 border-slate-300"
                  name="address"
                  value={contactFormData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="blog-content flex flex-col m-4 ml-12 mb-3 items-start">
                <label className="mr-10 text-xl text-slate-700">Message:</label>
                <ReactQuill
                  value={contactFormData.message}
                  onChange={handleQuillChange}
                  className="w-[95%] h-36"
                />
              </div>
              <div className="self-center w-48 mt-16 mx-auto">
                <button
                  type="submit"
                  className="w-full p-3 bg-green-600 text-white text-xl rounded hover:bg-green-700 focus:outline-none focus:ring focus:border-green-700 transition"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
          <div className="bg-white ml-8 p-4 py-10 rounded">
            <div className="flex flex-col bg-slate-100 mx-4 p-5 my-3 items-center rounded">
              <IoLocationSharp size={30} color="green" className="mb-3" />
              <span className="text-xl text-green-600 ">Address</span>
              <span className="text-xl text-slate-600 ">Boudha, Kathmandu</span>
            </div>
            <div className="flex flex-col bg-slate-100 mx-4 p-5 my-3 items-center rounded">
              <IoCall size={30} color="green" className="mb-3" />
              <span className="text-xl text-green-600 ">Phone Number</span>
              <span className="text-xl text-slate-600 ">984165****</span>
            </div>
            <div className="flex flex-col bg-slate-100 mx-4 p-5 my-3 items-center rounded">
              <MdOutlineEmail size={30} color="green" className="mb-3" />
              <span className="text-xl text-green-600 ">Email</span>
              <span className="text-xl text-slate-600 ">byway@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsForm;
