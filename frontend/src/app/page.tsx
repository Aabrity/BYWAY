import React from "react";
import Image from "next/image";
import Features from "@/Components/Features";
export default function Home() {
  return (
    <>
      <div style={{ height: "80vh", position: "relative" }}>
        <Image
          src="/assets/scenes/coverimage.jpg"
          alt="Welcome To ByWay"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <Features />
    </>
  );
}
