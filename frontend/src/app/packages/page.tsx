"use client";
import React from "react";
import Image from "next/image";
import Card from "@/Components/Cards";
import Link from "next/link";


export const packagesData = [
  
  {
    packageID:"1",
    title: "Package Name 1",
   
    location: "here to here",
    
    imgSrc: "/images/bob.png",
    description:
      "Description goes here njcjcsjcnsjc cjnbcncj cjnxcbdjn cbhsxbcdh cbhnxj cbh cbdh cbhd",
    duration: "6 days",
    price: "400000",
    meals:'bbb',
    accomodations:'bbb', 
    recommended_group_size: '4',
    itinerary:'',
    imgArray: [
      '/images/istockphoto-1352722699-612x612.jpg',
      '/images/istockphoto-866904464-612x612.jpg',
      '/images/istockphoto-1352722699-612x612.jpg',
      '/images/istockphoto-866904464-612x612.jpg',
    ],

  },
  {
    packageID:"2",
    title: "Package Name 2",
    location: "here to here",
    imgSrc: "/images/istockphoto-866904464-612x612.jpg",
    description:
      "Description goes here njcjcsjcnsjc cjnbcncj cjnxcbdjn cbhsxbcdh cbhnxj cbh cbdh cbhd",
    duration: "6 days",
    price: "400000",
    meals:'bbb',
    accomodations:'bbb', 
    recommended_group_size: 'ggg',
    imgArray: [
      '/images/istockphoto-1352722699-612x612.jpg',
      '/images/istockphoto-1352722699-612x612.jpg',
      '/images/istockphoto-1352722699-612x612.jpg',
      '/images/istockphoto-866904464-612x612.jpg',
    ],
  },
  {
    packageID:"3",
    title: "Package Name 3",
   
    location: "here to here",
    imgSrc: "/images/istockphoto-935947682-612x612.jpg",
    description:
      "Description goes here njcjcsjcnsjc cjnbcncj cjnxcbdjn cbhsxbcdh cbhnxj cbh cbdh cbhd",
    duration: "6 days",
    price: "400000",
    meals:'bbb',
    accomodations:'bbb', 
    recommended_group_size: '4',
    imgArray: [
      '/images/istockphoto-1352722699-612x612.jpg',
      '/images/istockphoto-866904464-612x612.jpg',
      '/images/istockphoto-1352722699-612x612.jpg',
      '/images/istockphoto-866904464-612x612.jpg',]
  },
  {
    packageID:"4",
    title: "Package Name 4",
   
    location: "here to here",
    imgSrc: "/images/istockphoto-1352722699-612x612.jpg",
    description:
      "Description goes here njcjcsjcnsjc cjnbcncj cjnxcbdjn cbhsxbcdh cbhnxj cbh cbdh cbhd",
    duration: "6 days",
    price: "400000",
    meals:'bbb',
    accomodations:'bbb', 
    recommended_group_size: '4',
    imgArray: [
      '/images/istockphoto-1352722699-612x612.jpg',
      '/images/istockphoto-866904464-612x612.jpg',
      '/images/istockphoto-1352722699-612x612.jpg',
      '/images/istockphoto-866904464-612x612.jpg',
 ] },
  {
    packageID:"5",
    title: "Package Name 5",
    
    location: "here to here",
    imgSrc: "/images/istockphoto-866904464-612x612.jpg",
    description:
      "Description goes here njcjcsjcnsjc cjnbcncj cjnxcbdjn cbhsxbcdh cbhnxj cbh cbdh cbhd",
    duration: "6 days",
    price: "400000",
    meals:'bbb',
    accomodations:'bbb', 
    recommended_group_size: '4',
    imgArray: [
      '/images/istockphoto-1352722699-612x612.jpg',
      '/images/istockphoto-866904464-612x612.jpg',
      '/images/istockphoto-1352722699-612x612.jpg',
      '/images/istockphoto-866904464-612x612.jpg',]
  },
  {
    packageID:"6",
    title: "Package Name 5",
    location: "here to here",
    imgSrc: "/images/istockphoto-935947682-612x612.jpg",
    description:
      "Description goes here njcjcsjcnsjc cjnbcncj cjnxcbdjn cbhsxbcdh cbhnxj cbh cbdh cbhd",
    duration: "6 days",
    price: "400000",
    meals:'bbb',
    accomodations:'bbb', 
    recommended_group_size: '4',
    imgArray: [
      '/images/istockphoto-1352722699-612x612.jpg',
      '/images/istockphoto-866904464-612x612.jpg',
      '/images/istockphoto-1352722699-612x612.jpg',
      '/images/istockphoto-866904464-612x612.jpg',]
  },
  {
    packageID:"7",
    title: "Package Name 6",
    location: "here to here",
    imgSrc: "/images/istockphoto-1352722699-612x612.jpg",
    description:
      "Description goes here njcjcsjcnsjc cjnbcncj cjnxcbdjn cbhsxbcdh cbhnxj cbh cbdh cbhd",
    duration: "6 days",
    price: "400000",
    meals:'bbb',
    accomodations:'bbb', 
    recommended_group_size: '4',
    imgArray: [
      '/images/istockphoto-1352722699-612x612.jpg',
      '/images/istockphoto-866904464-612x612.jpg',
      '/images/istockphoto-1352722699-612x612.jpg',
      '/images/istockphoto-866904464-612x612.jpg',]
  },
  {
    packageID:"8",
    title: "Package Name",
    imgSrc: "/images/istockphoto-866904464-612x612.jpg",
    description:
      "Description goes here njcjcsjcnsjc cjnbcncj cjnxcbdjn cbhsxbcdh cbhnxj cbh cbdh cbhd",
    duration: "6 days",
    price: "400000",
    meals:'bbb',
    accomodations:'bbb', 
    recommended_group_size: '4',
    imgArray: [
      '/images/istockphoto-1352722699-612x612.jpg',
      '/images/istockphoto-866904464-612x612.jpg',
      '/images/istockphoto-1352722699-612x612.jpg',
      '/images/istockphoto-866904464-612x612.jpg',]
  },
  {
    packageID:"9",
    title: "Package Name",
    imgSrc: "/images/istockphoto-935947682-612x612.jpg",
    description:
      "Description goes here njcjcsjcnsjc cjnbcncj cjnxcbdjn cbhsxbcdh cbhnxj cbh cbdh cbhd",
    duration: "6 days",
    price: "400000",
    meals:'bbb',
    accomodations:'bbb', 
    recommended_group_size: '4',
    imgArray: [
      '/images/istockphoto-1352722699-612x612.jpg',
      '/images/istockphoto-866904464-612x612.jpg',
      '/images/istockphoto-1352722699-612x612.jpg',
      '/images/istockphoto-866904464-612x612.jpg',]
  },
  {
    packageID:"10",
    title: "Package Name",
    imgSrc: "/images/istockphoto-1352722699-612x612.jpg",
    description:
      "Description goes here njcjcsjcnsjc cjnbcncj cjnxcbdjn cbhsxbcdh cbhnxj cbh cbdh cbhd",
    duration: "6 days",
    price: "400000",
    meals:'bbb',
    accomodations:'bbb', 
    recommended_group_size: '4',
    imgArray: [
      '/images/istockphoto-1352722699-612x612.jpg',
      '/images/istockphoto-866904464-612x612.jpg',
      '/images/istockphoto-1352722699-612x612.jpg',
      '/images/istockphoto-866904464-612x612.jpg',]
  },
  {
    packageID:"11",
    title: "Package Name",
    imgSrc: "/images/istockphoto-866904464-612x612.jpg",
    description:
      "Description goes here njcjcsjcnsjc cjnbcncj cjnxcbdjn cbhsxbcdh cbhnxj cbh cbdh cbhd",
    duration: "6 days",
    price: "400000",
    meals:'bbb',
    accomodations:'bbb', 
    recommended_group_size: '4',
    imgArray: [
      '/images/istockphoto-1352722699-612x612.jpg',
      '/images/istockphoto-866904464-612x612.jpg',
      '/images/istockphoto-1352722699-612x612.jpg',
      '/images/istockphoto-866904464-612x612.jpg',]
  },
  {
    packageID:"12",
    title: "Package Name",
    imgSrc: "/images/istockphoto-935947682-612x612.jpg",
    description:
      "Description goes here njcjcsjcnsjc cjnbcncj cjnxcbdjn cbhsxbcdh cbhnxj cbh cbdh cbhd",
    duration: "6 days",
    price: "400000",
    meals:'bbb',
    accomodations:'bbb', 
    recommended_group_size: '4',
    imgArray: [
      '/images/istockphoto-1352722699-612x612.jpg',
      '/images/istockphoto-866904464-612x612.jpg',
      '/images/istockphoto-1352722699-612x612.jpg',
      '/images/istockphoto-866904464-612x612.jpg',]
  },
];

