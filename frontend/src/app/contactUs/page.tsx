"use client";
import Axios from "axios";
import React, { useState, useRef } from "react";
import { useForm, SubmitHandler } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import "./contactus.css";

import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { FaMapPin } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";

import HeaderTab from "@/Components/Header";

// Define the form data interface
interface YourFormData {
  Email: string;
  contactnum: string;
  subject: string;
  address: string;
  message: string;
}

// Contactus component
function Contactus() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const form = useRef<HTMLFormElement>(null);

  // Form submission handler
  const onSubmit: SubmitHandler<YourFormData> = async (data) => {
    try {
      // Your Axios code for saving data to the server
      const response = await Axios.post("http://localhost:8081/contactus/addcontact", {
        email: data.Email,
        phone: data.contactnum,
        subject: data.subject,
        address: data.address,
        message: data.message,
      });
  
      console.log(response.data);
      alert("Successfully inserted");
  
      if (form.current) {
        const emailjsResponse = await emailjs.sendForm('service_0gn9pz7', 'template_ows0j7b', form.current, 'gc2y_H__-i5FW_ept');
        console.log('Message sent:', emailjsResponse);
      } else {
        console.error("Form reference is null");
      }
  
    } catch (error) {
      console.error("Error submitting form:", error);
  
     
      alert("Error submitting form. Please try again later.");
    }
  };


  return (
    <>
      <HeaderTab />

    <div className="parent-con">
      <div className="container">
        <div className="header">
          <div className="text">Contact Us</div>
          <div className="underline"></div>
        </div>
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
          <div className="inputs">
            <div className="input">
              <MdOutlineMail />
              <input
                type="email"
                id="Email"
                name="Email"
                placeholder="Email"
                required
                {...register('Email')}
              />
            </div>
            <div className="input">
              <FaPhoneAlt />
              <input
                type="text"
                id="contactnum"
                name="contactnum"
                placeholder="Contact Number"
                required
                {...register('contactnum')}
              />
            </div>
            <div className="input">
              <FaBook />
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                required
                {...register('subject')}
              />
            </div>
            <div className="input">
              <FaMapPin />
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Address"
                required
                {...register('address')}
              />
            </div>
            <div className="input">
              <FiMessageCircle />
              <input
                type="text"
                id="message"
                name="message"
                placeholder="Message"
                required
                {...register('message')}
              />
            </div>
          </div>
          <div className="submit-container">
            <input type="submit" value="Send" />
            
          </div>
        </form>
      </div>

      <div className="our-container">
      <div className="header1">
          <div className="text1">Our Contacts</div>
          <div className="underline1"></div>
        </div>
        <div className="Sub-Head">
          
          <FaMapPin />
          <div className="texts">Address</div>
          <div className="Info"> Boudhha, Kathmandu </div>
          </div>
        

        <div className="Sub-Head">
        
          <FaPhoneAlt />
          <div className="texts">Phone</div>
          <div className="Info"> 9835689*** </div>
        </div>

        <div className="Sub-Head">
       
          <MdOutlineMail />
          <div className="texts">Email</div>
          <div className="Info"> aa***@gmail.com </div>
          
        </div>
      </div>
      </div>
    </>
  );
}

export default Contactus;