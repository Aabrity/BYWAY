"use client";
import React from "react";
import { IonIcon } from "@ionic/react";
import {
  logoFacebook,
  logoTwitter,
  logoGithub,
  logoLinkedin,
  logoInstagram,
} from "ionicons/icons";

// Import your logo
import logo from "@/public/next.svg"; // replace 'path-to-your-logo-file' with the actual path

interface Link {
  name: string;
  link: string;
}

interface FooterProps {
  Icons: Link[];
}

const SocialIcons: React.FC<FooterProps> = ({ Icons }) => {
  return (
    <div className="text-teal-500">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="p-2 cursor-pointer inline-flex items-center
            rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
            duration-300 "
        >
          <IonIcon icon={icon.name} />
        </span>
      ))}
    </div>
  );
};

const Footer: React.FC = () => {
  const Icons = [
    { name: logoFacebook, link: "#" },
    { name: logoTwitter, link: "#" },
    { name: logoGithub, link: "#" },
    { name: logoLinkedin, link: "#" },
    { name: logoInstagram, link: "#" },
  ];

  return (
    <footer className="bg-gray-700 text-white">
      <div className=" md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <div className="bg-transparent flex justify-between items-center text-center pt-2 text-gray-400 text-sm pb-8 w-full px-10">
          <div className=" flex justify-start items-center">
            <img src={logo} alt="logo" className="h-10 w-10" />{" "}
            {/* Adjust the size as needed */}
          </div>
          <div className="animate-pulse">Myway or Byway</div>
          <div className="flex justify-end items-center">
            <SocialIcons Icons={Icons} />
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="border-t border-gray-600"></div>
      {/* Copyright information */}
      <div className="text-center text-gray-400 text-sm">
        <span>© 2020 Appy. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
