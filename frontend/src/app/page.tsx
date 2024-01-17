import SectionTitle from "@/Components/Common/SectionTitle";
<<<<<<< HEAD
import Features from "@/Components/Features";
import Image from "next/image";
=======
import HeaderTab from "@/Components/Header";
>>>>>>> 679f004a37f2a8cd881ab7e94edabcfce96dc548
export default function Home() {
  return (
    <>
    <HeaderTab/>
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
        mb='0'
      />
      <Features />
    </>
  );
}
