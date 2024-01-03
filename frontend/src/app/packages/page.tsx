"use client";
import React from "react";
import Card from "@/Components/Packages/Cards";
import Link from "next/link";

export const packagesData = [
  {
    packageID: "1",
    title: "Package Name 1",
    discount: "80",
    location: "here to here",

    imgSrc: "/assets/packagesImg/bob.png",
    description:
      "Description goes here njcjcsjcnsjc cjnbcncj cjnxcbdjn cbhsxbcdh cbhnxj cbh cbdh cbhd",
    duration: "6 days",
    price: "400000",
    meals: "bbb",
    accomodations: "bbb",
    recommended_group_size: "4",
    itinerary: " Day 1kkkkk day 2 day 5 ......................................",
    imgArray: [
      "/assets/packagesImg/istockphoto-1352722699-612x612.jpg",
      "/assets/packagesImg/istockphoto-866904464-612x612.jpg",
      "/assets/packagesImg/istockphoto-1352722699-612x612.jpg",
      
      "/assets/packagesImg/istockphoto-866904464-612x612.jpg",
    ],
    
  },
  {
    packageID: "2",
    title: "Package Name 2",
    location: "here to here",
    imgSrc: "/assets/packagesImg/istockphoto-866904464-612x612.jpg",
    description:
      "Description goes here njcjcsjcnsjc cjnbcncj cjnxcbdjn cbhsxbcdh cbhnxj cbh cbdh cbhd",
    duration: "6 days",
    price: "400000",
    meals: "bbb",
    accomodations: "bbb",
    recommended_group_size: "ggg",
    imgArray: [
      "/assets/packagesImg/istockphoto-1352722699-612x612.jpg",
      "/assets/packagesImg/istockphoto-1352722699-612x612.jpg",
      "/assets/packagesImg/istockphoto-1352722699-612x612.jpg",
      "/assets/packagesImg/istockphoto-866904464-612x612.jpg",
    ],
    discount: "20",
  },
  {
    packageID: "3",
    title: "Package Name 3",

    location: "here to here",
    imgSrc: "/assets/packagesImg/istockphoto-935947682-612x612.jpg",
    description:
      "Description goes here njcjcsjcnsjc cjnbcncj cjnxcbdjn cbhsxbcdh cbhnxj cbh cbdh cbhd",
    duration: "6 days",
    price: "400000",
    meals: "bbb",
    accomodations: "bbb",
    recommended_group_size: "4",
    imgArray: [
      "/assets/packagesImg/istockphoto-1352722699-612x612.jpg",
      "/assets/packagesImg/istockphoto-866904464-612x612.jpg",
      "/assets/packagesImg/istockphoto-1352722699-612x612.jpg",
      "/assets/packagesImg/istockphoto-866904464-612x612.jpg",
    ],
    discount: "10",
  },
  {
    packageID: "4",
    title: "Package Name 4",

    location: "here to here",
    imgSrc: "/assets/packagesImg/istockphoto-1352722699-612x612.jpg",
    description:
      "Description goes here njcjcsjcnsjc cjnbcncj cjnxcbdjn cbhsxbcdh cbhnxj cbh cbdh cbhd",
    duration: "6 days",
    price: "400000",
    meals: "bbb",
    accomodations: "bbb",
    recommended_group_size: "4",
    imgArray: [
      "/assets/packagesImg/istockphoto-1352722699-612x612.jpg",
      "/assets/packagesImg/istockphoto-866904464-612x612.jpg",
      "/assets/packagesImg/istockphoto-1352722699-612x612.jpg",
      "/assets/packagesImg/istockphoto-866904464-612x612.jpg",
    ],
    discount: "45",
  },
  {
    packageID: "5",
    title: "Package Name 5",

    location: "here to here",
    imgSrc: "/assets/packagesImg/istockphoto-866904464-612x612.jpg",
    description:
      "Description goes here njcjcsjcnsjc cjnbcncj cjnxcbdjn cbhsxbcdh cbhnxj cbh cbdh cbhd",
    duration: "6 days",
    price: "400000",
    meals: "bbb",
    accomodations: "bbb",
    recommended_group_size: "4",
    imgArray: [
      "/assets/packagesImg/istockphoto-1352722699-612x612.jpg",
      "/assets/packagesImg/istockphoto-866904464-612x612.jpg",
      "/assets/packagesImg/istockphoto-1352722699-612x612.jpg",
      "/assets/packagesImg/istockphoto-866904464-612x612.jpg",
    ],
    discount: "10",
  },
  {
    packageID: "6",
    title: "Package Name 5",
    location: "here to here",
    imgSrc: "/assets/packagesImg/istockphoto-935947682-612x612.jpg",
    description:
      "Description goes here njcjcsjcnsjc cjnbcncj cjnxcbdjn cbhsxbcdh cbhnxj cbh cbdh cbhd",
    duration: "6 days",
    price: "400000",
    meals: "bbb",
    accomodations: "bbb",
    recommended_group_size: "4",
    imgArray: [
      "/assets/packagesImg/istockphoto-1352722699-612x612.jpg",
      "/assets/packagesImg/istockphoto-866904464-612x612.jpg",
      "/assets/packagesImg/istockphoto-1352722699-612x612.jpg",
      "/assets/packagesImg/istockphoto-866904464-612x612.jpg",
    ],
    discount: "10",
  },
  {
    packageID: "7",
    title: "Package Name 6",
    location: "here to here",
    imgSrc: "/assets/packagesImg/istockphoto-1352722699-612x612.jpg",
    description:
      "Description goes here njcjcsjcnsjc cjnbcncj cjnxcbdjn cbhsxbcdh cbhnxj cbh cbdh cbhd",
    duration: "6 days",
    price: "400000",
    meals: "bbb",
    accomodations: "bbb",
    recommended_group_size: "4",
    imgArray: [
      "/assets/packagesImg/istockphoto-1352722699-612x612.jpg",
      "/assets/packagesImg/istockphoto-866904464-612x612.jpg",
      "/assets/packagesImg/istockphoto-1352722699-612x612.jpg",
      "/assets/packagesImg/istockphoto-866904464-612x612.jpg",
    ],
    discount: "10",
  },
  {
    packageID: "8",
    title: "Package Name 8",
    imgSrc: "/assets/packagesImg/istockphoto-866904464-612x612.jpg",
    description:
      "Description goes here njcjcsjcnsjc cjnbcncj cjnxcbdjn cbhsxbcdh cbhnxj cbh cbdh cbhd",
    duration: "6 days",
    price: "400000",
    meals: "bbb",
    accomodations: "bbb",
    recommended_group_size: "4",
    imgArray: [
      "/assets/packagesImg/istockphoto-1352722699-612x612.jpg",
      "/assets/packagesImg/istockphoto-866904464-612x612.jpg",
      "/assets/packagesImg/istockphoto-1352722699-612x612.jpg",
      "/assets/packagesImg/istockphoto-866904464-612x612.jpg",
    ],
    discount: "10",
  },
  {
    packageID: "9",
    title: "Package Name 9",
    imgSrc: "/assets/packagesImg/istockphoto-935947682-612x612.jpg",
    description:
      "Description goes here njcjcsjcnsjc cjnbcncj cjnxcbdjn cbhsxbcdh cbhnxj cbh cbdh cbhd",
    duration: "6 days",
    price: "400000",
    meals: "bbb",
    accomodations: "bbb",
    recommended_group_size: "4",
    imgArray: [
      "/assets/packagesImg/istockphoto-1352722699-612x612.jpg",
      "/assets/packagesImg/istockphoto-866904464-612x612.jpg",
      "/assets/packagesImg/istockphoto-1352722699-612x612.jpg",
      "/assets/packagesImg/istockphoto-866904464-612x612.jpg",
    ],
    discount: "10",
  },
  {
    packageID: "10",
    title: "Package Name 10",
    imgSrc: "/assets/packagesImg/istockphoto-1352722699-612x612.jpg",
    description:
      "Description goes here njcjcsjcnsjc cjnbcncj cjnxcbdjn cbhsxbcdh cbhnxj cbh cbdh cbhd",
    duration: "6 days",
    price: "400000",
    meals: "bbb",
    accomodations: "bbb",
    recommended_group_size: "4",
    imgArray: [
      "/assets/packagesImg/istockphoto-1352722699-612x612.jpg",
      "/assets/packagesImg/istockphoto-866904464-612x612.jpg",
      "/assets/packagesImg/istockphoto-1352722699-612x612.jpg",
      "/assets/packagesImg/istockphoto-866904464-612x612.jpg",
    ],
    discount: "10",
  },
  {
    packageID: "11",
    title: "Package Name 11",
    imgSrc: "/assets/packagesImg/istockphoto-866904464-612x612.jpg",
    description:
      "Description goes here njcjcsjcnsjc cjnbcncj cjnxcbdjn cbhsxbcdh cbhnxj cbh cbdh cbhd",
    duration: "6 days",
    price: "400000",
    meals: "bbb",
    accomodations: "bbb",
    recommended_group_size: "4",
    imgArray: [
      "/assets/packagesImg/istockphoto-1352722699-612x612.jpg",
      "/assets/packagesImg/istockphoto-866904464-612x612.jpg",
      "/assets/packagesImg/istockphoto-1352722699-612x612.jpg",
      "/assets/packagesImg/istockphoto-866904464-612x612.jpg",
    ],
    discount: "25",
  },
  {
    packageID: "12",
    title: "Package Name 12",
    imgSrc: "/assets/packagesImg/istockphoto-935947682-612x612.jpg",
    description:
      "Description goes here njcjcsjcnsjc cjnbcncj cjnxcbdjn cbhsxbcdh cbhnxj cbh cbdh cbhd",
    duration: "6 days",
    price: "400000",
    meals: "bbb",
    accomodations: "bbb",
    recommended_group_size: "4",
    imgArray: [
      "/assets/packagesImg/istockphoto-1352722699-612x612.jpg",
      "/assets/packagesImg/istockphoto-866904464-612x612.jpg",
      "/assets/packagesImg/istockphoto-1352722699-612x612.jpg",
      "/assets/packagesImg/istockphoto-866904464-612x612.jpg",
    ],
    discount: "0",
  },
];

