"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function HeaderTab() {
  const [headerState, setHeaderState] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeaderState(true);
    } else {
      setHeaderState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);

  return (
    <div>
      <nav
        className={`flex justify-between items-center h-24 p-4 font-sans font-bold text-lg ${
          headerState
            ? "bg-green-800 text-white fixed top-0 left-0 right-0 z-10"
            : "bg-transparent  text-green-800"
        }`}
      >
        <Image
          width={80}
          height={60}
          src="/assets/LogoByway 4.png"
          alt="BYWAY"
        />
        <ul className="flex gap-24 list-none justify-center w-full">
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
        </ul>
      </nav>
    </div>
  );
}

export default HeaderTab;
