import React from 'react'
import Image from 'next/image';
import './contactus.css'

function Contactus() {
  return (
    <div className="Screen">
      <div className="container">
        <div className="header">
          <div className="text">Contact Us</div>
          <div className="underline"></div>
        </div>

        {/* input for email */}
        <div className="inputs">
          <div className="input">
            <Image width={35} height={35} src='/Assets/email.png' alt="" />
            <input type="email" placeholder="Email" />
          </div>
          {/* input for phonenumber */}
          <div className="input">
            <Image width={35} height={35} src='/Assets/phone.png' alt="" />
            <input type="text" placeholder="Contact Number" />
          </div>
          {/* input for Subject */}
          <div className="input">
            <Image width={35} height={35} src='/Assets/book.png' alt="" />
            <input type="text" placeholder="Subject" />
          </div>
          {/* input for Address */}
          <div className="input">
            <Image width={35} height={35} src='/Assets/address.png' alt="" />
            <input type="text" placeholder="Address" />
          </div>
          {/* input for Message */}
          <div className="input">
            <Image width={35} height={35} src='/Assets/message.png' alt="" />
            <input type="text" placeholder="Message" />
          </div>
        </div>
        {/* Send button */}
        <div className="submit-container">
          <div className="submit">Send</div>
        </div>
      </div>
      <div className="our-container">
        <div className="header1">
          <div className="text1">Our Contacts</div>
          <div className="underline1"></div>
        </div>
        <div className="Sub-Head">
          <Image width={30} height={30} src='/Assets/address.png' alt="" />
          <div className="texts">Address</div>
          <div className="Info"> Boudhha, Kathmandu </div>
        </div>

        <div className="Sub-Head">
          <Image width={30} height={30} src='/Assets/phone.png' alt="" />
          <div className="texts">Phone</div>
          <div className="Info"> 9835689*** </div>
        </div>

        <div className="Sub-Head">
          <Image width={30} height={30} src='/Assets/email.png' alt="" />
          <div className="texts">Email</div>
          <div className="Info"> aa***@gmail.com </div>
        </div>
      </div>
    </div>
  )
}
export default Contactus;