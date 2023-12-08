import HeaderTab from "../Components/Header";
import React from "react";

export default function Home() {
  return (
    <>
      <div
        className="bg-cover bg-center h-screen "
        style={{ backgroundImage: `url(${"/assets/coverimage.jpg"})` }}
      >
      <HeaderTab/>
      </div>

      {/* rest of the component goes here... 👇🏻 👇🏻 👇🏻 👇🏻 👇🏻 👇🏻 👇� */}
    </>
  );
}
