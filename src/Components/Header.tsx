"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function HeaderTab() {
  const [headerState, setHeaderState] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Add this line

  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeaderState(true);
    } else {
      setHeaderState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);

  return (
    <header
      className={`left-0 top-0 z-40 flex w-full font-sans items-center h-28 px-10 font-bold text-lg ${
        headerState
          ? "text-white fixed z-[9999] bg-green-800 !bg-opacity-70 shadow-sticky backdrop-blur-sm transition"
          : "absolute bg-transparent text-green-700"
      }`}
    >
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Image width={80} height={60} src="/assets/logo.png" alt="BYWAY" />
      </div>
      <button
        onClick={navbarToggleHandler}
        id="navbarToggler"
        aria-label="Mobile Menu"
        className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-green-600 focus:ring-2 lg:hidden"
      >
        <span
          className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
            navbarOpen ? " top-[7px] rotate-45" : " "
          }`}
        />
        <span
          className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
            navbarOpen ? "opacity-0 " : " "
          }`}
        />
        <span
          className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
            navbarOpen ? " top-[-8px] -rotate-45" : " "
          }`}
        />
      </button>
      <nav className={`${isOpen ? "" : "hidden"} lg:block`}>
        <ul className="flex gap-24 list-none justify-center w-full fixed z">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/packages">Explore Packages</Link>
          </li>
          <li>
            <Link href="/blogs">Explore Blogs</Link>
          </li>
          <li>
            <Link href="/contactUs">Contact Us</Link>
          </li>
          <li>
            <Link href="/planTrip">Plan Your Trip</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderTab;


