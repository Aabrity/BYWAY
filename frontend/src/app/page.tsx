import SectionTitle from "@/Components/Common/SectionTitle";
import Features from "@/Components/Features";
import HeaderTab from "@/Components/Header";
import Image from "next/image";
import PhotoGallery from "./Screenshot/page";
// import FooterTab from "@/Components/Footer";
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
      <PhotoGallery/>
      <SectionTitle
        title="Our Services"
        paragraph="Embark on extraordinary adventures with seamless and enriching experience that goes beyond the ordinary with Byway"
        center
        mb="0"
      />
     
      <Features />
      {/* <FooterTab /> */}
    </>
  );
}
