import React from "react";
import Image from "next/image";
import Features from "@/Components/Features";
import SectionTitle from "@/Components/Common/SectionTitle";
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
      <SectionTitle
        title="Main Features"
        paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
        center
        mb='0'
      />
      <Features />
    </>
  );
}
