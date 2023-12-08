import { link } from "fs";
import Image from "next/image";
import React from "react";
const links = ["Home", "Contact Us", "Explore Vlogs", "Explore Packages"];

function HeaderTab() {
  return (
    <>
      <nav className="bg-green-800 flex justify-between items-center h-24 p-4 font-sans font-bold text-lg ">
        <Image width={80} height={60} src="/LogoByway 4.png" alt="BYWAY" />
        <ul className="flex gap-24 list-none justify-center w-full">
          {links.map((link) => (
            <li key={link}>
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default HeaderTab;
  