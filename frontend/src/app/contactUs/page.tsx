"use client";
import Axios from "axios";
import { useState } from "react";
import React from "react";
import "./contactus.css";

import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { FaMapPin } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";

function Contactus() {
  const [Email, setEmail] = useState("");
  const [contactnum, setContactnum] = useState("");
  const [subject, setSubject] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const submit = () => {
    Axios.post("http://localhost:3000/byway", {
      email: Email,
      phone: contactnum,
      subject: subject,
      address: address,
      message: message,
    }).then(() => {
      alert("succesfully inserted");
    });
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="text">Contact Us</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">
          <div className="input">
            <MdOutlineMail />
            <input
              type="email"
              id="Email"
              name="Email"
              placeholder="Email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
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
              onChange={(e) => {
                setContactnum(e.target.value);
              }}
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
              onChange={(e) => {
                setSubject(e.target.value);
              }}
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
              onChange={(e) => {
                setAddress(e.target.value);
              }}
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
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="submit-container">
          <button
            type="submit"
            name="submit"
            value="customize_trip"
            className="submit"
            onClick={submit}
          >
            SUBMIT
          </button>
        </div>
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
    </>
  );
}
export default Contactus;
