import SectionTitle from "@/Components/Common/SectionTitle";
import Features from "@/Components/Features";
import Image from "next/image";
export default function Home() {
  return (
    <>
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