type PackageItemProps = {
  title: string;
  imgSrc: string;
  price: string;
  description: string;
  duration: string;
  packageID: string;
  discount: string; 


};

const PackageItem: React.FC<PackageItemProps> = ({
  title,
  imgSrc,
  price,
  description,
  duration,
  packageID,
  discount,
  

}) => {
  const numericPrice = parseInt(price);
  const discountPercentage = parseInt(discount);

  
  if (isNaN(numericPrice) || isNaN(discountPercentage)) {
    console.error("Invalid price or discount:", price, discount);
    return null; 
  }

  const discountedPrice = numericPrice - (numericPrice * discountPercentage) / 100;
  console.log("Original Price:", numericPrice);
  console.log("Discount Percentage:", discountPercentage);
  console.log("Discounted Price:", discountedPrice);

  return (
    <div className="mx-3 overflow-hidden border border-slate-200 group">
    <div className="overflow-hidden relative">
      <Card imgSrc={imgSrc} >
        <div className="text-bold flex justify-between">
          <strong className="text-xl">{title}</strong>
          <div>
              {discountPercentage > 0 ? (
                <>
                  <span className="text-white font-bold ">${discountedPrice.toFixed(2)}</span>
                  <br />
                  <span className="text-white line-through">${numericPrice.toFixed(2)}</span>
                </>
              ) : (
                <span className="font-bold">${numericPrice.toFixed(2)}</span>
              )}
            </div>
          </div>
        <div className="flex justify-between">
          <div className="mt-1">{duration}</div>
        </div>
        <hr className="mt-2 mb-2 border-white" />
        <div className="mt-2">{description}</div>
        <hr className="mt-2 mb-2 border-white" />
        <div className="mt-2 flex justify-between items-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            <Link href="/packages/[description]"as={'/packages/${packageID}'}>  
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
              onMouseOver={(e) =>
                ((e.target as HTMLButtonElement).style.backgroundColor =
                  "green")
              }
              onMouseOut={(e) =>
                ((e.target as HTMLButtonElement).style.backgroundColor =
                  "transparent")
              }
            >
              Search
            </button>
          </form>
        </div>
        <img src="/assets/packagesImg/coverimage.jpg" alt="Background" className="w-full" />
      </div>

      <section className="main-container padding-container pb-4">
        <h3 className="font-bold text-4xl text-left bg-indigo-950 text-white p-4 pb-4 mb-0">
          Our Packages
        </h3>
        <div className="flex  flex-wrap gap-10 lg:flex-row pb-2 pt-2 ">
          {packagesData.map((card) => (
            <PackageItem
              key={card.packageID}
              title={card.title}
              imgSrc={card.imgSrc}
              price={card.price}
              description={card.description}
              packageID={card.packageID}
              duration={card.duration}
              discount={card.discount}
              imgArray={card.imgArray}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Packages;
