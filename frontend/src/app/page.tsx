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
        title="Our Services"
        paragraph="Embark on extraordinary adventures with our travel agency. Discover the world's most captivating destinations, tailored to your desires. At [Your Company Name], we redefine travel, offering a seamless and enriching experience that goes beyond the ordinary. Our commitment to excellence ensures every journey is a masterpiece, filled with moments that last a lifetime."
        center
        mb='0'
      />
      <Features />
    </>
  );
}
