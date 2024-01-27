import React from "react";
import Image from "next/image";
import Features from "@/Components/Features";
import SectionTitle from "@/Components/Common/SectionTitle";
import HeaderTab from "@/Components/Header";
import FooterTab from "@/Components/Footer";
import { ClientMap } from "@/Components/Maps/ClientMap";
export default function Home() {
  return (
    <>
      <HeaderTab />
      <div style={{ height: "80vh", position: "relative" }}>
        <Image
          src="/assets/coverimage.jpg"
          alt="Welcome To ByWay"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <SectionTitle
        title="Our Services"
        paragraph="Embark on extraordinary adventures with seamless and enriching experience that goes beyond the ordinary with Byway"
        center
        mb="0"
      />
      <Features />
      <SectionTitle
        title="Our Packages"
        paragraph="Byway has been providing travel packages on popular destinations across the nation "
        center
        mb="0"
      />
      <ClientMap id="clientMap" />
      <FooterTab />
    </>
  );
}