type PackageItemProps = {
  title: string;
  imgSrc: string;
  price: string;
  description: string;
  duration: string;
  packageID: number;
};
const PackageItem: React.FC<PackageItemProps> = ({
  title,
  imgSrc,
  price,
  description,
  duration,
}) => {
  return (
    <div className="mx-3 overflow-hidden border border-slate-200 group">
      <div className="overflow-hidden relative">

      <Card imgSrc={imgSrc}>
        <div className="text-bold flex justify-between">
          <strong className="text-xl">{title}</strong>
          <div>
            {price}
          </div>
        </div>
        <div className="flex justify-between">

          <div className="mt-2">
            {duration}
          </div>
        </div>
          <hr className="mt-2 mb-2 border-white" /> 
          <div className="mt-2">{description}</div>
          <hr className="mt-2 mb-2 border-white" /> 
          <div className="mt-2 flex justify-between items-center">
            
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
  <Link href="/packages/description">
    Details
  </Link>
</button>
          </div>
        </Card>
      </div>
    </div>
  );
};
const Packages: React.FC = () => {
  return (
    <div>
 <div className="mb-0" style={{ position: "relative" }}>
  <div
    style={{
      position: "absolute",
      top: "70%", 
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "700px",
      textAlign: "center",
    }}
  >
    <form>
      <input
        type="text"
        placeholder="Search..."
        style={{
          width: "70%",
          padding: "10px",
          marginRight: "5px",
          borderRadius: "2px",
          border: "0px solid #fff",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "7px",
          borderRadius: "5px",
          backgroundColor: "transparent",
          color: "white",
          border: "0px",
          transition: "background-color 0.2s",
        }}
        onMouseOver={(e) => (e.target as HTMLButtonElement).style.backgroundColor = "green"}
        onMouseOut={(e) => (e.target as HTMLButtonElement).style.backgroundColor = "transparent"} 
      >
        Search
      </button>
    </form>
  </div >
  <img src="/images/coverimage.jpg" alt="Background" className="w-full" />
</div>

      
      <section className="main-container padding-container pb-4">
      <h3 className='font-bold text-4xl text-left bg-indigo-950 text-white p-4 pb-4 mb-0'>Our Packages</h3>


        <div className="flex  flex-wrap gap-10 lg:flex-row pb-2 pt-2 ">
          {packagesData.map((card) => (
            <PackageItem
            key={card.title}
            title={card.title}
            imgSrc={card.imgSrc}
            price={card.price}
            description={card.description}
            duration={card.duration}
            
          />
          
          ))}
        </div>
      </section>
    </div>
  );
};

export default Packages;
