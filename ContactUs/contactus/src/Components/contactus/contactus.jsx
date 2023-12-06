import React from 'react' 
import './contactus.css'

import Logo from '../Assets/logo.png';
import email_icon from '../Assets/email.png';
import book_icon from '../Assets/book.png';
import address_icon from '../Assets/address.png';
import message_icon from '../Assets/message.png';
import phone_icon from '../Assets/phone.png';
const contactus = () => {
  return(
    <div className = "container">
        <div className = 'header'>
            <div className = 'text'>Contact Us</div>
            <div className = 'underline'></div>
        </div>
        
        {/* input for email */}
        <div className = "inputs">
            <div className = "input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email' />
            </div>
            {/* input for phonenumber */}
            <div className = "input">
                <img src={phone_icon} alt="" />
                <input type="text" placeholder='Contact Number'/>
            </div>
            {/* input for Subject */}
            <div className = "input">
                <img src={book_icon} alt=""/>
                <input type="text" placeholder='Subject' />
            </div>
            {/* input for Address */}
            <div className = "input">
                <img src={address_icon} alt=""/>
                <input type="text" placeholder='Address' />
            </div>
            {/* input for Message */}
            <div className = "input">
                <img src={message_icon} alt=""/>
                <input type="text" placeholder='Message' />
            </div>
        </div>
       
     <div className="submit-container">
        <div className="submit">Send</div>
     </div>
    </div>
  );
};

export default contactus;