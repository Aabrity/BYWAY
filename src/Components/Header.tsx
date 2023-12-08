import Link from "next/link";
import Image from "next/image";
import React from "react";

function HeaderTab() {
  return (
    <>
      <nav className="bg-green-800 flex justify-between items-center h-24 p-4 font-sans font-bold text-lg ">
        <Image width={80} height={60} src="/assets/LogoByway 4.png" alt="BYWAY" />
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
    </>
  );
}
export default HeaderTab;
